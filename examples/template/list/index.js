import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './component.js';

let listModule = angular.module('list', [
  uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('list', {
      url: '/list',
      template: '<list></list>'
    });
})

.component('list', listComponent);

export default listModule;
