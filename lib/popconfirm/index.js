'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _popconfirm = require('./popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Popconfirm component entry
 * @author name
 */

'use strict';

exports.default = _angular2.default.module('Popconfirm', []).service('Popconfirm', _popconfirm2.default);