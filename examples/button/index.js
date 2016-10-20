import angular from 'angular';
// import Button from '../../src/components/button';
import template from './template.html';
import controller from './controller';
import {Button} from 'fancyui';



export default angular.module('buttonShow', [
  Button.name
])
  .component('buttonShow', {
    template,
    controller,
    controllerAs: 'vm'
  });