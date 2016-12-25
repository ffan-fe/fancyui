/**
 * Rangepicker
 */

'use strict';

/**
 * Rangepicker component
 *
 * @export
 * @class Rangepicker
 * @extends {Component}
 */
export default class Rangepicker {
  constructor() {
    let placeholderArr = this.rangepickerOptions.placeholder;
    delete this.rangepickerOptions.placeholder;

    if(!placeholderArr || !angular.isArray(placeholderArr)){
      placeholderArr = [];
    }

    this.rangepickerOptions.placeholder = placeholderArr[0];

    let endTimeOptions = angular.copy(this.rangepickerOptions);

    endTimeOptions.placeholder = placeholderArr[1];
    this.endTimeOptions = endTimeOptions;
  }
}
