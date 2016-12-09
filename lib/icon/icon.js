'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Icon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author fengpeng
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

'use strict';

/**
 * Icon component
 *
 * @export
 * @class Icon
 * @extends {Component}
 */

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: '_initDefaultValue',

    /**
     * @override
     * @protected
     */
    value: function _initDefaultValue() {}
    /**
     * @override
     * @protected
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      // todo: 暂时还没有loading的图标, 有了这个逻辑就可以干掉了
      var iconType = this.type === 'loading' ? 'repeat' : this.type;

      this.className = (0, _classnames2.default)(_defineProperty({
        'bp-icon': true,
        'glyphicon': true
      }, 'glyphicon-' + iconType, !!this.type));
    }
    /**
     * @override
     * @protected
     */

  }, {
    key: '_launch',
    value: function _launch() {}
    /**
     * 主要是因为type变了之后要重新生成class
     *
     * @param {Object} changeObj bindings object
     */

  }, {
    key: '$onChanges',
    value: function $onChanges(changeObj) {
      if (changeObj.hasOwnProperty('type')) {
        this._createClassName();
      }
    }
  }]);

  return Icon;
}(_component2.default);

exports.default = Icon;