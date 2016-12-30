/**
 * abstract component
 * @author fengpeng
 */

import CommonState from '../stateenum/common.state';

'use strict';

/**
 * 基类, 定义了模板和一系列基础操作
 *
 * @export
 * @abstract
 * @class Component
 * @implements {IComponentState}
 */
export default class Component {
  /**
   * @constructor
   */
  constructor() {
    /**
     * every component has a state object, according to the state properties to determine how to display UI
     *
     * @type {Object}
     * @protected
     */
    this._state = {};
    /**
     * 是否初始化完毕, 标识着是否执行完$onInit
     *
     * @protected
     * @type {Boolean}
     * @default false
     * @see {@link $onInit}
     */
    this._init = false;
  }
  /**
   * get component state
   *
   * @public
   */
  get state() {
    return this._state;
  }
  /**
   * set component state
   *
   * @public
   * @param state {Object}
   */
  set state(state) {
    if (Object.prototype.toString.call(state) === '[object Object]') {
      this._state = angular.merge(this._state, state);
      this._render();
    }
  }
  /**
   * 构建模板, 在最后会将 _init设置为true
   *
   * @protected
   * @final
   * @see {@link _init}
   */
  $onInit() {
    this._initDefaultValue();
    this._initDefaultState();
    this._render();
    this._launch();
    this._init = true;
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
   * initialize state object
   */
  _initDefaultState() {
    this._state = {
      [`${CommonState.DISABLED}`]: false
    };
  }
  /**
   * 确定className, 处理过之后赋值到`this.className`属性, 并经由此属性填充到UI(html)的class属性里
   * 每次render都会重新计算一次样式
   *
   * @protected
   * @see {@link _render}
   */
  _createClassName() {
    throw new Error('IllegalOperationError for _createClassName method, you need override the method');
  }
  /**
   * 实现组件功能的细节部分
   *
   * @protected
   */
  _launch() {
    throw new Error('IllegalOperationError for _launch method, you need override the method');
  }
  /**
   * 针对不同的状态, 做UI变化, 如果子类有新状态那么override, 并super调用此方法
   *
   * @protected
   */
  _render() {
    this._createClassName();
  }
}
