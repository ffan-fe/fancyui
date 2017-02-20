import template from './progress.html';
import controller from './progress.controller';
import './progress.less';

export default {
  restrict: 'E',
  bindings: {
	  'percent': '=',
	  'status': '@',
	  'type': '@',
	  'strokeWidth': '=',
	  'width': '='
  },
  template,
  controller,
  controllerAs: 'vm'
};
