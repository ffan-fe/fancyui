'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = require('./progress.html');

var _progress2 = _interopRequireDefault(_progress);

var _progress3 = require('./progress.controller');

var _progress4 = _interopRequireDefault(_progress3);

require('./progress.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  restrict: 'E',
  bindings: {
    'percent': '=',
    'status': '@',
    'type': '@',
    'strokeWidth': '=',
    'width': '='
  },
  template: _progress2.default,
  controller: _progress4.default,
  controllerAs: 'vm'
};