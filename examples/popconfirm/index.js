import angular from 'angular';
import template from './template.html';
import controller from './controller';
import Button from '../../src/components/button/index.js';
import Popconfirm1 from '../../src/components/popconfirm/index.js';
import CitySelector from '../../src/components/city.selector/index.js';


export default angular.module('popConfirmShow', [
  Button.name,
  Popconfirm1.name
])
  .component('popConfirmShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
