'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _inputnumber = require('./inputnumber.html');

var _inputnumber2 = _interopRequireDefault(_inputnumber);

var _inputnumber3 = require('./inputnumber.controller');

var _inputnumber4 = _interopRequireDefault(_inputnumber3);

require('./inputnumber.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	restrict: 'E',
	bindings: {
		'value': '=',
		'max': '=',
		'min': '=',
		'step': '=',
		'disabled': '=',
		'onChange': '='
	},
	template: _inputnumber2.default,
	controller: _inputnumber4.default,
	controllerAs: 'vm'
};