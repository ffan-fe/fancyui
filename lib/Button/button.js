/**
 * @ngdoc directive
 * @name button.directive:bpButton
 * @author fengpeng
 * @restrict E
 * @description
 * 按钮组件, 实际上是对**HTML Button**的包装, 自定义了一些状态等
 * 包含的状态有
 * - enable
 * - disabled
 * - loading
 *
 * @param {String}    type        - binding symbol is `@`, 此类型针对的是样式, 比如选了primary class会出现 `"bp-btn-primary""`, 默认值是primary, 可选值[`"default"`, `"primary"`, `"danger"`]
 * @param {String}    size        - binding symbol is `@`, 按钮大小, 和bootstrap一样, 不填则是默认大小
 * @param {String}    htmlType    - binding symbol is `@`, 顾名思义, 代表的是原生html里的type值
 * @param {Boolean}   disabled    - binding symbol is `<`, 禁用状态
 * @param {String}    icon        - binding symbol is `@`, 按钮文字前方的icon名称, 详细见[bootstrap](http://getbootstrap.com/components/#glyphicons)
 * @param {ANY}       click       - binding symbol is `&`, click处理器的表达式
 *
 *
 */
import Component from '../common/component';
import classNames from 'classnames';
import ButtonState from '../stateenum/button.state';

'use strict';

/**
 * Button component
 *
 * @export
 * @class Button
 * @extends {Component}
 */
export default class Button extends Component {
  /**
   * @override
   * @protected
   */
  _initDefaultState() {
    this._state = {
      // the disabled is bindings property
      [`${ButtonState.DISABLED}`]: this.disabled
    };
  }
  /**
   * @override
   * @protected
   */
  _initDefaultValue() {
    /**
     * 确定模板的class属性值
     *
     * @type {String}
     * @protected
     */
    this.className = '';
    /**
     * Component binding value, 用来确定模板中class的属性值 `bp-btn-{type}`, 默认值是 `primary`
     *
     * @type {String}
     * @protected
     */
    this.type = this.type || 'primary';
    /**
     * Component binding value, html中的type属性.真
     *
     * @type {String}
     * @protected
     */
    this.htmlType = this.htmlType || 'button';
    /**
     * Component binding value, 在按钮文字的前方添加icon
     *
     * @type {String}
     * @protected
     */
    this.iconType = this.icon || '';
  }
  /**
   * @override
   * @protected
   */
  _createClassName() {
    this.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`btn-${this.size}`]: !!this.size,
      [`bp-btn-${this.type}`]: true,
      'loading-btn': this._state[ButtonState.LOADING]
    });
  }
  /**
   * @override
   * @protected
   */
  _launch() {}
  /**
   * 比超类多了loading状态
   * @override
   * @protected
   */
  _render() {
    if (this._state[ButtonState.LOADING]) {
      this.iconType = 'loading';
      this._state[ButtonState.DISABLED] = true;
    } else {
      // not loading state, icon hide or rollback
      this.iconType = this.icon;
    }
    // call super to update className
    super._render();
  }
  /**
   * 包装一个click处理器, 在模板里面用ngClick, 然后调用传进来的处理器
   *
   * @private
   */
  innerClick() {
    this.click && typeof this.click === 'function' 
      && this.click({button: this});
  }
  /**
   * 这里主要是会有Disable值的外部变化
   *
   * @protected
   * @param {Object} changeObj
   */
  $onChanges(changeObj) {
    if (!this._init) return;
    if (changeObj.hasOwnProperty(ButtonState.DISABLED)) {
      this._state[ButtonState.DISABLED] = changeObj[ButtonState.DISABLED]['currentValue'];
      this._render();
    }
  }
}
