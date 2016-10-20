import angular from 'angular';

import template from './template.html';
import controller from './controller';
import {Checkbox, CheckboxGroup} from 'fancyui';

'use strict';

export default angular.module('checkboxTest', [
  Checkbox.name,
  CheckboxGroup.name
])
  .component('checkboxShow', {
    template,
    controller,
    controllerAs: 'vm'
  });