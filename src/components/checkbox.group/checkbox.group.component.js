/**
 * checkbox group component define
 * @author fengpeng
 */

import controller from './checkbox.group';
import template from './template.html';

/**
 * @type {Object}
 * @property {Boolean}          disabled        - binding symbol is <, 禁用状态, 在组上禁用则全部禁用, 实际上是对ng-disabled的包装
 * @property {Array.<Object>}   model           - binding symbol is =?, 数据源, 由于是双向绑定的逻辑会去修改数据源上的checked属性
 * @property {Boolean}          inline          - binding symbol is @, 是否横着排
 */
let CheckboxGroupComponentDefine =  {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    disabled: '<',
    model: '=?model',
    inline: '@'
  }
}

export default CheckboxGroupComponentDefine;