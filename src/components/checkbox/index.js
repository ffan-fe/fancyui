/**
 * Checkbox component entry
 * @author name
 */

import angular from 'angular';
import component from './checkbox.component';
import groupComponent from './checkbox.group.component';

'use strict';

export default angular.module('Checkbox', [])
  .component('bpCheckbox', component)
  .component('bpCheckboxGroup', groupComponent);