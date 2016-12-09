'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('./checkbox.group');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Object}
 * @property {Boolean}          disabled        - binding symbol is <, 禁用状态, 在组上禁用则全部禁用, 实际上是对ng-disabled的包装
 * @property {Array.<Object>}   model           - binding symbol is =?, 数据源, 由于是双向绑定的逻辑会去修改数据源上的checked属性
 * @property {Boolean}          inline          - binding symbol is @, 是否横着排
 */
/**
 * checkbox group component define
 * @author fengpeng
 */

var CheckboxGroupComponentDefine = {
  template: _template2.default,
  controller: _checkbox2.default,
  controllerAs: 'controller',
  bindings: {
    disabled: '<',
    model: '=?model',
    inline: '@'
  }
};

exports.default = CheckboxGroupComponentDefine;