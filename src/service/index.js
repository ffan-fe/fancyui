import bpApi from './api.js'
import AlertService from './alert/alert.js'
import HintService from './hint/hint.js'
export default angular.module('bp.services', [])
  .config(function ($httpProvider) {
    'ngInject'
    $httpProvider.defaults.withCredentials = true;
  })
  .service({
    bpApi
  })
  .service({
    AlertService
  })
  .service({
    HintService
  });
