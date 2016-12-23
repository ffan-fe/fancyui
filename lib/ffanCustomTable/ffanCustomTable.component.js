'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ffanCustomTable = require('./ffanCustomTable.html');

var _ffanCustomTable2 = _interopRequireDefault(_ffanCustomTable);

var _ffanCustomTable3 = require('./ffanCustomTable.controller');

var _ffanCustomTable4 = _interopRequireDefault(_ffanCustomTable3);

require('./ffanCustomTable.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	restrict: 'E',
	bindings: {
		'isCustomTable': '=',
		'customColumn': '=',
		'tableData': '=',
		'operations': '=',
		'pageChange': '='
	},
	template: _ffanCustomTable2.default,
	controller: _ffanCustomTable4.default,
	controllerAs: 'vm'
};