/**
 * Checkbox component define
 */

import controller from './checkbox';
import template from './template.html';
import './checkbox.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是否被禁用
     * 
     * @type {Boolean}
     */
    disabled: '<',
    /**
     * 是否被选中
     * 
     * @type {Boolean}
     */
    checked: '=',
    /**
     * 半选状态, 主要是列表里面, 选择且不全选的情况
     * 值得
     * 
     * @type {Boolean}
     */
    halfChecked: '<',
    /**
     * label 显示
     * 
     * @type {String}
     */
    label: '@'
  }
}

export default componentDefine;