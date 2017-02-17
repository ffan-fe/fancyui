import template from './inputnumber.html';
import controller from './inputnumber.controller';
import './inputnumber.less';

export default {
	restrict: 'E',
	bindings: {
		'value': '=',
		'max': '=',
		'min': '=',
		'step': '=',
		'disabled': '=',
		'onChange': '='
	},
	template,
	controller,
	controllerAs: 'vm'
};
