import tpl from './hint.html'

import './hint.css'

export default class HintService {
  constructor($document, $q, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.container = angular.element("<div class='bp-hint-container'>");
    this.$document.find("body").append(this.container);
  }

  hint(param) {
    let data = Object.assign(this.$rootScope.$new(), param);

    let hint = this.$compile(tpl)(data);

    hint.css('display', 'block');

    this.container.prepend(hint);

    setTimeout(() => hint.addClass('in'), 10);

    setTimeout(() => {
      hint.removeClass('in');

      setTimeout(() => hint.remove(), 500);
    }, 5000);
  }
}
