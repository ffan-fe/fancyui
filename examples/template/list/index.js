import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './component.js';
import bpAjax from 'bp-ajax';

let listModule = angular.module('list', [
    uiRouter,
    bpAjax.name
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
