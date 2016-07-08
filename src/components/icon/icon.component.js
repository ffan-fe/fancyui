/**
 * Icon component define
 */

import controller from './icon';
import template from './template.html';

'use strict';

/**
 * @type {Object}
 * @property {String} type  - binding symbol <, 类型, 也直接决定了渲染成哪个图标
 */
let IconComponentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    type: '<'
  }
}

export default IconComponentDefine;