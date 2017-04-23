import AlertService from './alert/alert.js'
import HintService from './hint/hint.js'
import Message from './message/message.js'
import LoadingService from './loading/loading';
import ModalService from './modal/'
import ModalWindowTemplate from './template/modal-window.html';

export default angular.module('bp.services', [])
  .config(function ($httpProvider) {
    'ngInject'
    $httpProvider.defaults.withCredentials = true;
  })
  .provider('$modalResolve', function () {
    this.$get = ['$injector', '$q', function ($injector, $q) {
      return {
        resolve: function (invocables, locals, parent, self) {
          var promises = [];
          angular.forEach(invocables, function (value) {

            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function (resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function (value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })
  .directive('modalTransclude', function() {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          element.append(clone);
        });
      }
    };
  })
  .directive('',function(){

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
