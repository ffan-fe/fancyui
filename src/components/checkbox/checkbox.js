/**
 * Checkbox
 */

import Component from '../common/component';


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
  _initDefaultValue() {
    this.label = this.label || '';
    this.htmlID = this.htmlID || 'checkbox' + Math.floor(Math.random() * 1000000);
  }
  /**
   * @override 
   */
  _createClassName() {}
  /**
   * @override 
   */
  _launch() {}
}