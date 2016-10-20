import hint from './component.js';
import bpHint from './hint'

let hintModule = angular.module('hintTest', [
  bpHint.name
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('ui.hint', {
      url: '/hint',
      template: '<hint></hint>'
    });
  })
  .component('hint', hint);

export default hintModule;
