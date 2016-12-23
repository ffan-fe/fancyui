'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('./switch.html');

var _switch2 = _interopRequireDefault(_switch);

var _switch3 = require('./switch.controller');

var _switch4 = _interopRequireDefault(_switch3);

require('./switch.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  restrict: 'E',
  bindings: {
    'disabled': '=',
    'onText': '=',
    'offText': '=',
    'defaultChecked': '=',
    'onChange': '='
  },
  template: _switch2.default,
  controller: _switch4.default,
  controllerAs: 'vm'
};