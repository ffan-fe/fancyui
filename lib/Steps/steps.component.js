import template from './steps.html';
import controller from './steps.controller';
import './steps.less';

export default {
  restrict: 'E',
  bindings: {
    current: '<',
    stepsData: '<',
    onClick: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};
