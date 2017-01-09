import template from './loadingbar.html';
import controller from './loadingbar.controller.js';
import './loadingbar.less';
let loadingbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loadingbarComponent;
