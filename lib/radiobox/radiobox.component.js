'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radiobox = require('./radiobox');

var _radiobox2 = _interopRequireDefault(_radiobox);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./radiobox.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * @type {Object}
               * @property {Boolean}   disabled       - binding symbol is `<`, 禁用状态
               * @property {String}    value          - binding symbol is `@`, 选中后的值
               * @property {ANY}       model          - binding symbol is `=?`,绑定在`radioBox`上的`model`
               * @property {complex}   complex        - binding symbol is `=?complex`, 因为`value`只能提供`String`, 复杂结构数据类型使用, `complex`指令
               */

var componentDefine = {
  template: _template2.default,
  controller: _radiobox2.default,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是否被禁用
     *
     * @type {Boolean}
     */
    disabled: '<',

    /**
     * 选中后的值
     *
     * @type {String}
     */
    value: '@',

    /**
     * model
     * @type {String}
     */
    model: '=?model',

    /**
     *因为value只能提供String  复杂结构数据类型使用 complex指令
     * @type {anyObject}
     */
    complex: '=?complex'
  }
};

exports.default = componentDefine;