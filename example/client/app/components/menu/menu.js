import {Menu} from 'fancyui';
import menuComponent from './menu.component';
export default angular.module('menuDemo', [
    Menu.name
  ]
)
  .component('menu', menuComponent);
