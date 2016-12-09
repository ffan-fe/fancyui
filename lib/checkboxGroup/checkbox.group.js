'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name checkbox.directive:bpCheckboxGroup
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author fengpeng
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 顾名思义, 这是对bpCheckbox组件的二次包装, 通过`model`传进来一个对象数组, 来批量渲染bpCheckbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}          disabled        - binding symbol is `<`, 禁用状态, 在组上禁用则全部禁用, 实际上是对ng-disabled的包装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array.<Object>}   model           - binding symbol is `=?`, 数据源, 由于是双向绑定的逻辑会去修改数据源上的checked属性
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}          inline          - binding symbol is `@`, 是否横着排
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ```html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <bp-checkbox-group model="vm.groupDataList"></bp-checkbox-group>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   在实际的controller或任何数据源里面有这样一个对象数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     groupDataList = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '邢老师不要脸', checked: true},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '老师不要脸'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '师不要脸'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '不要脸'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '要脸', disabled: true},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {label: '脸'}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/checkbox)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

/**
 * checkbox group
 * 
 * @export
 * @class CheckboxGroup
 * @extends {Component}
 */

var CheckboxGroup = function (_Component) {
  _inherits(CheckboxGroup, _Component);

  function CheckboxGroup() {
    _classCallCheck(this, CheckboxGroup);

    return _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).apply(this, arguments));
  }

  _createClass(CheckboxGroup, [{
    key: '_initDefaultValue',

    /**
     * @override 
     * @protected 
     */
    value: function _initDefaultValue() {
      this.model = this.model && _angular2.default.isArray(this.model) ? this.model : [];
    }
    /**
     * @override 
     * @protected 
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      this.ulClassName = (0, _classnames2.default)({
        'list-inline': this.inline
      });
    }
    /**
     * @override 
     * @protected 
     */

  }, {
    key: '_launch',
    value: function _launch() {}
  }]);

  return CheckboxGroup;
}(_component2.default);

exports.default = CheckboxGroup;