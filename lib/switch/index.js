'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('./switch.component');

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('bpSwitch', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('bpSwitch', _switch2.default);