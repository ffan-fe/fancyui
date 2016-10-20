import AlertServiceModule from './alert/index.js'
import alertComponent from './component.js';

let alertModule = angular.module('alertTest', [
  AlertServiceModule.name
])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('ui.alert', {
      url: '/alert',
      template: '<alert></alert>'
    });
  })
  .component('alert', alertComponent);

export default alertModule;
