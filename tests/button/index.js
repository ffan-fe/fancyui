/**
 * 
 */

import angular from 'angular';
import Button from '../../src/components/button';
import template from './template.html';
import controller from './controller';

export default angular.module('buttonTest', [Button.name])

  .component('buttonTest', {
    template,
    controller,
    controllerAs: 'vm'
  });