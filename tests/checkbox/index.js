import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Checkbox from '../../src/components/checkbox';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('checkboxTest', [
  uiRouter,
  Checkbox.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('checkbox', {
      url: '/checkbox',
      template: '<checkbox-test></checkbox-test>'
    });
  })
  .component('checkboxTest', {
    template,
    controller,
    controllerAs: 'vm'
  });