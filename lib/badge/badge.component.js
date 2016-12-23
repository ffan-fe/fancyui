'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('./badge.html');

var _badge2 = _interopRequireDefault(_badge);

var _badge3 = require('./badge.controller');

var _badge4 = _interopRequireDefault(_badge3);

require('./badge.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  restrict: 'E',
  bindings: {
    'count': '=',
    'max': '=',
    'dot': '='
  },
  template: _badge2.default,
  controller: _badge4.default,
  controllerAs: 'vm'
};