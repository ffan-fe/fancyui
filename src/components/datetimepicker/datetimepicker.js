/**
 * @ngdoc directive
 * @name datetimepicker.directive:bpDatetimepicker
 * @restrict E
 * @description
 * - 时间组件
 * - 提供单个时间或者范围时间
 *
 * @param {String}   type      	   - binding symbol is @, 是单个时间组件还是时间范围组件
 * @param {String}   model       	 - binding symbol is =?, 单个时间值
 * @param {String}   startModel    - binding symbol is =?, 范围时间组件，开始时间值
 * @param {String}   endModel      - binding symbol is =?, 范围时间组件，结束时间值
 * @param {String}   min       		 - binding symbol is <, 最小时间限制
 * @param {String}   max   			   - binding symbol is <, 最大时间限制
 * @param {String}   startView  	 - binding symbol is @, 开始时间视图
 * @param {String}   minView       - binding symbol is @, 最小时间视图
 * @param {Number}   minuteStep    - binding symbol is <, 分钟间隔
 * @param {String}   modelType     - binding symbol is @, 显示的格式 YYYY-MM-DD 还是其他，默认到秒
 * @param {Boolean}  startDisabled - binding symbol is <, 开始时间Disabled
 * @param {Boolean}  endDisabled   - binding symbol is <, 结束时间Disabled
 * @param {Boolean}  disabled      - binding symbol is <, Disabled状态
 * @param {Array}    placeholders  - binding symbol is <, placeholders
 * @param {String}   separator     - binding symbol is @, 范围时间分隔符，默认'至'
 *
 * @example
 *
 <pre>
 <bp-datetimepikcer
  model="vm.model"
 ></bp-datetimepkcer>
 </pre>

 <pre>
 this.model = '';
 </pre>

 <pre>
 <bp-datetimepikcer
  type="range"
  start-model="vm.startModel"
  end-model="vm.endModel"
 ></bp-datetimepkcer>
 </pre>

 <pre>
 this.startModel = '';
 this.endModel = '';
 </pre>
 更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/datetimepicker)
 */
import Component from '../common/component';
import moment from 'moment';

'use strict';

/**
 * Datetimepicker component
 *
 * @export
 * @class Datetimepicker
 * @extends {Component}
 */
export default class Datetimepicker extends Component {
  constructor($scope) {
    'ngInject';
    super();
    this.$scope = $scope;
  }
  /**
   * @override
   */
  _initDefaultValue(){
    /**
     * 配置项
     * base 是angular-bootstrap-datetimepicker组件的配置
     * bp   是业务传进来的配置
     * @type {{base: {startDropdownSelector: string, endDropdownSelector: string, startView: string, minView: string, minuteStep: number, modelType: string, renderOn: string}, bp: {startPlaceholder: string, endPlaceholder: string, allDisabled: boolean, startDisabled: boolean, endDisabled: boolean}}}
     */
    this.config = {
      base:{
        startView: 'day',
        minView: 'minute',
        minuteStep: 1,
        modelType: 'YYYY-MM-DD HH:mm:ss',
        renderOn: 'start-date-changed'
      },
      bp:{
        placeholders:{
          startPlaceholder: '请选择开始时间',
          endPlaceholder: '请选择结束时间'
        },
        disabled: false,
        startDisabled: false,
        endDisabled: false
      }
    };
    this.extendConfig();
    this.check();
    this.startConfig = angular.copy(angular.extend(this.config.base, {
      dropdownSelector: '#start' + Math.random().toString(36).substr(2, 9),
      renderOn: 'start-date-changed'
    }));
    this.endConfig = angular.copy(angular.extend(this.config.base, {
      dropdownSelector: '#end' + Math.random().toString(36).substr(2, 9),
      renderOn: 'end-date-changed'
    }));
  }

  /**
   * extend的业务配置
   */
  extendConfig(){
    this.setBaseConfig();
    this.setModel();
    this.setDisabled();
    this.setPlaceholders();
  }

  /**
   * 设置 angular-bootstrap-datetimepicker组件的配置
   */
  setBaseConfig(){
    angular.forEach(this.config.base, (item, index) => {
      if(!angular.isUndefined(this[index])) {
        this.config.base[index] = this[index];
      }
    });
  }

