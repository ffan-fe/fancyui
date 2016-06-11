/**
 * Checkbox component define
 */

import controller from './checkbox';
import template from './template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    /**
     * 是否被选中
     * 
     * @type {Boolean}
     */
    checked: '<',
    /**
     * label 显示
     * 
     * @type {String}
     */
    label: '@'
  }
}

export default componentDefine;