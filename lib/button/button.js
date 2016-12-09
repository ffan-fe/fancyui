'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../stateenum/button.state');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name button.directive:bpButton
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author fengpeng
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 按钮组件, 实际上是对**HTML Button**的包装, 自定义了一些状态等
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包含的状态有
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - enable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - disabled
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - loading
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}    type        - binding symbol is `@`, 此类型针对的是样式, 比如选了primary class会出现 `"bp-btn-primary""`, 默认值是primary, 可选值[`"default"`, `"primary"`, `"danger"`]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}    size        - binding symbol is `@`, 按钮大小, 和bootstrap一样, 不填则是默认大小
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}    htmlType    - binding symbol is `@`, 顾名思义, 代表的是原生html里的type值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}   disabled    - binding symbol is `<`, 禁用状态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}    icon        - binding symbol is `@`, 按钮文字前方的icon名称, 详细见[bootstrap](http://getbootstrap.com/components/#glyphicons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {ANY}       click       - binding symbol is `&`, click处理器的表达式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


'use strict';

/**
 * Button component
 *
 * @export
 * @class Button
 * @extends {Component}
 */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: '_initDefaultState',

    /**
     * @override
     * @protected
     */
    value: function _initDefaultState() {
      this._state = _defineProperty({}, '' + _button2.default.DISABLED, this.disabled);
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_initDefaultValue',
    value: function _initDefaultValue() {
      /**
       * 确定模板的class属性值
       *
       * @type {String}
       * @protected
       */
      this.className = '';
      /**
       * Component binding value, 用来确定模板中class的属性值 `bp-btn-{type}`, 默认值是 `primary`
       *
       * @type {String}
       * @protected
       */
      this.type = this.type || 'primary';
      /**
       * Component binding value, html中的type属性.真
       *
       * @type {String}
       * @protected
       */
      this.htmlType = this.htmlType || 'button';
      /**
       * Component binding value, 在按钮文字的前方添加icon
       *
       * @type {String}
       * @protected
       */
      this.iconType = this.icon || '';
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      var _classNames;

      this.className = (0, _classnames2.default)((_classNames = {
        'btn': true,
        'bp-btn': true
      }, _defineProperty(_classNames, 'btn-' + this.size, !!this.size), _defineProperty(_classNames, 'bp-btn-' + this.type, true), _defineProperty(_classNames, 'loading-btn', this._state[_button2.default.LOADING]), _classNames));
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_launch',
    value: function _launch() {}
    /**
     * 比超类多了loading状态
     * @override
     * @protected
     */

  }, {
    key: '_render',
    value: function _render() {
      if (this._state[_button2.default.LOADING]) {
        this.iconType = 'loading';
        this._state[_button2.default.DISABLED] = true;
      } else {
        // not loading state, icon hide or rollback
        this.iconType = this.icon;
      }
      // call super to update className
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), '_render', this).call(this);
    }
    /**
     * 包装一个click处理器, 在模板里面用ngClick, 然后调用传进来的处理器
     *
     * @private
     */

  }, {
    key: 'innerClick',
    value: function innerClick() {
      this.click && typeof this.click === 'function' && this.click({ button: this });
    }
    /**
     * 这里主要是会有Disable值的外部变化
     *
     * @protected
     * @param {Object} changeObj
     */

  }, {
    key: '$onChanges',
    value: function $onChanges(changeObj) {
      if (!this._init) return;
      if (changeObj.hasOwnProperty(_button2.default.DISABLED)) {
        this._state[_button2.default.DISABLED] = changeObj[_button2.default.DISABLED]['currentValue'];
        this._render();
      }
    }
  }]);

  return Button;
}(_component2.default);

exports.default = Button;