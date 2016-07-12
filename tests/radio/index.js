import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Radio from '../../src/components/radiobox';
import RadioGroup from '../../src/components/radiobox.group';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('radioTest', [
    uiRouter,
    Radio.name,
    RadioGroup.name
  ])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('radio', {
      url: '/radio',
      template: '<radio-test></radio-test>'
    });
  })
  .component('radioTest', {
    template,
    controller,
    controllerAs: 'vm'
  });