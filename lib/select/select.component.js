import template from './select.html';
import controller from './select.controller';
import './select.less';

let selectComponent = {
  restrict: 'E',
  bindings: {
    isRemote: "=",
    isGroup : "<",
    data:'<',
    ngModel:'=',
    onItemSelected:'&',
    remoteMethod:'&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default selectComponent;
