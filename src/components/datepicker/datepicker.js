/**
 * Datepicker
 */
import $ from 'jquery'
import Component from '../common/component';


'use strict';

/**
 * Datepicker component
 *
 * @export
 * @class Datepicker
 * @extends {Component}
 */
export default class Datepicker extends Component {
  constructor($element, $scope) {
    'ngInject'
    super();
    let ID = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    this.id = ID();
    const DEFAULTS = {
      showWeeks: false,
      formatDayTitle: 'yyyy MMMM',
      initDate: new Date()
    };
    let dateOptions = Object.assign({}, DEFAULTS, this.datepickerOptions);
    let timeOptions = {};
    timeOptions.max = dateOptions.maxDate;
    timeOptions.min = dateOptions.minDate;
    timeOptions.minuteStep = dateOptions.minuteStep ? dateOptions.minuteStep : 1;
    delete dateOptions.minuteStep;
    timeOptions.secondStep = dateOptions.secondStep ? dateOptions.secondStep : 1;
    timeOptions.showSeconds = dateOptions.hasOwnProperty('showSeconds') ? dateOptions.showSeconds : true;
    this.viewFormat = dateOptions.viewFormat;
    delete dateOptions.viewFormat;
    this.modelFormat = dateOptions.modelFormat;
    delete dateOptions.modelFormat;

    this.dateOptions = dateOptions;
    this.timeOptions = timeOptions;

    $('body').click(e => {
      if ($(e.target).has('.dropdown-toggle').length) {
        $(e.target).has($element).length ? (this.isOpen = false) : (this.isOpen = true);
        $scope.$digest();
      }
    });
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
