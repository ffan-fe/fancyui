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
   * 这里是因为改变值, 很有可能是binding过来的值, 并没有调用setter state.
   * 所以需要监听一下, 然后调用一次
   *
   * @param changeObj {Object}
   */
  $onChanges(changeObj) {
  }

  /**
   * 这是用户点击改变的行为
   */
  changeHandler() {
  }

}