  /**
   * 一个时间选择框时
   * 重新赋值 startModel = model
   */
  setModel(){
    if(this.type != 'range'){
      this.startModel = this.model;
    }
  }

  /**
   * 是否不可点击
   */
  setDisabled(){
    this.config.bp.disabled = angular.isUndefined(this.disabled) ? false : this.disabled;
    this.type == "range" ?
      this.config.bp.startDisabled = this.config.bp.endDisabled = this.config.bp.disabled :
      this.config.bp.startDisabled = this.config.bp.disabled;
    if(!this.config.bp.disabled){
      this.config.bp.startDisabled = angular.isUndefined(this.startDisabled) ? false : this.startDisabled;
      this.config.bp.endDisabled = angular.isUndefined(this.endDisabled) ? false : this.endDisabled;
    }
  }

  /**
   * 设置placeholders
   */
  setPlaceholders(){
    if(!angular.isUndefined(this.placeholders)){
      if(angular.isArray(this.placeholders) && this.placeholders.length > 0){
        if(this.placeholders.length == 1){
          this.config.bp.placeholders['startPlaceholder'] = this.placeholders[0] ;
        }else{
           this.config.bp.placeholders['startPlaceholder'] = this.placeholders[0];
           this.config.bp.placeholders['endPlaceholder'] = this.placeholders[1];
        }
      }else{
        throw 'placeholders must be array';
      }
    }
  }

  startDateOnSetTime(){
    this.$scope.$broadcast('start-date-changed');
  }

  endDateOnSetTime(){
    this.$scope.$broadcast('end-date-changed');
  }

  /**
   * 开始时间渲染
   */
  beforeRenderStartDate($view, $dates){
    this.max ? this.endDateBeforeRender($view, $dates, this.max, 'max') : '';
    this.min ? this.startDateBeforeRender($view, $dates, this.min, 'min') : '';
    if(!angular.isUndefined(this.endModel)){
      this.endDateBeforeRender($view, $dates, this.endModel);
    }
  }

  /**
   * 结束时间渲染
   */
  beforeRenderEndDate($view, $dates){
    this.max ? this.endDateBeforeRender($view, $dates, this.max, 'max') : '';
    this.min ? this.startDateBeforeRender($view, $dates, this.min, 'min') : '';
    if(!angular.isUndefined(this.startModel)){
      this.startDateBeforeRender($view, $dates, this.startModel);
    }
  }

  /**
   *起时间disabled 设置
   */
  startDateBeforeRender($view, $dates, date, type){
    let activeDate = moment(date).subtract(1, $view).add(1, 'minute');
    for (var i = 0; i < $dates.length; i++) {
      /**
       * 如果有最小时间的限制 最小时间可以选
       */
      if(type == 'min' || ['day', 'month', 'year'].indexOf(this.config.base.minView) > -1){
        if ($dates[i].localDateValue() < activeDate.valueOf()){
          $dates[i].selectable = false;
        }
      }else{
        if ($dates[i].localDateValue() <= activeDate.valueOf()){
          $dates[i].selectable = false;
        }
      }
    }
  }

  /**
   *截止时间disabled 的设置
   */
  endDateBeforeRender($view, $dates, date, type){
    let activeDate = moment(date);
    for (var i = 0; i < $dates.length; i++) {
      /**
       * 如果有最大值的限制 最大值可以选
       */
      if(type == 'max' || ['day', 'month', 'year'].indexOf(this.config.base.minView) > -1){
        if ($dates[i].localDateValue() > activeDate.valueOf()){
          $dates[i].selectable = false;
        }
      }else{
        if ($dates[i].localDateValue() >= activeDate.valueOf()){
          $dates[i].selectable = false;
        }
      }
    }
  }

  /**
   * 校验参数合法性
   */
  check(){
    if(this.min && this.max){
      if(moment(this.min).valueOf() > moment(this.max).valueOf()){
        throw new Error('maxDate must be greater than minDate');
      }
    }
  }

  /**
   * @override
   */
  _createClassName() {}
  /**
   * @override
   */
  _launch() {}

}
