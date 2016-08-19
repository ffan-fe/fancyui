/**
 * Timepicker
 */

import Component from '../common/component';


'use strict';

/**
 * Timepicker component
 *
 * @export
 * @class Timepicker
 * @extends {Component}
 */
export default class Timepicker extends Component {
  /**
   * @override
   */
  _initDefaultValue() {
    this.htmlID = this.htmlID || 'checkbox_' + Math.random().toString(36).substr(2, 9);
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
