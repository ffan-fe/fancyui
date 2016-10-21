import angular from 'angular';
import template from './template.html';
import controller from './controller';
import Button from '../../src/components/button/index.js';
import CitySelector from '../../src/components/city.selector/index.js';

export default angular.module('citySelectorShow', [
  Button.name,
  CitySelector.name
])
  .component('citySelectorShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
