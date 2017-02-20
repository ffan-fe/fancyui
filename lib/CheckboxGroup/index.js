/**
 * Checkbox group component entry
 * @author name
 */

import angular from 'angular';
import groupComponent from './checkbox.group.component';
import deprecated from '../tool/deprecated';


'use strict';

export default angular.module('CheckboxGroup', [])
  .component('fCheckboxGroup', groupComponent);

let app = angular.module('CheckboxGroup', [
  ])
  .component('fCheckboxGroup', groupComponent)
  .component('bpCheckboxGroup',
    deprecated(groupComponent, 'bp-checkbox-group', 'f-checkbox-group'));

export default app;
