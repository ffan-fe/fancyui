'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _ffanCustomTable = require('./ffanCustomTable.component');

var _ffanCustomTable2 = _interopRequireDefault(_ffanCustomTable);

var _ngTable = require('ng-table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('ffanCustomTable', [_ngTable.ngTableModule.name])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('ffanCustomTable', _ffanCustomTable2.default);