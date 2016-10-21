/** @module nav component entry */

import angular from 'angular';
import navComponent from './nav.component'

export default angular.module('nav', [])
  .component('fancyNav', navComponent);