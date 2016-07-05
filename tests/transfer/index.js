import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Transfer from '../../src/components/transfer';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('transferTest', [
    uiRouter,
    Transfer.name
  ])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('transfer', {
      url: '/transfer',
      template: '<transfer-test></transfer-test>'
    });
  })
  .component('transferTest', {
    template,
    controller,
    controllerAs: 'vm'
  });