import angular from 'angular';
import 'jquery';
import 'bootstrap';
import uiRouter from 'angular-ui-router';
import Timepicker from '../../src/components/timepicker';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('timepickerTest', [
    uiRouter,
    Timepicker.name
  ])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('timepicker', {
      url: '/timepicker',
      template: '<timepicker-test></timepicker-test>'
    });
  })
  .component('timepickerTest', {
    template,
    controller,
    controllerAs: 'vm'
  });
