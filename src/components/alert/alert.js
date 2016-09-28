import template from './alert.html'

import ComponentZIndex from '../zindex.js'

let remove = (array, element) => {
  let index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export default class AlertService {
  constructor($document, $q, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.dialogArr = [];

    this.dialogCounter = 0;
    this.zIndex = ComponentZIndex.Alert;

    this.mask = angular.element('<div class="modal-backdrop fade in"></div>');
    this.mask.css("z-index", this.zIndex);
  }

  alert(param) {
    let defer = this.$q.defer();

    let dialog;
    this.dialogCounter++;

    if(this.dialogCounter == 1){
      this.$document.find('body').append(this.mask);
    }

    let data = Object.assign(this.$rootScope.$new(), param);

    data.ok = () => {
      this.dismiss(dialog);
      defer.resolve('ok');
    };

    dialog = this.$compile(angular.element(template))(data);

    this.$document.find('body').append(dialog);
    dialog.css('display', 'block');
    dialog.css('z-index', this.zIndex + this.dialogCounter);

    this.dialogArr.push(dialog);

    return defer.promise;
  }

  confirm(param) {
    let defer = this.$q.defer();

    let dialog;
    this.dialogCounter++;

    if(this.dialogCounter == 1){
      this.$document.find('body').append(this.mask);
    }

    let data = Object.assign(this.$rootScope.$new(), param);

    data.ok = () => {
      this.dismiss(dialog);
      defer.resolve('ok');
    };

    data.cancel = () => {
      this.dismiss(dialog);
      defer.reject('cancel');
    };

    dialog = this.$compile(angular.element(template))(data);

    this.$document.find('body').append(dialog);
    dialog.css('display', 'block');
    dialog.css('z-index', this.zIndex + this.dialogCounter);

    this.dialogArr.push(dialog);

    return defer.promise;
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
