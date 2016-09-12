/**
 * @ngdoc directive
 * @name datetimepicker.directive:bpDatetimepicker
 * @author liuchang
 * @restrict E
 * @description
 * - 时间选择组件
 * - 支持单个时间框和一组时间框
 *
 * @param {String}            type              - binding symbol is `<`,    判断展示单个时间框或一组时间框 
 * @param {String}            model             - binding symbol is `=?`,   存储单个时间框的值
 * @param {String}            startModel        - binding symbol is `=?`,   存储一组时间框的开始时间
 * @param {String}            endModel          - binding symbol is `=?`,   存储一组时间框的结束时间
 * @param {String | Number}   min               - binding symbol is `<`,    最小值
 * @param {String | Number}   max               - binding symbol is `<`,    最大值
 * @param {Boolean}           allDisabled       - binding symbol is `<`,    是否禁用全部 默认为 `false` 不禁用
 * @param {Boolean}           startDisabled     - binding symbol is `<`,    是否禁用开始时间 默认为 `false` 不禁用
 * @param {Boolean}           endDisabled       - binding symbol is `<`,    是否禁用结束时间 默认为 `false` 不禁用
 * @param {Array}             placeholders      - binding symbol is `<`,    文本框从左到右的placeholder 默认为 `['请选择开始时间', '请选择结束时间']`
 * @param {String}            modelType         - binding symbol is `<`,    时间展示格式 默认为 'YYYY-MM-DD HH:mm:ss'
 * @param {Number}            minuteStep        - binding symbol is `<`,    分钟间隔 默认为 1
 * @param {String}            minView           - binding symbol is `<`,    最小视图 默认为 'minute'
 * @param {String}            startView         - binding symbol is `<`,    首次打开时的视图 默认为 'day'
 *
 * @example
 * 
  1、默认的单个时间框
    <pre>
      <bp-datetimepicker model="vm.config.model"></bp-datetimepicker>
    </pre>
    <pre>
      this.config = {
        model: ""
      };
    </pre>
  2、禁用单个时间框
  <pre>
    <bp-datetimepicker
      model="vm.newConfig.model"
      placeholders="vm.newConfig.placeholders"
      all-disabled="vm.newConfig.allDisabled"
    ></bp-datetimepicker>
  </pre>
  <pre>
    this.newConfig = {
      model: "",
      placeholders: ['单个时间框'],
      allDisabled: true
    };
  </pre>
  3、默认的一组时间框（纵向）
  <pre>
    <div class="row">
      <div class="col-xs-6">
        <div class="form-group">
          <label>纵向时间框排列</label>
          <bp-datetimepicker
            type="vm.config.type"
            start-model="vm.config.startModel"
            end-model="vm.config.endModel"
          ></bp-datetimepicker>
        </div>
      </div>
    </div>
  </pre>
  <pre>
    this.config = {
      type: "range",
      startModel: "",
      endModel: ""
    };
  </pre>
  4、默认的一组时间框（横向）
  <pre>
    <form class="form-horizontal" novalidate>
      <div class="form-group">
        <label class="col-sm-2 control-label">横向时间框排列</label>
        <div class="col-sm-5">
          <bp-datetimepicker
            type="vm.config.type"
            start-model="vm.config.startModel"
            end-model="vm.config.endModel"
          ></bp-datetimepicker>
        </div>
      </div>
    </form>
  </pre>
  <pre>
    this.config = {
      type: "range",
      startModel: "",
      endModel: ""
    };
  </pre>
  5、限制时间范围的时间框
  <pre>
    <form class="form-horizontal" novalidate>
      <div class="form-group">
        <div class="col-sm-8">
          <bp-datetimepicker
            type="vm.config.type"
            start-model="vm.config.startModel"
            end-model="vm.config.endModel"
            min="vm.config.min"
            max="vm.config.max"
            placeholders="vm.config.placeholders"
          ></bp-datetimepicker>
        </div>
      </div>
    </form>
  </pre>
  <pre>
    this.config = {
      type: "range",
      startModel: "",
      endModel: "",
      min: "2016-7-23 14:29:39", // Date()、时间戳、moment()、"today"
      max: "today",              // Date()、时间戳、moment()、"today"
      placeholders: ['启动时间', '结束时间']
    };
  </pre>
  6、全部禁用时间框
  <pre>
    <form class="form-horizontal" novalidate>
      <div class="form-group">
        <div class="col-sm-8">
          <bp-datetimepicker
            type="vm.newConfig.type"
            start-model="vm.newConfig.startModel"
            end-model="vm.newConfig.endModel"
            all-disabled="vm.newConfig.allDisabled"
          ></bp-datetimepicker>
        </div>
      </div>
    </form>
  </pre>
  <pre>
    this.newConfig = {
      type: "range",
      startModel: moment().format('YYYY-MM-DD HH:mm:ss'),
      endModel: "",
      allDisabled: true
    };
  </pre>
  7、禁用开始时间框
  <pre>
    <form class="form-horizontal" novalidate>
      <div class="form-group">
        <div class="col-sm-8">
          <bp-datetimepicker
            type="vm.startDisabledConfig.type"
            start-model="vm.startDisabledConfig.startModel"
            end-model="vm.startDisabledConfig.endModel"
            start-disabled="vm.startDisabledConfig.startDisabled"
            placeholders="vm.startDisabledConfig.placeholders"
            start-view="vm.startDisabledConfig.startView"
            min-view="vm.startDisabledConfig.minView"
            model-type="vm.startDisabledConfig.modelType"
          ></bp-datetimepicker>
        </div>
      </div>
    </form>
  </pre>
  <pre>
    this.startDisabledConfig = {
      type: "range",
      startModel: moment().format('YYYY-MM-DD'),
      endModel: "",
      placeholders: ['', '禁用开始时间框'],
      startDisabled: true,
      startView: "month",
      minView: "day",
      modelType: "YYYY-MM-DD"
    };
  </pre>
  8、禁用结束时间框
  <pre>
    <form class="form-horizontal" novalidate>
      <div class="form-group">
        <div class="col-sm-8">
          <bp-datetimepicker
            type="vm.endDisabledConfig.type"
            start-model="vm.endDisabledConfig.startModel"
            end-model="vm.endDisabledConfig.endModel"
            end-disabled="vm.endDisabledConfig.endDisabled"
            placeholders="vm.endDisabledConfig.placeholders"
            start-view="vm.endDisabledConfig.startView"
            min-view="vm.endDisabledConfig.minView"
          ></bp-datetimepicker>
        </div>
      </div>
    </form>
  </pre>
  <pre>
    this.endDisabledConfig = {
      type: "range",
      startModel: "",
      endModel: moment().format('YYYY-MM-DD HH:mm:ss'),
      placeholders: ['禁用结束时间框'],
      endDisabled: true,
      startView: "month",
      minView: "hour",
    };
  </pre>
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
  _initDefaultValue() {
    this.config = {
      startView: 'day',
      minView: 'minute',
      minuteStep: 1,
      modelType: 'YYYY-MM-DD HH:mm:ss',
      renderOn: 'BP-RERENDER'
    };
    this.defaultConfig = {
      startPlaceholder: "请选择开始时间",
      endPlaceholder: "请选择结束时间",
      allDisabled: false,
      startDisabled: false,
      endDisabled: false
    };
    this.formatConfig();
    this.formatDisabled();
    this.startConfig = angular.copy(this.config);
    this.endConfig = angular.copy(this.config);
    this.formatMinAndMaxDate();
    this.createDropdownSelectorId();
    this.formatPlaceholders();
  }
  /**
   * 格式化默认config
   */
  formatConfig() {
    angular.forEach(this.config, (item, index) => {
      if(!angular.isUndefined(this[index])) {
        this.config[index] = this[index];
      }
    })
  }
  /**
   * 格式化placeholders, 从左到右
   */
  formatPlaceholders() {
    if (angular.isArray(this.placeholders)) {
      angular.forEach(this.placeholders, (item, index) => {
        if (index == 0 && item) {
          this.defaultConfig.startPlaceholder = item;
        } else if (index == 1 && item) {
          this.defaultConfig.endPlaceholder = item;
        }
      })
    }
  }
  /**
   * 格式化禁用状态
   */
  formatDisabled() {
    this.defaultConfig.allDisabled = angular.isUndefined(this.allDisabled) ? false : this.allDisabled;
    this.defaultConfig.startDisabled = this.defaultConfig.endDisabled = this.defaultConfig.allDisabled;
    if (this.type == "range" && angular.isUndefined(this.allDisabled)) {
      this.defaultConfig.startDisabled = angular.isUndefined(this.startDisabled) ? false : this.startDisabled;
      this.defaultConfig.endDisabled = angular.isUndefined(this.endDisabled) ? false : this.endDisabled;
    }
  }
  /**
   * 格式化最小和最大时间
   */
  formatMinAndMaxDate() {
    if (this.min == "today") {
      this.minDate = moment().valueOf();
    } else if (!angular.isUndefined(this.min)){
      this.minDate = this.min;
    }
    if (this.max == "today") {
      this.maxDate = moment().valueOf();
    } else if (!angular.isUndefined(this.max)){
      this.maxDate = this.max;
    }
  }
  /**
   * 单个和多个时间框不同配置
   */
  createDropdownSelectorId() {
    this.startDropdownSelector = 'datetimepicker' + Math.random().toString(36).substr(2, 9);
    this.startConfig.dropdownSelector = "#" + this.startDropdownSelector;
    if (!this.type || this.type != "range") {
      this.startModel = this.model;
      this.defaultConfig.startPlaceholder = "请选择时间";
    } else if (this.type == "range") {
      this.endDropdownSelector = 'datetimepicker' + Math.random().toString(36).substr(2, 9);
      this.endConfig.dropdownSelector = "#" + this.endDropdownSelector;
      this.startModel = this.startModel;
      this.endModel = this.endModel;
    }
  }
  /**
   * 打开时间框重新渲染
   */
  renderOnClick() {
    this.$scope.$broadcast('BP-RERENDER');
  }
  /**
   * 开始渲染开始时间 
   */
  beforeRenderStartDate($view, $dates, $leftDate, $upDate, $rightDate) {
    this.beforeRenderDate($view, $dates);
    if (this.endModel) {
      this.maxOrEndDateDisabled($view, $dates, this.endModel);
    }
  }
  /**
   * 开始渲染结束时间
   */
  beforeRenderEndDate($view, $dates, $leftDate, $upDate, $rightDate) {
    this.beforeRenderDate($view, $dates);
    if (this.startModel) {
      this.minOrStartDateDisabled($view, $dates, this.startModel);
    }
  }
  /**
   * 比较最小时间和最大时间
   */
  beforeRenderDate($view, $dates) {
    if (this.minDate) {
      this.minOrStartDateDisabled($view, $dates, this.minDate);
    }
    if (this.maxDate) {
      this.maxOrEndDateDisabled($view, $dates, this.maxDate);
    }
  }
  /**
   * 最小日期和开始日期不可选
   */
  minOrStartDateDisabled($view, $dates, date) {
    let activeDate = moment(date).subtract(1, $view).add(1, 'minute');
    for (var i = 0; i < $dates.length; i++) {
      if ($dates[i].localDateValue() <= activeDate.valueOf()) $dates[i].selectable = false;
    }
  }
  /**
   * 最大日期和结束日期不可选
   */
  maxOrEndDateDisabled($view, $dates, date) {
    let activeDate = moment(date);
    for (var i = 0; i < $dates.length; i++) {
      if ($dates[i].localDateValue() >= activeDate.valueOf()) $dates[i].selectable = false;
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
