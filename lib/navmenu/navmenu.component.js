import template from './navmenu.html';
import controller from './navmenu.controller';
import './navmenu.less';

let navmenuComponent = {
  restrict: 'E',
  bindings: {
    menuData: '<',
    config: '<',
    onSelect: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default navmenuComponent;
