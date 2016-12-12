
import template from './template.html';
import controller from './controller';
import Checkbox from '../../src/components/checkbox/index.js';
import CheckboxGroup from '../../src/components/checkboxGroup/index.js';

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
