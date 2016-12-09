'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('./popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./popconfirm.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * Popconfirm component define
               */

var componentDefine = {
  template: _template2.default,
  controller: _popconfirm2.default,
  controllerAs: 'controller',
  bindings: {}
};

exports.default = componentDefine;