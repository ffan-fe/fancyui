/**
 * @ngdoc overview
 * @name button
 * @description
 *
 * # Button component module
 *
 * module name is **Button**
 */

import component from './button.component'
import Icon from '../Icon'
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('Button', [
    Icon.name
  ])
  .component('fButton', component)
  .component('bpButton',
    deprecated(component, 'bp-button', 'f-button'));

export default app;
