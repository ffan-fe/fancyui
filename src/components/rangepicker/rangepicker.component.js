/**
 * Rangepicker component define
 */

import controller from './rangepicker';
import template from './template.html';
import './rangepicker.less'

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
