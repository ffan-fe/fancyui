/**
 * Checkbox component controller
 * @author fengpeng
 */

import Component from '../common/component';
import classNames from 'classnames';
import CheckboxStates from '../../stateenum/checkbox.state';

'use strict';

/**
 * Checkbox component
 * 这里是对<input checkbox>的封装, 唯一需要说明的是半选状态, 是表现一个列表, 选中了某几项, 却又没有全选的状态
 * 
 * @export
 * @class Checkbox
 * @extends {Component}
 * @example 
 *  <bp-checkbox checked="true">暴风雪</bp-checkbox>
 */
export default class Checkbox extends Component {
  /**
   * @override 
   * @protected 
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
   * @protected 
   */
  _initDefaultValue() {
    this.htmlID = this.htmlID || 'checkbox_' + Math.random().toString(36).substr(2, 9);
    this.trueValue = this.trueValue ? this.trueValue : true;
    this.falseValue = this.falseValue? this.falseValue : false;
  }
  /**
   * @override 
   * @protected 
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
   * @protected 
   */
  _launch() {}
  /**
   * 这里是因为改变值, 很有可能是binding过来的值, 并没有调用setter state.
   * 所以需要监听一下, 然后调用一次
   * 
   * @protected 
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
   * 用户点击而改变状态的处理器, 是在模板里面的
   * 
   * @private 
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