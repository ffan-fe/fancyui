import template from './template.html';
import controller from './controller.js';
import './style.less';

let checkboxtreeComponent = {
  restrict: 'E',
  bindings: {
    listPromise: '=',
    ngDisabled: '=',
    ngModel: '=',
    config: '<',
    defaultCollapsed:'<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default checkboxtreeComponent;
