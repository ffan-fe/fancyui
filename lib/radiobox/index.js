'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _radiobox = require('./radiobox.component');

var _radiobox2 = _interopRequireDefault(_radiobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Radio component entry
 * @author name
 */

'use strict';

exports.default = _angular2.default.module('Radiobox', []).component('bpRadiobox', _radiobox2.default);