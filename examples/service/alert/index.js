import uiRouter from 'angular-ui-router';
import alert from './component.js';

let alertModule = angular.module('alertTest', [
  uiRouter
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('alert', {
      url: '/alert',
      template: '<alert></alert>'
    });
  })
  .component('alert', alert);

export default alertModule;
