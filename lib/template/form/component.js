import template from './formtpl.html';
import controller from './controller.js';
import './style.less';

let formComponent = {
  restrict: 'E',
  bindings: {
    formConfig: '=',
    model: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default formComponent;
