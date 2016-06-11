/**
 * Icon component define
 */

import controller from './icon';
import template from './template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    /**
     * 类型, 也直接决定了渲染成哪个图标
     * 
     * @type {string}
     */
    type: '<'
  }
}

export default componentDefine;