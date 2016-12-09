'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Icon component define
 */

'use strict';

/**
 * @type {Object}
 * @property {String} type  - binding symbol <, 类型, 也直接决定了渲染成哪个图标
 */
var IconComponentDefine = {
  template: _template2.default,
  controller: _icon2.default,
  controllerAs: 'controller',
  bindings: {
    type: '<'
  }
};

exports.default = IconComponentDefine;