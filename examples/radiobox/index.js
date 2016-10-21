import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Radiobox from '../../src/components/radiobox/index.js';
import RadioboxGroup from '../../src/components/radiobox.group/index.js';
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
