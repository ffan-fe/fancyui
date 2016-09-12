/**
 * Datetimepicker
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
      minuteStep: 5,
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
