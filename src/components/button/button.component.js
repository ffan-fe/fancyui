/**
 * Button component define
 */

import controller from './button';
import template from './template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是primary还是别的定义, 会直接导致class的变化, 比如你选了primary class会出现 `bp-btn-primary`
     * 注意这里还和`prefixCls`有关系
     * 
     * @type {String} 按钮的类型 
     * @values [default, primary, danger]
     * @default primary
     */
    type: '@',
    /**
     * 顾名思义了
     * 
     * @type {String} 会转换bootstrap里面一样的值 [lg, sm, xs] 不填是默认大小 
     */
    size: '@',
    /**
     * 详细看type参数吧, 息息相关 一般都不会改这个
     * 
     * @type {String}
     * @default bp-btn 
     */
    prefixCls: '@',
    /**
     * 顾名思义, 就是正常html里面的参数
     * 
     * @type {String}
     * @default button 
     */
    htmlType: '@',
    /**
     * 组件的禁用状态
     * 
     * @type {Boolean}
     */
    disabled: '<',
    /**
     * 实际上是icon类型, 也就是bootstrap icon里面那堆类型
     * 
     * @type {String}
     */
    icon: '@',
    /**
     * 是否支持loading
     * 
     * @type {Boolean}
     */
    loading: '@',
    /**
     * @type {Function}
     */
    click: '&'
  }
};

export default componentDefine;