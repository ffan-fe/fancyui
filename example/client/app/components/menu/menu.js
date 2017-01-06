import fMenu from 'fancyui/lib/menu/menu.js';
import menuComponent from './menu.component';
export default angular.module('menuDemo', [
    fMenu.name
  ]
)
  .component('menu', menuComponent);
