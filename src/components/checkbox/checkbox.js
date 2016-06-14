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
  _initDefaultState() {}
  /**
   * @override 
   */
  _initDefaultValue() {
    this.label = this.label || '';
    this.htmlID = this.htmlID || 'checkbox' + Math.floor(Math.random() * 1000000);
    this._disabled = this.disabled;
    
    if (this.checked) {
      this._state = CheckboxStates.CHECKED;
    } else {
      this._state = CheckboxStates.UNCHECKED;
    }
    // 半选和选择是冲突的, 有全选就全选
    if (this.halfChecked && !this.checked) {
      this._state = CheckboxStates.halfChecked;
    }
  }
  /**
   * @override 
   */
  _createClassName() {
    this.className = classNames({
      'checked': this.checked,
      'half-checked': !this.checked && this.halfChecked,
      'disabled': this._disabled
    });
  }
  
  /**
   * @override 
   * @param state {String}
   */
  _render(state) {
    switch(state) {
      case CheckboxStates.CHECKED :
        this._renderChecked();
        break;
      case CheckboxStates.UNCHECKED :
        this._renderUnChecked();
        break;
      case CheckboxStates.HALF_CHECKED :
        this._renderHalfChecked();
        break;
    }
    super._render(state);
  }
  /**
   * @override 
   */
  _launch() {}
  /**
   * @private 
   */
  _renderChecked() {
    this.checked = true;
    this.halfChecked = false;
  }
  /**
   * @private 
   */
  _renderUnChecked() {
    this.checked = false;
    this.halfChecked = false;
  }
  /**
   * @private 
   */
  _renderHalfChecked() {
    this.halfChecked = true;
  }
  /**
   * 这里是因为改变值, 很有可能是binding过来的值, 并没有调用setter state.
   * 所以需要监听一下, 然后调用一次
   * 
   * @param changeObj {Object}
   */
  $onChanges(changeObj) {
    if (!this._init) return;
    if (changeObj.hasOwnProperty('checked')) {
      if (this.checked) {
        this.state = CheckboxStates.CHECKED;
      } else {
        this.state = CheckboxStates.UNCHECKED;
      }
    }
    if (changeObj.hasOwnProperty('halfChecked')) {
      if (this.halfChecked) {
        this.state = CheckboxStates.HALF_CHECKED;
      } else {
        this.state = CheckboxStates.UNCHECKED;
      }
    }
  }
  /**
   * 这是用户点击改变的行为
   */
  changeHandler() {
    if (this.checked) {
      this.state = CheckboxStates.CHECKED;
    } else {
      this.state = CheckboxStates.UNCHECKED;
    }
  }
}