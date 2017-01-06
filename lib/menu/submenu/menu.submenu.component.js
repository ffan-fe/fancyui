import template from './menu.submenu.html';
import controller from './menu.submenu.controller.js';

export default {
  restrict: 'E',
  bindToController: {
    //disabled: '=',
    key: '@',
    title: '@'
    //onTitleClick: '&'
  },
  require: {
    fMenu: '^fMenu'
  },
  template,
  transclude: true,
  controller,
  controllerAs: 'vm',
  scope: true,
  replace: true
};
