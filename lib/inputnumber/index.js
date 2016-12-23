'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputnumber = require('./inputnumber.component');

var _inputnumber2 = _interopRequireDefault(_inputnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('inputNumber', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('inputNumber', _inputnumber2.default);