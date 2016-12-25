/**
 * Rangepicker component define
 */

import controller from './controller';
import template from './template.html';
import './style.less'

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    ngStartModel: '=',
    ngEndModel: '=',
    rangepickerOptions: '='
  }
};

export default componentDefine;
