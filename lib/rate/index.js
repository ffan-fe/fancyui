'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _rate = require('./rate.component');

var _rate2 = _interopRequireDefault(_rate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('rate', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('rate', _rate2.default);