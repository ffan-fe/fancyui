'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Datepicker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

/**
 * Datepicker component
 *
 * @export
 * @class Datepicker
 * @extends {Component}
 */

var Datepicker = function () {
  function Datepicker($element, $scope, $rootScope) {
    'ngInject';

    var _this = this;

    _classCallCheck(this, Datepicker);

    this.$rootScope = $rootScope;

    var ID = function ID() {
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

    var DEFAULTS = {
      showWeeks: false,
      formatDayTitle: 'yyyy MMMM',
      initDate: new Date()
    };
    var dateOptions = Object.assign({}, DEFAULTS, this.datepickerOptions);
    var timeOptions = {};
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

    (0, _jquery2.default)('body').click(function (e) {
      if ((0, _jquery2.default)(e.target).has('.dropdown-toggle').length) {
        (0, _jquery2.default)(e.target).has($element).length ? _this.isOpen = false : _this.isOpen = true;
        $scope.$digest();
      }
    });
  }

  _createClass(Datepicker, [{
    key: 'togglePop',
    value: function togglePop() {
      if (!this.pop) {
        this.$rootScope.calendars.forEach(function (v) {
          v.scope.vm.pop = false;
        });
      }
      this.pop = !this.pop;
    }
  }]);

  return Datepicker;
}();

exports.default = Datepicker;