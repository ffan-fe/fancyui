'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = require('./progress.component');

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('progress', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('bpProgress', _progress2.default);