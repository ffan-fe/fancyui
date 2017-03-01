import Menu from '../../../../lib/Nav/index.js';
import menuComponent from './menu.component.js';
import Service from '../../../../lib/Service/index.js';

export default angular.module('menuDemo', [
    Menu.name,
    Service.name
  ]
)
  .component('menu', menuComponent);
