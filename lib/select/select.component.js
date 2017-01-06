import template from './select.html';
import controller from './select.controller';
import './select.less';

let selectComponent = {
  restrict: 'E',
  bindings: {
    isRemote: "<",
    isGroup : "<",
    data:'<',
    ngModel:'=',
    onItemSelected:'&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default selectComponent;
