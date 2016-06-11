/**
 * Button component entry
 */

import angular from 'angular';
import component from './button.component'
import Icon from '../icon'

'use strict';

export default angular.module('Button', [Icon.name])
  .component('bpButton', component);