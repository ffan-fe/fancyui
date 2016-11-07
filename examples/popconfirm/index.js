import angular from 'angular';
import template from './template.html';
import controller from './controller';
import Button from '../../src/components/button/index.js';
import Popconfirm from '../../src/components/popconfirm/index.js';

export default angular.module('popConfirmShow', [
  Button.name,
  Popconfirm.name
])
  .component('popConfirmShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
