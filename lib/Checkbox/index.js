/**
 * @ngdoc overview
 * @name checkbox
 * @description
 * 
 * # Checkbox component module
 * 
 * module name is **Checkbox**
 * 
 * 这里包含
 *  - bpCheckbox
 *  - bpCheckboxGroup
 * 
 * <pre>
 * import {Checkbox} from 'anaheim';
 * angular.module('myApp', [Checkbox.name]);
 * </pre>
 * 
 * <pre>
 * import {CheckboxGroup} from 'anaheim';
 * angular.module('myApp', [CheckboxGroup.name]);
 * </pre>
 * 
 * <pre>
 * import {Checkbox, CheckboxGroup} from 'anaheim';
 * </pre>
 */

import angular from 'angular';
import component from './checkbox.component';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('Checkbox', [
  ])
  .component('fCheckbox', component)
  .component('bpCheckbox',
    deprecated(component, 'bp-checkbox', 'f-checkbox'));

export default app;
