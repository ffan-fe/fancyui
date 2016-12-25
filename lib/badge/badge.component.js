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
  template,
  controller,
  controllerAs: 'vm'
};
