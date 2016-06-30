import angular from 'angular';
import uiRouter from 'angular-ui-router';

import rangepicker from '../../src/components/rangepicker';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('rangepickerTest', [
  uiRouter,
  rangepicker.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('rangepicker', {
      url: '/rangepicker',
      template: '<rangepicker-test></rangepicker-test>'
    });
  })
  .component('rangepickerTest', {
    template,
    controller,
    controllerAs: 'vm'
  });
