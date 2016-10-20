import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {Radiobox, RadioboxGroup} from 'anaheim';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('radioShow', [
    Radiobox.name,
    RadioboxGroup.name
  ])
  .component('radioboxShow', {
    template,
    controller,
    controllerAs: 'vm'
  });