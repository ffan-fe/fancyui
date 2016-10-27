/**
 * Datepicker component define
 */

import template from './template.html';
import controller from './controller.js';
import './style.less';

import { UIHelper } from "../../tool/uihelper.js";

export default class datepickerDirective {
  constructor($rootScope) {
    this.template = template;
    this.restrict = "E";

    this.controller = controller;
    this.controllerAs = "vm";
    this.bindToController = true;

    this.scope = {
      model: '=',
      datepickerOptions: '='
    };

    this.link = (scope, element, attrs) => {

      /*let closeEvent = UIHelper.listen(window, 'click', (e) => {
        if (!element[0].contains(e.target) && scope.vm.pop) {
          scope.vm.pop = false;
        }
      });

      scope.$on('$destroy', () => closeEvent.remove());*/
    }
  }
}
