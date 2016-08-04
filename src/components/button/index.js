/**
 * @ngdoc overview
 * @name button
 * @description
 * 
 * # Button component module
 * 
 * module name is **Button**
 * 
 * <pre>
 * import {Button} from 'anaheim';
 * angular.module('myApp', [Button.name]);
 * </pre>
 */

import angular from 'angular';
import component from './button.component'
import Icon from '../icon'

'use strict';

export default angular.module('Button', [Icon.name])
  .component('bpButton', component);