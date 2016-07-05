/**
 * Checkbox component controller
 */

import Component from '../common/component';
import classNames from 'classnames';
import CheckboxStates from '../../stateenum/checkbox.state';

'use strict';

/**
 * Checkbox component
 * 
 * @export
 * @class Checkbox
 * @extends {Component}
 */
export default class Checkbox extends Component {
  /**
   * @override
   */
  _initDefaultState() {
    if (this.checked) {
      this.halfChecked = false;
    }
    this._state = {
      [`${CheckboxStates.DISABLED}`]: this.disabled,
      [`${CheckboxStates.CHECKED}`]: this.checked,
      [`${CheckboxStates.HALF_CHECKED}`]: this.halfChecked
    };
  }
  /**
   * @override 
   */
  _initDefaultValue() {
    this.htmlID = this.htmlID || 'checkbox_' + Math.random().toString(36).substr(2, 9);
    this.trueValue = this.trueValue ? this.trueValue : true;
    this.falseValue = this.falseValue? this.falseValue : false;
  }
  /**
   * @override 
   */
  _createClassName() {
    this.className = classNames({
      'disabled': this._state[CheckboxStates.DISABLED],
      'checked': this._state[CheckboxStates.CHECKED],
      'half-checked': this._state[CheckboxStates.HALF_CHECKED]
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
    if (!this._init) return;
    // checked 状态
    if (changeObj.hasOwnProperty(CheckboxStates.CHECKED)) {
      this.changeHandler();
    }
    // 半选
    if (changeObj.hasOwnProperty(CheckboxStates.HALF_CHECKED)) {
      const halfChecked = changeObj[CheckboxStates.HALF_CHECKED]['currentValue'];
      this.state = {
        [`${CheckboxStates.HALF_CHECKED}`]: halfChecked
      };
      if (halfChecked) {
        this.state = {
          [`${CheckboxStates.CHECKED}`]: false
        };
      }
    }
    // 禁用
    if (changeObj.hasOwnProperty(CheckboxStates.DISABLED)) {
      this.state = {
        [`${CheckboxStates.DISABLED}`]: changeObj[CheckboxStates.DISABLED]['currentValue']
      };
    }
    this._render();
  }
  /**
   * 这是用户点击改变的行为
   */
  changeHandler() {
    if (this.checked == this.trueValue) {
      this.state = {
        [`${CheckboxStates.CHECKED}`]: true,
        [`${CheckboxStates.HALF_CHECKED}`]: false
      };
    } else {
      this.state = {
        [`${CheckboxStates.CHECKED}`]: false
      };
    }
  }
}