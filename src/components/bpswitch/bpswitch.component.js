/**
 * Bpswitch component define
 */

import controller from './bpswitch';
import template from './template.html';
import './switch.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
	  'disabled': '=',
	  'onText': '=',
	  'offText': '=',
	  'defaultChecked': '=',
	  'onChange': '='
  }
}

export default componentDefine;