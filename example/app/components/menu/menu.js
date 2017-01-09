import Menu from '../../../../lib/menu/index.js';
import menuComponent from './menu.component.js';
export default angular.module('menuDemo', [
    Menu.name
  ]
)
  .component('menu', menuComponent);
