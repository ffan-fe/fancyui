import template from './template.html';
import controller from './controller.js';
import './style.less';

let multiselectComponent = {
  restrict: 'E',
  bindings: {
    checkedItems: '=ngModel',
    config: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default multiselectComponent;
