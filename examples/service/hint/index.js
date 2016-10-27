import uiRouter from 'angular-ui-router';
import hint from './component.js';

let hintModule = angular.module('hintTest', [
  uiRouter
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('hint', {
      url: '/hint',
      template: '<hint></hint>'
    });
  })
  .component('hint', hint);

export default hintModule;
