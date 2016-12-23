'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _bpswitch = require('./bpswitch.component');

var _bpswitch2 = _interopRequireDefault(_bpswitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Bpswitch component entry
 * @author name
 */

'use strict';

exports.default = _angular2.default.module('Bpswitch', []).component('bpSwitch', _bpswitch2.default);