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
    this.htmlID = this.htmlID || 'radio' + Math.floor(Math.random() * 1000000);
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

  /**
   * radio状态 是否被选中
   *因为初始值 model value complex都为undefined
   * 加了判断是为了规避初始不设置任何值情况为选中的状态
   */
  isChecked() {
    if(this.model && (this.value || this.complex)) {
      if (this.model === this.value || this.model === this.complex) {
        return true;
      }
    }
    return false;
  }

}