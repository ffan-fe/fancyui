/**
 * abstract component
 */

import CommonState from '../../stateenum/common-state';

'use strict';


/**
 * (description)
 * 
 * @export
 * @abstract 
 * @class Component
 */
export default class Component {
  /**
   * @constructor
   */
  constructor() {
    /**
     * 状态, 每个组件都会拥有一个状态, 用这个标识来确定UI的形态
     * 
     * @protected 
     */
    this._state;
    /**
     * 这个值通常是经`this._state`变化而得来的, 在UI方面实际上使用的是ng-disabled在实现, 所以绑定此值来切换状态
     * 
     * @type {boolean}
     * @default false
     * @see `this._renderEnable` method
     * @see `this._renderDisable` method
     */
    this._disabled = false;
  }
  /**
   * get component state
   * 
   * @public 
   * @implements {IComponentState}
   */ 
  get state() {
    return this._state;
  }
  /**
   * set component state
   * 
   * @public 
   * @implements {IComponentState}
   */
  set state(state) {
    this._state = state;
  }
  /**
   * template pattern
   * 
   * @protected 
   * @final
   */
  $onInit() {
    this._initDefaultValue();
    this._createClassName();
    this._build();
  }
  /**
   * 初始化默认值, 因为angular组件变量传递是在component定义决定的, 有些值可能没有传进来, 所以在这里确定一次
   * 
   * @protected 
   */
  _initDefaultValue() {
    throw new Error('IllegalOperationError for _initDefaultValue method, you need override the method');
  }
  /**
   * 确定className, 处理过之后赋值到`this.className`属性, 并经由此属性填充到UI(html)的class属性里
   * 
   * @protected 
   */
  _createClassName() {
    throw new Error('IllegalOperationError for _createClassName method, you need override the method');
  }
  /**
   * 实现组件功能的细节部分
   * 
   * @protected 
   */
  _build() {
    throw new Error('IllegalOperationError for _build method, you need override the method');
  }
  /**
   * 针对不同的状态, 做UI变化, 期望子类都来override这个方法
   * 
   * @protected 
   */
  _render(state) {
    switch(state) {
      case CommonState.ENABLE :
        this._renderEnable();
        break;
      case CommonState.DISABLE :
        this._renderDisable();
        break;
    }
  }
  /**
   * 切换到可用状态, 如果需要特别操作, 请override
   * 
   * @protected
   */
  _renderEnable() {
    this._disabled = false;
  }
  /**
   * 切换到禁用状态, override同上
   */
  _renderDisable() {
    this._disabled = true;
  }
}