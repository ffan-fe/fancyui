/**
 * Datetimepicker component define
 */

import controller from './datetimepicker';
import template from './template.html';
import './datetimepicker.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    /**
     * 判断展示时间框的个数
     * @type {String}
     */
    type: '<',
    /**
     * 单个时间框的model
     * @type {String}
     */
    model: '=?',
    /**
     * 开始时间框的model
     * @type {String}
     */
    startModel: '=?',
    /**
     * 结束时间框的model
     * @type {String}
     */
    endModel: '=?',
    /**
     * 最小开始时间 (毫秒)
     * @type {Number}
     */
    min: '<',
    /**
     * 最大结束时间 (毫秒)
     * @type {Number}
     */
    max: '<',
    /**
     * 首次打开时的视图
     * @type {String}
     */
    startView: '<',
    /**
     * 最小视图
     * @type {String}
     */
    minView: '<',
    /**
     * 分钟间隔
     * @type {Number}
     */
    minuteStep: '<',
    /**
     * 时间展示格式
     * @type {String}
     */
    modelType: '<',
    /**
     * 从左到右时间框提示文案
     * @type {Array}
     */
    placeholders: '<',
    /**
     * 所有的时间框禁用状态
     */
    allDisabled: '<',
    /**
     * 开始时间框禁用状态
     */
    startDisabled: '<',
    /**
     * 结束时间框禁用状态
     */
    endDisabled: '<',
  }
};

export default componentDefine;
