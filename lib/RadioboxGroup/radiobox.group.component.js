/**
 * @type {Object}
 * @property {Boolean}         disabled        - binding symbol is `<`, 禁用状态
 * @property {Boolean}         inline          - binding symbol is `<`, 是否横向展示
 * @property {String}          model           - binding symbol is `=?model`, 绑定在radioBoxGroup上的model
 * @property {Array.<Object>}  list            - binding symbol is `=?list`, 数据源, controller提供的数组用于遍历展示radio
 */

import controller from './radiobox.group';
import template from './template.html';
import './radiobox.group.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是否被禁用
     * @type {Boolean}
     */
    disabled: '<',

    /**
     * model
     * @type {String}
     */
    model: '=?model',

    /**
     * list
     * @type {String}
     */
    list: '=?list',

    /**
     * Is display li to inline
     *
     * @type {Boolean}
     */
    inline: '=?inline'

  }
};

export default componentDefine;
