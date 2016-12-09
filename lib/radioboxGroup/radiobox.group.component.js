'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radiobox = require('./radiobox.group');

var _radiobox2 = _interopRequireDefault(_radiobox);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./radiobox.group.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * @type {Object}
               * @property {Boolean}         disabled        - binding symbol is `<`, 禁用状态
               * @property {Boolean}         inline          - binding symbol is `<`, 是否横向展示
               * @property {String}          model           - binding symbol is `=?model`, 绑定在radioBoxGroup上的model
               * @property {Array.<Object>}  list            - binding symbol is `=?list`, 数据源, controller提供的数组用于遍历展示radio
               */

var componentDefine = {
  template: _template2.default,
  controller: _radiobox2.default,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是否被禁用
     * @type {Boolean}
     */
    disabled: '<',

    /**
     * model
     * @type {String}
     */
    model: '=?model',

    /**
     * list
     * @type {String}
     */
    list: '=?list',

    /**
     * Is display li to inline
     *
     * @type {Boolean}
     */
    inline: '=?inline'

  }
};

exports.default = componentDefine;