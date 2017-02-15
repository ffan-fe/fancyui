import template from './select.html';
import controller from './select.controller';
import './select.less';

let selectComponent = {
  restrict: 'E',
  bindings: {
    isRemote: "<",
    isGroup : "<",
    isDisabled:'<',
    data:'<',
    ngModel:'=',
    onItemSelected:'&',
    remoteMethod:'&',
    remoteDebounce:'<',
    isMultiple:'<',
    clearable:'<',
    allowCreate:'<',
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default selectComponent;
