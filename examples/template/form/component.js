import template from './template.html';
import controller from './controller.js';

let addComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default addComponent;
