import AlertService from './alert/alert.js'
import HintService from './hint/hint.js'
import Message from './message/message.js'
import LoadingService from './loading/loading';
import ModalService from './modal/'

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
    Message
  })
  .service({
    LoadingService
  })
  .service({
    ModalService
  });
