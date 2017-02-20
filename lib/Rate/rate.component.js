import template from './rate.html';
import controller from './rate.controller';
import './rate.less';

export default {
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
	template,
	controller,
	controllerAs: 'vm'
};
