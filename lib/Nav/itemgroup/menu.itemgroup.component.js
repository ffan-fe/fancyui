import template from './menu.itemgroup.html';
import controller from './menu.itemgroup.controller.js';

export default {
  restrict: 'E',
  bindToController: {
    titleName: '@'
  },
  template,
  controller,
  transclude: true,
  controllerAs: 'vm',
  scope: true,
  replace: true
};
