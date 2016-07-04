/**
 * Radio
 */

import Component from '../common/component';
import classNames from 'classnames';
import RadioStates from '../../stateenum/radio.state';

'use strict';

/**
 * Radio component
 * 
 * @export
 * @class Radio
 * @extends {Component}
 */
export default class Radio extends Component {

  /**
   * 默认状态
   */
  _initDefaultState() {
    this._state = {
      [`${RadioStates.DISABLED}`]: this.disabled
    };
  }

  /**
   * 默认值
   * @override 
   */
  _initDefaultValue() {
    this.htmlID = this.htmlID || 'radio_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * 样式集合
   * @override
   */
  _createClassName() {
    this.className = classNames({
      'disabled': this._state[RadioStates.DISABLED]
    });
  }

  /**
   * @override
   */
  _launch() {}

}