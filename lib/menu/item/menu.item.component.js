import template from './menu.item.html';
import controller from './menu.item.controller.js';

export default {
  restrict: 'E',
  bindToController: {
    disabled: '=',
    key: '@'
  },
  scope: true,
  require: {
    fMenu: '^fMenu'
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm',
  replace: true
};
