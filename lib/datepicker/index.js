'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Datepicker component entry
 * @author name
 */
'use strict';

exports.default = angular.module('bp.component.Datepicker', []).directive('bpDatepicker', function ($rootScope) {
  'ngInject';

  return new _component2.default($rootScope);
}).run(function ($rootScope) {});