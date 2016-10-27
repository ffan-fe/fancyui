import uiRouter from 'angular-ui-router';
import datepicker from './component.js';

let datepickerModule = angular.module('datepickerTest', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider.state('datepicker', {
      url: '/',
      template: '<datepicker></datepicker>'
    });
    $urlRouterProvider.otherwise('/multiselect');
  })
  .component('datepicker', datepicker);

export default datepickerModule;
