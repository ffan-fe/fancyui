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
  _initDefaultValue() {
    this.type = this.type || 'primary';
    this.prefixCls = this.prefixCls || 'bp-btn';
    this.htmlType = this.htmlType || 'button';
    this.iconType = this.icon || '';
    this._disabled = this.disabled;
  }
  /**
   * @override 
   */
  _createClassName() {
    this.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`btn-${this.size}`]: !!this.size,
      'loading-btn': this._state === ButtonState.LOADING,
      [`${this.prefixCls}-${this.type}`]: true
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
  _render(state) {
    super._render(state);
    switch(state) {
      case ButtonState.LOADING :
        this._renderLoading();
        return;
      default :
        this.iconType = this.icon;
    }
  }
  /**
   * 为此按钮提供loading渲染.
   * 
   * @private 
   */
  _renderLoading() {
    this._renderDisable();
    this.iconType = 'loading';
  }
  /**
   * 包装一个click处理器
   * 
   * @public 
   */
  innerClick() {
    this.click && typeof this.click === 'function' && this.click({button: this});
  }
}