/**
 * Button component controller
 */

import Component from '../common/component';
import classNames from 'classnames';
import ButtonState from '../../stateenum/button.state';

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
   */
  _initDefaultState() {
    this._state = {
      // the disabled is bindings property
      [`${ButtonState.DISABLED}`]: this.disabled
    };
  }
  /**
   * @override 
   */
  _initDefaultValue() {
    this.type = this.type || 'primary';
    this.prefixCls = this.prefixCls || 'bp-btn';
    this.htmlType = this.htmlType || 'button';
    this.iconType = this.icon || '';
  }
  /**
   * @override 
   */
  _createClassName() {
    this.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`btn-${this.size}`]: !!this.size,
      [`${this.prefixCls}-${this.type}`]: true,
      'loading-btn': this._state[ButtonState.LOADING]
    });
  }
  /**
   * @override 
   */
  _launch() {}
  /**
   * 比超类多了loading状态
   * @override 
   */
  _render() {
    console.log('_render', this._state);
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
   * 包装一个click处理器
   * 
   * @public 
   */
  innerClick() {
    this.click && typeof this.click === 'function' && this.click({button: this});
  }
  /**
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