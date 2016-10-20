import angular from 'angular';

import template from './template.html';
import controller from './controller';
import {Transfer} from 'fancyui';

'use strict';

export default angular.module('transferShow', [
    Transfer.name
  ])
  .component('transferShow', {
    template,
    controller,
    controllerAs: 'vm'
  });