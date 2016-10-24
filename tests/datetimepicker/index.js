import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap';
import datetimepicker from '../../src/components/datetimepicker';
//import {Datetimepicker} from '../../dist/anaheim';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('datetimepickerTest', [
    uiRouter,
    Datetimepicker.name
  ])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('datetimepicker', {
      url: '/datetimepicker',
      template: '<datetimepicker-test></datetimepicker-test>'
    });
  })
  .component('datetimepickerTest', {
    template,
    controller,
    controllerAs: 'vm'
  });
