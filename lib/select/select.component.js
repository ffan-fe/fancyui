import template from './select.html';
import controller from './select.controller';
import './select.less';

let selectComponent = {
  restrict: 'E',
  bindings: {
    isGroup : "=",
    data:'=',
    ngModel:'=',
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default selectComponent;
