'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * abstract component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author fengpeng
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _common = require('../stateenum/common.state');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

/**
 * 基类, 定义了模板和一系列基础操作
 *
 * @export
 * @abstract
 * @class Component
 * @implements {IComponentState}
 */

var Component = function () {
  /**
   * @constructor
   */
  function Component() {
    _classCallCheck(this, Component);

    /**
     * every component has a state object, according to the state properties to determine how to display UI
     *
     * @type {Object}
     * @protected
     */
    this._state = {};
    /**
     * 是否初始化完毕, 标识着是否执行完$onInit
     *
     * @protected
     * @type {Boolean}
     * @default false
     * @see {@link $onInit}
     */
    this._init = false;
  }
  /**
   * get component state
   *
   * @public
   */


  _createClass(Component, [{
    key: '$onInit',

    /**
     * 构建模板, 在最后会将 _init设置为true
     *
     * @protected
     * @final
     * @see {@link _init}
     */
    value: function $onInit() {
      this._initDefaultValue();
      this._initDefaultState();
      this._render();
      this._launch();
      this._init = true;
    }
    /**
     * 初始化默认值, 因为angular组件变量传递是在component定义决定的, 有些值可能没有传进来, 所以在这里确定一次
     *
     * @protected
     */

  }, {
    key: '_initDefaultValue',
    value: function _initDefaultValue() {
      throw new Error('IllegalOperationError for _initDefaultValue method, you need override the method');
    }
    /**
     * initialize state object
     */

  }, {
    key: '_initDefaultState',
    value: function _initDefaultState() {
      this._state = _defineProperty({}, '' + _common2.default.DISABLED, false);
    }
    /**
     * 确定className, 处理过之后赋值到`this.className`属性, 并经由此属性填充到UI(html)的class属性里
     * 每次render都会重新计算一次样式
     *
     * @protected
     * @see {@link _render}
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {
      throw new Error('IllegalOperationError for _createClassName method, you need override the method');
    }
    /**
     * 实现组件功能的细节部分
     *
     * @protected
     */

  }, {
    key: '_launch',
    value: function _launch() {
      throw new Error('IllegalOperationError for _launch method, you need override the method');
    }
    /**
     * 针对不同的状态, 做UI变化, 如果子类有新状态那么override, 并super调用此方法
     *
     * @protected
     */

  }, {
    key: '_render',
    value: function _render() {
      this._createClassName();
    }
  }, {
    key: 'state',
    get: function get() {
      return this._state;
    }
    /**
     * set component state
     *
     * @public
     * @param state {Object}
     */
    ,
    set: function set(state) {
      if (Object.prototype.toString.call(state) === '[object Object]') {
        this._state = _angular2.default.merge(this._state, state);
        this._render();
      }
    }
  }]);

  return Component;
}();

exports.default = Component;