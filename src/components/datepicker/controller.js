/**
 * Datepicker
 */
import $ from 'jquery'

'use strict';

/**
 * Datepicker component
 *
 * @export
 * @class Datepicker
 * @extends {Component}
 */
export default class Datepicker {
  constructor($element, $scope, $rootScope) {
    'ngInject'
    this.$rootScope = $rootScope;

    let ID = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    this.id = ID();

    if (!$rootScope.calendars || !angular.isArray($rootScope.calendars)) {
      $rootScope.calendars = [];

    }
    $rootScope.calendars.push({
      scope: $scope,
      id: this.id
    });

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

    this.placeholder = dateOptions.placeholder;
    delete dateOptions.placeholder;

    this.dateOptions = dateOptions;
    this.timeOptions = timeOptions;

    $('body').click(e => {
      if ($(e.target).has('.dropdown-toggle').length) {
        $(e.target).has($element).length ? (this.isOpen = false) : (this.isOpen = true);
        $scope.$digest();
      }
    });
  }

  togglePop() {
    if (!this.pop) {
      this.$rootScope.calendars.forEach(v => {
        v.scope.vm.pop = false
      });
    }
    this.pop = !this.pop;
  }
}
