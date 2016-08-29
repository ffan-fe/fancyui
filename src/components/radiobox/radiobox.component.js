/**
 * @type {Object}
 * @property {Boolean}   disabled       - binding symbol is `<`, 禁用状态
 * @property {String}    value          - binding symbol is `@`, 选中后的值
 * @property {ANY}       model          - binding symbol is `=?`,绑定在`radioBox`上的`model`
 * @property {complex}   complex        - binding symbol is `=?complex`, 因为`value`只能提供`String`, 复杂结构数据类型使用, `complex`指令
 */

import controller from './radiobox';
import template from './template.html';
import './radiobox.less';

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
     * 选中后的值
     *
     * @type {String}
     */
    value: '@',

    /**
     * model
     * @type {String}
     */
    model: '=?model',

    /**
     *因为value只能提供String  复杂结构数据类型使用 complex指令
     * @type {anyObject}
     */
    complex: '=?complex'
  }
};

export default componentDefine;
