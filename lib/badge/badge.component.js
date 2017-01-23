import template from './badge.html';
import controller from './badge.controller';
import './badge.less';

export default {
  restrict: 'E',
  bindings: {
	  'count': '=',
	  'max': '=',
	  'dot': '='
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};
