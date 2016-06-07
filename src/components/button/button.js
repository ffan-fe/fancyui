/**
 * 
 */

import Component from '../common/component';
import classNames from 'classnames';

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
      [`${this.prefixCls}-${this.type}`]: true
    });
  }
  /**
   * @override 
   */
  _build() {
    this.loading = !!this.loading;
  }

  $onChanges(changeObj) {
    console.log('onChanges', changeObj);
  }
}