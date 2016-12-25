/**
 * Button component define
 */

import controller from './button';
import template from './template.html';
import './button.less';

'use strict';

/**
 * @type {Object}
 * @property {String}   type        - binding symbol is @, 此类型针对的是样式, 比如选了primary class会出现 `bp-btn-primary`, 默认值是primary, 可选值[default, primary, danger]
 * @property {String}   size        - binding symbol is @, 按钮大小, 和bootstrap一样, 不填则是默认大小
 * @property {String}   htmlType    - binding symbol is @, 顾名思义, 代表的是原生html里的type值
 * @property {Boolean}  disabled    - binding symbol is <, 禁用状态
 * @property {String}   icon        - binding symbol is @, 按钮文字前方的icon名称, 详细见bootstrap
 * @property {Boolean}  click       - binding symbol is &, click 处理器
 */
let ButtonComponentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    type: '@',
    size: '@',
    htmlType: '@',
    disabled: '<',
    icon: '@',
    click: '&'
  }
};

export default ButtonComponentDefine;