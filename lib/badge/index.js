'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('./badge.component');

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('badge', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('badge', _badge2.default);