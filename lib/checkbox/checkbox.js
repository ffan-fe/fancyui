'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _checkbox = require('../stateenum/checkbox.state');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name checkbox.directive:bpCheckbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author fengpeng
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包装了HTML Input[type="checkbox"]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包含的状态有
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - enable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - disabled
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - halfChecked
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - checked
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    disabled       - binding symbol is `<`, 禁用状态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    checked        - binding symbol is `=?`, 是否被选中状态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    halfChecked    - binding symbol is `=?`, 是否是半选状态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {ANY}        trueValue      - binding symbol is `@`, like ng-true-value, 是对ng-true-value的封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {ANY}        falseValue     - binding symbol is `@`, like ng-false-value, 是对ng-false-value的封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function}   change         - binding symbol is `&`, onChange event
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function}   click          - binding symbol is `&`, onClick event
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

/**
 * Checkbox component
 * 这里是对<input checkbox>的封装, 唯一需要说明的是半选状态, 是表现一个列表, 选中了某几项, 却又没有全选的状态
 *
 * @export
 * @class Checkbox
 * @extends {Component}
 */

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  /**
   * Creates an instance of Checkbox.
   *
   * @param {$scope} $scope
   */
  function Checkbox($scope) {
    'ngInject';

    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

    _this.$scope = $scope;
    return _this;
  }

  /**
   * @override
   * @protected
   */


  _createClass(Checkbox, [{
    key: '_initDefaultState',
    value: function _initDefaultState() {
      var _state;

      if (this.checked == this.trueValue) {
        this.halfChecked = false;
      }
      this._state = (_state = {}, _defineProperty(_state, '' + _checkbox2.default.DISABLED, this.disabled), _defineProperty(_state, '' + _checkbox2.default.CHECKED, this.checked == this.trueValue), _defineProperty(_state, '' + _checkbox2.default.HALF_CHECKED, this.halfChecked), _state);
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_initDefaultValue',
    value: function _initDefaultValue() {
      this.htmlID = this.htmlID || 'checkbox_' + Math.random().toString(36).substr(2, 9);
      this.trueValue = this.trueValue ? this.trueValue : true;
      this.falseValue = this.falseValue ? this.falseValue : false;
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      this.className = (0, _classnames2.default)({
        'disabled': this._state[_checkbox2.default.DISABLED],
        'checked': this._state[_checkbox2.default.CHECKED],
        'half-checked': this._state[_checkbox2.default.HALF_CHECKED]
      });
    }
    /**
     * 由于onChnages, 监听不到子数据集的变化, 所以只能这么watch... 尼玛有点2B啊.
     *
     * @override
     * @protected
     */

  }, {
    key: '_launch',
    value: function _launch() {
      var _this2 = this;

      var update = function update() {
        _this2.changeHandler();
        _this2._render();
      };
      this.$scope.$watch(function () {
        return _this2.checked;
      }, function (newValue, oldValue) {
        update();
      });
      //
      this.$scope.$watch(function () {
        return _this2.halfChecked;
      }, function (newValue, oldValue) {
        update();
      });
      //
      this.$scope.$watch(function () {
        return _this2.disabled;
      }, function (newValue, oldValue) {
        update();
      });
    }
    /**
     * 统一更新状态
     *
     * @private
     */

  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      var _state2;

      if (this.checked == this.trueValue) {
        this.halfChecked = false;
      }
      this._state = (_state2 = {}, _defineProperty(_state2, '' + _checkbox2.default.DISABLED, this.disabled), _defineProperty(_state2, '' + _checkbox2.default.CHECKED, this.checked == this.trueValue), _defineProperty(_state2, '' + _checkbox2.default.HALF_CHECKED, this.halfChecked), _state2);
      this.change && typeof this.change === 'function' && this.change({ checkbox: this });
    }
    /**
     * 用户点击而改变状态的处理器, 是在模板里面的
     * @private
     */

  }, {
    key: 'innerClick',
    value: function innerClick() {
      this.click && typeof this.click === 'function' && this.click({ checkbox: this });
    }
  }]);

  return Checkbox;
}(_component2.default);

exports.default = Checkbox;