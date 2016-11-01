import template from './template.html';
import controller from './controller';
import Datetimepicker from '../../src/components/datetimepicker/index.js';

'use strict';

export default angular.module('datetimepickerShow', [
    Datetimepicker.name
  ])
  .component('datetimepickerShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
