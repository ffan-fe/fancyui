import template from './app.html';
import controller from './app.controller.js';

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

export default appComponent;
