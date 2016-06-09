/**
 * 
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
  }
  /**
   * @override 
   */
  _createClassName() {
    this.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`${this.prefixCls}-${this.type}`]: true
    });
  }
  /**
   * @override 
   */
  _build() {
    this.loading = !!this.loading;
    // console.log(this.click({button:this}));
  }
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
    }
  }
  /**
   * 为此按钮提供loading渲染.
   * 如没有激活loading参数, 此操作将不予支持, 以免在内部做转换导致使用疑惑
   * 
   * @private 
   */
  _renderLoading() {
    this._renderDisable();
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