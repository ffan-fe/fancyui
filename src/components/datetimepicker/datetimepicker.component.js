/**
 * Datetimepicker component define
 */

import controller from './datetimepicker';
import template from './template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    type: '',   //单个 还是范围时间




  }
};

export default componentDefine;
