
/**
 * @type {String}
 * @property {String}   type      	  - binding symbol is @, 是单个时间组件还是时间范围组件
 * @property {String}   model       	- binding symbol is =?, 单个时间值
 * @property {String}   startModel    - binding symbol is =?, 范围时间组件，开始时间值
 * @property {String}   endModel     	- binding symbol is =?, 范围时间组件，结束时间值
 * @property {String}   min       		- binding symbol is <, 最小时间限制
 * @property {String}   max   			  - binding symbol is <, 最大时间限制
 * @property {String}   startView  		- binding symbol is @, 开始时间视图
 * @property {String}   minView       - binding symbol is @, 最小时间视图
 * @property {Number}   minuteStep    - binding symbol is <, 分钟间隔
 * @property {String}   modelType     - binding symbol is @, 显示的格式 YYYY-MM-DD 还是其他，默认到分
 * @property {Boolean}  startDisabled - binding symbol is <, 开始时间Disabled
 * @property {Boolean}  endDisabled   - binding symbol is <, 结束时间Disabled
 * @property {Boolean}  disabled      - binding symbol is <, Disabled状态
 * @property {Array}    placeholders  - binding symbol is <, placeholders
 * @property {String}   separator     - binding symbol is @, 范围时间分隔符，默认'至'
 *
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
     * 单个时间框/还是时间范围
     * @type {String}
     */
    type: '@',
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
    startView: '@',
    /**
     * 最小视图
     * @type {String}
     */
    minView: '@',
    /**
     * 分钟间隔
     * @type {Number}
     */
    minuteStep: '<',
    /**
     * 时间展示格式
     * @type {String}
     */
    modelType: '@',
    /**
     * 从左到右时间框提示文案
     * @type {Array}
     */
    placeholders: '<',
    /**
     * 所有的时间框禁用状态
     */
    disabled: '<',
    /**
     * 开始时间框禁用状态
     */
    startDisabled: '<',
    /**
     * 结束时间框禁用状态
     */
    endDisabled: '<',
    /**
     * 分隔符
     */
    separator: '@'
  }
};

export default componentDefine;
