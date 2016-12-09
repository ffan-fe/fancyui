'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _checkboxGroup = require('./checkbox.group.component');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checkbox group component entry
 * @author name
 */

'use strict';

exports.default = _angular2.default.module('CheckboxGroup', []).component('bpCheckboxGroup', _checkboxGroup2.default);