import Menu from '../../../../lib/menu/index.js';
import menuComponent from './menu.component.js';
import Service from '../../../../lib/service/index.js';

export default angular.module('menuDemo', [
    Menu.name,
    Service.name
  ]
)
  .component('menu', menuComponent);
