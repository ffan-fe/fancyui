import template from './template.html';
import controller from './controller.js';
import './style.less';

let checkboxtreeComponent = {
  restrict: 'E',
  bindings: {
    ngDisabled: '=',
    ngModel: '=',
    config: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default checkboxtreeComponent;
