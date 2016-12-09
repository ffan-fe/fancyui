'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _radioboxGroup = require('./radiobox.group.component');

var _radioboxGroup2 = _interopRequireDefault(_radioboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Radio component entry
 * @author name
 */

'use strict';

exports.default = _angular2.default.module('RadioboxGroup', []).component('bpRadioboxGroup', _radioboxGroup2.default);