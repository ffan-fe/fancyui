import uiRouter from 'angular-ui-router';
import addComponent from './component.js';
import bpAjax from 'bp-ajax';
let addModule = angular.module('add', [
    uiRouter,
    bpAjax.name
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
