/**
 * @description modal 弹出层
 *
 * @author bcguan2008 <148135244@qq.com>
 * @date Tue Apr 04 2017 15:14:12 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/modal
 */
import template from './modal.html'
import ComponentZIndex from '../zindex.js'

var remove = function (array, element) {
  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

class ModalController {
  constructor($document, $q, $rootScope, $compile, $controller, $modalResolve) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;
    this.$controller = $controller;
    this.$modalResolve = $modalResolve;

    this.dialogArr = [];

    this.dialogCounter = 0;
    this.zIndex = ComponentZIndex.Alert;

    this.mask = angular.element('<div class="modal-backdrop fade in"></div>');
    this.mask.css("z-index", this.zIndex);
  }

  open(options) {
    let modalOpenedDeferred = this.$q.defer();
    let modalInstance = {
      opened: modalOpenedDeferred.promise
    }

    let modalOptions = angular.extend({}, options);
    let ctrlInstance, ctrlCaller, ctrlLocals = {};

    let resolvePromise = this.$q.all([this.$modalResolve.resolve(modalOptions.resolve, {}, null, null)]);

    resolvePromise.then((resolveVars) => {
      let modalScope = this.$rootScope.$new();


      if (modalOptions.controller) {
        ctrlLocals = modalScope;
        ctrlLocals.$scope = modalScope;
        angular.forEach(resolveVars[0], (value, key) => {
          ctrlLocals[key] = value;
        });

        ctrlCaller = this.$controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);

        ctrlInstance = ctrlCaller();

        if (angular.isFunction(ctrlInstance.$onInit)) {
          ctrlInstance.$onInit();
        }


        let dialog = this.$compile(angular.element(modalOptions.template))(ctrlLocals);
        this.$document.find('body').append(dialog);
        dialog.css('display', 'block');
        dialog.css('z-index', this.zIndex + this.dialogCounter);

        setTimeout(() => dialog.addClass('in'), 100);

        this.dialogArr.push(dialog);
      }


    })

  }

  alert(param) {
    let defer = this.$q.defer();

    let dialog;
    this.dialogCounter++;

    if (this.dialogCounter == 1) {
      this.$document.find('body').append(this.mask);
    }

    let modalScope = this.$rootScope.$new();
    let ctrlInstance, ctrlInstantiate, ctrlLocals = {};

    let modalOptions = angular.extend({}, param);

    if (modalOptions.controller) {
      ctrlLocals.$scope = modalScope
    }
    debugger;
    ctrlInstantiate = this.$controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);

    dialog = this.$compile(angular.element(template))(ctrlLocals);
    return {
      result: defer.promise
    }

    this.$document.find('body').append(dialog);
    dialog.css('display', 'block');
    dialog.css('z-index', this.zIndex + this.dialogCounter);

    setTimeout(() => dialog.addClass('in'), 100);

    this.dialogArr.push(dialog);
    return {
      result: defer.promise
    }
  }


  dismiss(dialog) {
    this.dialogCounter--;
    dialog.remove();

    if (this.dialogCounter == 0) {
      this.mask.remove();
    }

    remove(this.dialogArr, dialog);
  }

  dismissAll() {
    while (this.dialogArr.length > 0) {
      this.dismiss(this.dialogArr[0])
    }
  }
}

export default ModalController;
