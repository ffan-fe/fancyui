/**
 * Checkbox component define
 * @author fengpeng
 */

import controller from './checkbox';
import template from './template.html';
import './checkbox.less';

'use strict';

/**
 * @type {Object}
 * @property {Boolean}    disabled       - binding symbol is <, 禁用状态
 * @property {Boolean}    checked        - binding symbol is =?, 是否被选中状态
 * @property {Boolean}    halfChecked    - binding symbol is =?, 是否是半选状态
 * @property {ANY}        trueValue      - binding symbol is @, like ng-true-value, 是对ng-true-value的封装
 * @property {ANY}        falseValue     - binding symbol is @, like ng-false-value, 是对ng-false-value的封装
 */
let CheckboxComponentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    disabled: '<',
    checked: '=?checked',
    halfChecked: '=?halfChecked',
    trueValue: '@',
    falseValue: '@',
    change: '&?',
    click: '&?'
  }
}

export default CheckboxComponentDefine;