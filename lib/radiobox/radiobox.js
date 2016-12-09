'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radiobox = require('../stateenum/radiobox.state');

var _radiobox2 = _interopRequireDefault(_radiobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name radiobox.directive:bpRadio
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chuxin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包装了`Input[type="radio"]`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包含的状态有
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - enable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - disabled
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - checked
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}   disabled       - binding symbol is `<`, 禁用状态,默认 `false`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}    value          - binding symbol is `@`, 选中后的值,默认 `false`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {ANY}       model          - binding symbol is `=?`, 绑定在`radioBox`上的`model`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {complex}   complex        - binding symbol is `=?complex`, 因为`value`只能提供`String`, 复杂结构数据类型使用, `complex`指令
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-radiobox model="vm.radio" value="1"></bp-radiobox>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-radiobox model="vm.radio" value="2"></bp-radiobox>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/radiobox)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

/**
 * Radio component
 *
 * @export
 * @class Radio
 * @extends {Component}
 */

var Radiobox = function (_Component) {
  _inherits(Radiobox, _Component);

  function Radiobox() {
    _classCallCheck(this, Radiobox);

    return _possibleConstructorReturn(this, (Radiobox.__proto__ || Object.getPrototypeOf(Radiobox)).apply(this, arguments));
  }

  _createClass(Radiobox, [{
    key: '_initDefaultState',


    /**
     * 默认状态
     */
    value: function _initDefaultState() {
      this._state = _defineProperty({}, '' + _radiobox2.default.DISABLED, this.disabled);
    }

    /**
     * 默认值
     * @override
     */

  }, {
    key: '_initDefaultValue',
    value: function _initDefaultValue() {
      this.htmlID = this.htmlID || 'radio_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * 样式集合
     * @override
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      this.className = (0, _classnames2.default)({
        'disabled': this._state[_radiobox2.default.DISABLED]
      });
    }

    /**
     * @override
     */

  }, {
    key: '_launch',
    value: function _launch() {}

    /**
     * radio状态 是否被选中
     *因为初始值 model value complex都为undefined
     * 加了判断是为了规避初始不设置任何值情况为选中的状态
     */

  }, {
    key: 'isChecked',
    value: function isChecked() {
      if (this.model && (this.value || this.complex)) {
        if (this.model === this.value || this.model === this.complex) {
          return true;
        }
      }
      return false;
    }
  }]);

  return Radiobox;
}(_component2.default);

exports.default = Radiobox;