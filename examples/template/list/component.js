import template from './template.html';
import controller from './controller.js';
import './style.less';

let listComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default listComponent;
