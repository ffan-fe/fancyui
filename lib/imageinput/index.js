'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ngFileUpload = require('ng-file-upload');

var _ngFileUpload2 = _interopRequireDefault(_ngFileUpload);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Datepicker component entry
 * @author name
 */
'use strict';

exports.default = angular.module('bp.component.Datepicker', [_ngFileUpload2.default]).component('bpDatepicker', _component2.default);