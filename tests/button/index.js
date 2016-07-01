import angular from 'angular';
import uiRouter from 'angular-ui-router';

// import Button from '../../src/components/button';
import template from './template.html';
import controller from './controller';

import {bpButton} from '../../dist/anaheim';


// console.log('222', bpButton.name);



export default angular.module('buttonTest', [
  uiRouter,
  bpButton.name
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