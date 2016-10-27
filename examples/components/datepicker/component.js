import template from './template.html';
import controller from './controller.js';

let alert = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default alert;
