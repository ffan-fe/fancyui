import AlertService from './alert/alert.js'
import HintService from './hint/hint.js'
import LoadingService from './loading/loading';

export default angular.module('bp.services', [])
  .config(function ($httpProvider) {
    'ngInject'
    $httpProvider.defaults.withCredentials = true;
  })
  .service({
    AlertService
  })
  .service({
    HintService
  })
  .service({
    LoadingService
  });
