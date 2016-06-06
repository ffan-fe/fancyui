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
export default class Button extends Component{
  /**
   * @constructor
   */
  constructor() {
    super();
  }
  $onInit() {
    // ====== bindings values =======
    this.type = this.type || 'primary';
    this.prefixCls = this.prefixCls || 'bp-btn';
    this.htmlType = this.htmlType || 'button';
    // ====== bindings values =======
    this.className = classNames({
      'btn': true,
      [`${this.prefixCls}-${this.type}`]: this.prefixCls
    });
    console.log(this.click);
  }
}