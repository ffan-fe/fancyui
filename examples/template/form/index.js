import uiRouter from 'angular-ui-router';
import addComponent from './component.js';

let addModule = angular.module('add', [
  uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('form', {
      url: '/form',
      template: '<add></add>'
    });
})

.component('add', addComponent);

export default addModule;
