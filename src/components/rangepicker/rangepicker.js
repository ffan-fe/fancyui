/**
 * Rangepicker
 */

import Component from '../common/component';


'use strict';

/**
 * Rangepicker component
 *
 * @export
 * @class Rangepicker
 * @extends {Component}
 */
export default class Rangepicker extends Component {
  constructor() {
    super();
    let endTimeOptions = angular.copy(this.rangepickerOptions);
    this.endTimeOptions = endTimeOptions;
  }

  /**
   * @override
   */
  _initDefaultValue() {

  }

  /**
   * @override
   */
  _createClassName() {
  }

  /**
   * @override
   */
  _launch() {
  }
}
