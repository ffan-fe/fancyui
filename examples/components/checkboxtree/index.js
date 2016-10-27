import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkboxtreeComponent from './component.js';

let checkboxtreeModule = angular.module('checkboxtreeTest', [
  uiRouter
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('checkboxtree', {
      url: '/checkboxtree',
      template: '<checkboxtree></checkboxtree>'
    });
  })
  .component('checkboxtree', checkboxtreeComponent);

export default checkboxtreeModule;
