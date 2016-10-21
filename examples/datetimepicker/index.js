import angular from 'angular';
import 'bootstrap';
import template from './template.html';
import controller from './controller';
import Datetimepicker from '../../src/components/datetimepicker';

'use strict';

export default angular.module('datetimepickerShow', [
    Datetimepicker.name
  ])
  .component('datetimepickerShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
