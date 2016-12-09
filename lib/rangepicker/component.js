'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * Rangepicker component define
               */

var componentDefine = {
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm',
  bindings: {
    ngStartModel: '=',
    ngEndModel: '=',
    rangepickerOptions: '='
  }
};

exports.default = componentDefine;