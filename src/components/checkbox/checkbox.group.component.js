/**
 * checkbox group component define
 */

import controller from './checkbox.group';
import template from './checkbox.group.template.html';

export default {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    /**
     * 是否禁用, 在组上禁用就全部禁用了
     * 
     * @type {Boolean}
     */
    disabled: '<',
    /**
     * 数据源, 逻辑上会去直接修改数据源上的checked属性
     * 
     * @type {Array.<Object>}
     */
    model: '=model',
    /**
     * Is display li to inline
     * 
     * @type {Boolean}
     */
    inline: '@'
  }
}