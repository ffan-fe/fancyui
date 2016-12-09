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

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rangepicker = function Rangepicker() {
  _classCallCheck(this, Rangepicker);

  var placeholderArr = this.rangepickerOptions.placeholder;
  delete this.rangepickerOptions.placeholder;

  if (!placeholderArr || !angular.isArray(placeholderArr)) {
    placeholderArr = [];
  }

  this.rangepickerOptions.placeholder = placeholderArr[0];

  var endTimeOptions = angular.copy(this.rangepickerOptions);

  endTimeOptions.placeholder = placeholderArr[1];
  this.endTimeOptions = endTimeOptions;
};

exports.default = Rangepicker;