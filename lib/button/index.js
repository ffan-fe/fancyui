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

'use strict';

export default angular.module('Button', [Icon.name])
  .component('bpButton', component);