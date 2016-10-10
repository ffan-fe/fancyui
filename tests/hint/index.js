import hint from './component.js';
import bpHint from '../../src/components/hint'

let hintModule = angular.module('hintTest', [
  bpHint.name
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('hint', {
      url: '/hint',
      template: '<hint></hint>'
    });
  })
  .component('hint', hint);

export default hintModule;
