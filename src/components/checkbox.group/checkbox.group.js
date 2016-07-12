/**
 * checkbox group component controller
 */

import angular from 'angular';
import classNames from 'classnames';
import Component from '../common/component';

'use strict';

/**
 * checkbox group
 * 
 * @export
 * @class CheckboxGroup
 * @extends {Component}
 * @example 
    <bp-checkbox-group model="vm.groupDataList"></bp-checkbox-group>
    groupDataList = [
      {label: '邢老师不要脸', checked: true},
      {label: '老师不要脸'},
      {label: '师不要脸'},
      {label: '不要脸'},
      {label: '要脸', disabled: true},
      {label: '脸'}
    ];
 * 
 */
export default class CheckboxGroup extends Component {
  /**
   * @override 
   * @protected 
   */
  _initDefaultValue() {
    this.model = this.model && angular.isArray(this.model) ? this.model : [];
  }
  /**
   * @override 
   * @protected 
   */
  _createClassName() {
    this.ulClassName = classNames({
      'list-inline': this.inline
    });
  }
  /**
   * @override 
   * @protected 
   */
  _launch() {
  }
}