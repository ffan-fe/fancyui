'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bpswitch = require('./bpswitch');

var _bpswitch2 = _interopRequireDefault(_bpswitch);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./switch.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * Bpswitch component define
               */

var componentDefine = {
  template: _template2.default,
  controller: _bpswitch2.default,
  controllerAs: 'vm',
  bindings: {
    'disabled': '=',
    'onText': '=',
    'offText': '=',
    'defaultChecked': '=',
    'onChange': '='
  }
};

exports.default = componentDefine;