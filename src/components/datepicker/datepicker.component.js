/**
 * Datepicker component define
 */

import template from './template.html';
import controller from './datepicker.js';
import './datepicker.less';

let datepickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel: '=',
    datepickerOptions: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default datepickerComponent;
