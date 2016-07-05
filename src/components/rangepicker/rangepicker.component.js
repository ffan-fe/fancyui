/**
 * Rangepicker component define
 */

import controller from './rangepicker';
import template from './template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    ngStartModel: '=',
    ngEndModel: '=',
    rangepickerOptions: '<',
    disabled: '<'
  }
};

export default componentDefine;
