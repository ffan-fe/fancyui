'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _rate = require('./rate.html');

var _rate2 = _interopRequireDefault(_rate);

var _rate3 = require('./rate.controller');

var _rate4 = _interopRequireDefault(_rate3);

require('./rate.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	restrict: 'E',
	bindings: {
		'count': '=',
		'value': '=',
		'colors': '=',
		'lowThreshold': '=',
		'highThreshold': '=',
		'textArray': '=',
		'onChange': '='
	},
	template: _rate2.default,
	controller: _rate4.default,
	controllerAs: 'vm'
};