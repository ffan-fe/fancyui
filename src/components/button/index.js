/**
 * Button component entry
 */

import angular from 'angular';
import component from './button-component'

'use strict';

export default angular.module('Button', [])
  .component('bpButton', component);