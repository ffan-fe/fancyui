/**
 * 
 */

import angular from 'angular';
import Button from '../../src/components/button';
import template from './template.html';
import controller from './controller';
import uiRouter from 'angular-ui-router';



export default angular.module('buttonTest', [
  uiRouter,
  Button.name
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('button', {
      url: '/button',
      template: '<button-test></button-test>'
    });
  })
  .component('buttonTest', {
    template,
    controller,
    controllerAs: 'vm'
  });