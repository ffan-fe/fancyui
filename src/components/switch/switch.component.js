import template from './switch.html';
import controller from './switch.controller';
import './switch.less';

export default {
  restrict: 'E',
  bindings: {
	  'disabled': '=',
	  'onText': '=',
	  'offText': '=',
	  'defaultChecked': '=',
	  'onChange': '='
  },
  template,
  controller,
  controllerAs: 'vm'
};
