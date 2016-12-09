'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('bp-datetimepicker');

require('bp-datetimepicker/src/css/datetimepicker.css');

require('bp-datetimepicker/src/js/datetimepicker.templates');

var _datetimepicker = require('./datetimepicker.component');

var _datetimepicker2 = _interopRequireDefault(_datetimepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn'); /**
                                   * Datetimepicker component entry
                                   * @author name
                                   */

_moment2.default.defineLocale('bp-datetimepicker-zh-cn', {
  parentLocale: 'zh-cn',
  meridiem: function meridiem() {
    return '';
  },
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'MM/DD/YYYY',
    LL: 'MMMM Do YYYY',
    LLL: 'MMMM Do YYYY LT',
    LLLL: 'dddd, MMMM Do YYYY LT'
  }
});

'use strict';

exports.default = angular.module('Datetimepicker', ['ui.bootstrap.datetimepicker']).component('bpDatetimepicker', _datetimepicker2.default);