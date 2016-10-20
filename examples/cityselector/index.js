import angular from 'angular';
import template from './template.html';
import controller from './controller';
import {Button, CitySelector} from 'fancyui';

export default angular.module('citySelectorShow', [
  Button.name,
  CitySelector.name
])
  .component('citySelectorShow', {
    template,
    controller,
    controllerAs: 'vm'
  });