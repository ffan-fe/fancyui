(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Transfer = exports.RadioboxGroup = exports.Radiobox = exports.CheckboxGroup = exports.Checkbox = exports.Icon = exports.Button = undefined;

	var _button = __webpack_require__(1);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(14);

	var _icon2 = _interopRequireDefault(_icon);

	var _checkbox = __webpack_require__(18);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkbox3 = __webpack_require__(25);

	var _checkbox4 = _interopRequireDefault(_checkbox3);

	var _radiobox = __webpack_require__(29);

	var _radiobox2 = _interopRequireDefault(_radiobox);

	var _radiobox3 = __webpack_require__(36);

	var _radiobox4 = _interopRequireDefault(_radiobox3);

	var _transfer = __webpack_require__(42);

	var _transfer2 = _interopRequireDefault(_transfer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';

	var Button = exports.Button = _button2.default;
	var Icon = exports.Icon = _icon2.default;
	var Checkbox = exports.Checkbox = _checkbox2.default;
	var CheckboxGroup = exports.CheckboxGroup = _checkbox4.default;
	var Radiobox = exports.Radiobox = _radiobox2.default;
	var RadioboxGroup = exports.RadioboxGroup = _radiobox4.default;
	var Transfer = exports.Transfer = _transfer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(14);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict'; /**
	               * @ngdoc overview
	               * @name button
	               * @description
	               * 
	               * # Button component module
	               * 
	               * module name is **Button**
	               * 
	               * <pre>
	               * import {Button} from 'anaheim';
	               * angular.module('myApp', [Button.name]);
	               * </pre>
	               */

	exports.default = _angular2.default.module('Button', [_icon2.default.name]).component('bpButton', _button2.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(4);

	var _button2 = _interopRequireDefault(_button);

	var _template = __webpack_require__(9);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';

	/**
	 * @type {Object}
	 * @property {String}   type        - binding symbol is @, 此类型针对的是样式, 比如选了primary class会出现 `bp-btn-primary`, 默认值是primary, 可选值[default, primary, danger]
	 * @property {String}   size        - binding symbol is @, 按钮大小, 和bootstrap一样, 不填则是默认大小
	 * @property {String}   htmlType    - binding symbol is @, 顾名思义, 代表的是原生html里的type值
	 * @property {Boolean}  disabled    - binding symbol is <, 禁用状态
	 * @property {String}   icon        - binding symbol is @, 按钮文字前方的icon名称, 详细见bootstrap
	 * @property {Boolean}  click       - binding symbol is &, click 处理器
	 */
	/**
	 * Button component define
	 */

	var ButtonComponentDefine = {
	  template: _template2.default,
	  controller: _button2.default,
	  controllerAs: 'controller',
	  transclude: true,
	  bindings: {
	    type: '@',
	    size: '@',
	    htmlType: '@',
	    disabled: '<',
	    icon: '@',
	    click: '&'
	  }
	};

	exports.default = ButtonComponentDefine;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _button = __webpack_require__(8);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * abstract component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author fengpeng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(6);

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * 各个组件都会存在的状态
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * 是否禁用
	   * 
	   * @type {string}
	   */
	  DISABLED: 'disabled'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(6);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Button states enumeration
	 */

	'use strict';

	exports.default = _angular2.default.extend({
	  /**
	   * 加载中状态
	   * @type {String}
	   */
	  LOADING: 'loading'

	}, _common2.default);

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<button \n  type=\"{{controller.htmlType}}\" \n  ng-class=\"controller.className\"\n  ng-click=\"controller.innerClick()\"\n  ng-disabled=\"controller.state.disabled\">\n    <bp-icon ng-if=\"controller.iconType\" type=\"controller.iconType\"></bp-icon>\n    <span ng-transclude></span>\n  </button>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./button.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./button.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".bp-btn {\n  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.bp-btn.loading-btn {\n  padding-left: 20px;\n}\n.bp-btn.loading-btn .bp-icon {\n  animation: loadingCircle 1s linear infinite;\n}\n.bp-btn .bp-icon {\n  margin-right: 2px;\n}\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _icon = __webpack_require__(15);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Icon component entry
	 * @author name
	 */

	'use strict';

	exports.default = _angular2.default.module('Icon', []).component('bpIcon', _icon2.default);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(16);

	var _icon2 = _interopRequireDefault(_icon);

	var _template = __webpack_require__(17);

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(7);

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

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<i class=\"{{controller.className}}\"></i>"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _checkbox = __webpack_require__(19);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @ngdoc overview
	 * @name checkbox
	 * @description
	 * 
	 * # Checkbox component module
	 * 
	 * module name is **Checkbox**
	 * 
	 * 这里包含
	 *  - bpCheckbox
	 *  - bpCheckboxGroup
	 * 
	 * <pre>
	 * import {Checkbox} from 'anaheim';
	 * angular.module('myApp', [Checkbox.name]);
	 * </pre>
	 * 
	 * <pre>
	 * import {CheckboxGroup} from 'anaheim';
	 * angular.module('myApp', [CheckboxGroup.name]);
	 * </pre>
	 * 
	 * <pre>
	 * import {Checkbox, CheckboxGroup} from 'anaheim';
	 * </pre>
	 */

	'use strict';

	exports.default = _angular2.default.module('Checkbox', []).component('bpCheckbox', _checkbox2.default);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(20);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _template = __webpack_require__(22);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';

	/**
	 * @type {Object}
	 * @property {Boolean}    disabled       - binding symbol is <, 禁用状态
	 * @property {Boolean}    checked        - binding symbol is =?, 是否被选中状态
	 * @property {Boolean}    halfChecked    - binding symbol is =?, 是否是半选状态
	 * @property {ANY}        trueValue      - binding symbol is @, like ng-true-value, 是对ng-true-value的封装
	 * @property {ANY}        falseValue     - binding symbol is @, like ng-false-value, 是对ng-false-value的封装
	 */
	/**
	 * Checkbox component define
	 * @author fengpeng
	 */

	var CheckboxComponentDefine = {
	  template: _template2.default,
	  controller: _checkbox2.default,
	  controllerAs: 'controller',
	  transclude: true,
	  bindings: {
	    disabled: '<',
	    checked: '=?checked',
	    halfChecked: '=?halfChecked',
	    trueValue: '@',
	    falseValue: '@'
	  }
	};

	exports.default = CheckboxComponentDefine;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _checkbox = __webpack_require__(21);

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
	  Checkbox.$inject = ["$scope"];
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
	    // $onInit() {
	    // }
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

	      this.$scope.$watch(function () {
	        return _this2.checked;
	      }, function (newValue, oldValue) {
	        _this2.changeHandler();
	        _this2._render();
	      });
	      this.$scope.$watch(function () {
	        return _this2.halfChecked;
	      }, function (newValue, oldValue) {
	        var halfChecked = newValue;
	        _this2.state = _defineProperty({}, '' + _checkbox2.default.HALF_CHECKED, halfChecked);
	        if (halfChecked) {
	          _this2.state = _defineProperty({}, '' + _checkbox2.default.CHECKED, false);
	        }
	        _this2._render();
	      });
	      this.$scope.$watch(function () {
	        return _this2.disabled;
	      }, function (newValue, oldValue) {
	        _this2.state = _defineProperty({}, '' + _checkbox2.default.DISABLED, newValue);
	        _this2._render();
	      });
	    }
	    /**
	     * 用户点击而改变状态的处理器, 是在模板里面的
	     *
	     * @private
	     */

	  }, {
	    key: 'changeHandler',
	    value: function changeHandler() {
	      if (this.checked == this.trueValue) {
	        var _state2;

	        this.state = (_state2 = {}, _defineProperty(_state2, '' + _checkbox2.default.CHECKED, true), _defineProperty(_state2, '' + _checkbox2.default.HALF_CHECKED, false), _state2);
	      } else {
	        var _state3;

	        this.state = (_state3 = {}, _defineProperty(_state3, '' + _checkbox2.default.CHECKED, false), _defineProperty(_state3, '' + _checkbox2.default.HALF_CHECKED, false), _state3);
	      }
	    }
	  }]);

	  return Checkbox;
	}(_component2.default);

	exports.default = Checkbox;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(6);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checkbox states enumeration
	 */

	'use strict';

	exports.default = _angular2.default.extend({
	  /**
	   * 选中
	   * 
	   * @type {String}
	   */
	  CHECKED: 'checked',
	  /**
	   * 半选状态, 这个集中在做列表全选的时候会出现
	   * 表现是, 选择了但又没有全选这个尴尬的状态
	   * 
	   * @type {String}
	   */
	  HALF_CHECKED: 'halfChecked'

	}, _common2.default);

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<label for=\"{{controller.htmlID}}\" class=\"checkbox-container\" \n  ng-class=\"[controller.className, {checked: controller.state.checked}]\">\n  <span class=\"checkbox-inner\">\n    <span class=\"checkbox-inner-box\"></span>\n    <input type=\"checkbox\" id=\"{{controller.htmlID}}\" \n      ng-true-value=\"{{controller.trueValue}}\"\n      ng-false-value=\"{{controller.falseValue}}\"\n      ng-disabled=\"controller.disabled\"\n      ng-model=\"controller.checked\" \n      ng-change=\"controller.changeHandler()\" />\n    <span class=\"checkbox-label\" ng-transclude></span>\n  </span>\n</label>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./checkbox.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./checkbox.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".checkbox-container {\n  position: relative;\n}\n.checkbox-container input[type=\"checkbox\"] {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  margin: 0px;\n  visibility: hidden;\n}\n.checkbox-container .checkbox-inner-box {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 1px solid #CCCCCC;\n  border-radius: 2px;\n  background-color: white;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.checkbox-container .checkbox-inner-box:hover {\n  border-color: #58b4e9;\n}\n.checkbox-container .checkbox-inner-box:after {\n  display: block;\n  content: \"\";\n  transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  transform: rotate(45deg) scale(0);\n}\n.checkbox-container.checked .checkbox-inner-box,\n.checkbox-container.half-checked .checkbox-inner-box {\n  background-color: #58b4e9;\n  border-color: #58b4e9;\n}\n.checkbox-container.checked .checkbox-inner-box:after {\n  display: block;\n  width: 6px;\n  height: 9px;\n  position: absolute;\n  left: 4px;\n  top: 5px;\n  border-top: 2px solid white;\n  content: \" \";\n  border: 2px solid white;\n  border-left: none;\n  border-top: none;\n  transform: rotate(45deg) scale(1);\n}\n.checkbox-container.half-checked .checkbox-inner-box:after {\n  display: block;\n  width: 8px;\n  height: 0px;\n  position: absolute;\n  left: 3px;\n  top: 10px;\n  border-top: 2px solid white;\n  content: \" \";\n  transform: scale(1);\n}\n.checkbox-container.disabled .checkbox-inner-box {\n  background-color: #f3f3f3;\n  border-color: #d9d9d9;\n  cursor: not-allowed;\n}\n.checkbox-container.disabled .checkbox-inner-box:after {\n  border-color: #CCC;\n}\n.checkbox-container .checkbox-label {\n  font-size: 12px;\n  font-weight: normal;\n}\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _checkboxGroup = __webpack_require__(26);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checkbox group component entry
	 * @author name
	 */

	'use strict';

	exports.default = _angular2.default.module('CheckboxGroup', []).component('bpCheckboxGroup', _checkboxGroup2.default);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(27);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _template = __webpack_require__(28);

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

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _component = __webpack_require__(5);

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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   更多例子的[传送门](https://ffan-fe.github.io/#/ui/checkbox)
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

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"list-unstyled\" \n  ng-disabled=\"controller.disabled\"\n  ng-class=\"controller.ulClassName\">\n  <li ng-repeat=\"item in controller.model track by $index\">\n    <bp-checkbox\n      disabled=\"item.disabled || controller.disabled\"\n      checked=\"item.checked\"\n      half-checked=\"item.halfChecked\"\n    >{{item.label}}</bp-checkbox>\n  </li>\n</ul>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _radiobox = __webpack_require__(30);

	var _radiobox2 = _interopRequireDefault(_radiobox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Radio component entry
	 * @author name
	 */

	'use strict';

	exports.default = _angular2.default.module('Radiobox', []).component('bpRadiobox', _radiobox2.default);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radiobox = __webpack_require__(31);

	var _radiobox2 = _interopRequireDefault(_radiobox);

	var _template = __webpack_require__(33);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict'; /**
	               * @type {Object}
	               * @property {Boolean}    disabled       - binding symbol is <, 禁用状态
	               * @property {String}    value          - binding symbol is @, 选中后的值
	               * @property {ANY}        model          - binding symbol is =?,绑定在radioBox上的model
	               * @property {complex}    complex        - binding symbol is =?complex, 因为value只能提供String, 复杂结构数据类型使用, complex指令
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

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _radiobox = __webpack_require__(32);

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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包装了HTML Input[type="radio"]
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包含的状态有
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - enable
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - disabled
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - checked
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}         disabled       - binding symbol is `<`, 禁用状态
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}         disabled       - binding symbol is `<`, 是否横向展示
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}          model          - binding symbol is `=`, 绑定在组件上的model
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array.Object}    list          - binding symbol is @, 选中后的值
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {ANY}             complex        - binding symbol is `=?complex`, 因为value只能提供String, 复杂结构数据类型使用, complex指令
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ```html
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-radiobox model="vm.radio" value="1"></bp-radiobox>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-radiobox model="vm.radio" value="2"></bp-radiobox>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ```
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/#/ui/radiobox)
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

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(6);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checkbox states enumeration
	 */

	'use strict';

	exports.default = _angular2.default.extend({}, _common2.default);

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<label for=\"{{controller.htmlID}}\" class=\"radio-container\"\n       ng-class=\"[controller.className, {checked: controller.isChecked()}]\">\n      <span class=\"radio-inner\"></span>\n      <input type=\"radio\" id=\"{{controller.htmlID}}\"\n              ng-value=\"controller.complex || controller.value\"\n              ng-disabled=\"controller.disabled\"\n              ng-model=\"controller.model\"\n      />\n      <span ng-transclude></span>\n</label>\n"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./radiobox.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./radiobox.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".radio-container {\n  font-size: 12px;\n  white-space: nowrap;\n  outline: none;\n  display: inline-block;\n  position: relative;\n  line-height: 1;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-container input[type=radio] {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.radio-container .radio-inner {\n  position: relative;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n}\n.radio-container .radio-inner .radio-inner,\n.radio-container .radio-inner .radio-inner:after {\n  -webkit-transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.radio-container .radio-inner:after {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  left: 3px;\n  top: 3px;\n  border-radius: 6px;\n  display: table;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  background-color: #58b4e9;\n  opacity: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.radio-container.checked .radio-inner {\n  border-color: #d9d9d9;\n}\n.radio-container.checked .radio-inner:after {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  -webkit-transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.radio-container.disabled .radio-inner {\n  border-color: #d9d9d9;\n  background-color: #f3f3f3;\n}\n.radio-container.disabled .radio-inner:hover {\n  border-color: #d9d9d9;\n}\n.radio-container.disabled .radio-inner:after {\n  background-color: #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _radioboxGroup = __webpack_require__(37);

	var _radioboxGroup2 = _interopRequireDefault(_radioboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Radio component entry
	 * @author name
	 */

	'use strict';

	exports.default = _angular2.default.module('RadioboxGroup', []).component('bpRadioboxGroup', _radioboxGroup2.default);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radiobox = __webpack_require__(38);

	var _radiobox2 = _interopRequireDefault(_radiobox);

	var _template = __webpack_require__(39);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict'; /**
	               * @type {Object}
	               * @property {Boolean}         disabled        - binding symbol is <, 禁用状态
	               * @property {Boolean}         inline          - binding symbol is <, 是否横向展示
	               * @property {String}          model           - binding symbol is =?model, 绑定在radioBoxGroup上的model
	               * @property {Array.<Object>}  list            - binding symbol is =?list, 数据源, controller提供的数组用于遍历展示radio
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name radiobox.directive:bpRadioboxGroup
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chuxin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 对radiobox的二次包装 提供`list`指令
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 包含的状态有
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - enable
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - disabled
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - checked
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}         disabled        - binding symbol is <, 禁用状态
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}         inline          - binding symbol is <, 是否横向展示
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String}          model           - binding symbol is =?model, 绑定在radioBoxGroup上的model
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array.<Object>}  list            - binding symbol is =?list, 数据源, controller提供的数组用于遍历展示radio
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ```html
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-radio-group list="vm.groupDataList" model="vm.model"></bp-radio-group>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ```
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                在实际的controller或任何数据源里面有这样一个对象数组
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <pre>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.model = "这个杀手不太冷";
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.groupDataList = [
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: '沉默的羔羊', value: '沉默的羔羊'},
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: '这个杀手不太冷',value:'这个杀手不太冷'},
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: '指环王',value:'指环王',complex:{author:'xxx',age:45,sex:'不详'}},
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: '速度与激情',value:"速度与激情"},
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: '魔兽世界', value:"魔兽世界",disabled: true},
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {label: 'X战警',value:"X战警"}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ];
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </pre>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/#/ui/radiobox)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	'use strict';

	/**
	 * RadioGroup component
	 *
	 * @export
	 * @class RadioGroup
	 * @extends {Component}
	 */

	var RadioboxGroup = function (_Component) {
	  _inherits(RadioboxGroup, _Component);

	  function RadioboxGroup() {
	    _classCallCheck(this, RadioboxGroup);

	    return _possibleConstructorReturn(this, (RadioboxGroup.__proto__ || Object.getPrototypeOf(RadioboxGroup)).apply(this, arguments));
	  }

	  _createClass(RadioboxGroup, [{
	    key: '_initDefaultValue',


	    /**
	     * @override
	     */
	    value: function _initDefaultValue() {
	      this.list = this.list && angular.isArray(this.list) ? this.list : [];
	    }
	  }, {
	    key: '_createClassName',
	    value: function _createClassName() {}
	  }, {
	    key: '_launch',
	    value: function _launch() {}
	  }]);

	  return RadioboxGroup;
	}(_component2.default);

	exports.default = RadioboxGroup;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"list-unstyled\"\n    ng-disabled=\"controller.disabled\"\n    ng-class=\"{'list-inline': controller.inline}\">\n      <li ng-repeat=\"item in controller.list track by $index\">\n            <bp-radiobox\n                disabled=\"item.disabled || controller.disabled\"\n                model=\"controller.model\"\n                value=\"{{item.value}}\"\n                complex=\"item.complex\"\n            >{{item.label}}</bp-radiobox>\n      </li>\n</ul>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./radiobox.group.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./radiobox.group.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transfer = __webpack_require__(43);

	var _transfer2 = _interopRequireDefault(_transfer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict'; /**
	               * Transfer component entry
	               * @author name
	               */

	exports.default = angular.module('Transfer', []).component('bpTransfer', _transfer2.default);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transfer = __webpack_require__(44);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _template = __webpack_require__(45);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict'; /**
	               * Transfer component define
	               */

	var componentDefine = {
	  template: _template2.default,
	  controller: _transfer2.default,
	  controllerAs: 'controller',
	  bindings: {

	    /**
	     *数据源
	     */
	    sourceData: "=?sourceData",

	    /**
	     * 目标数据集合
	     */
	    targetData: '=?targetData',

	    /**
	     * 标题 从左至右
	     * @type {array}
	     */
	    titles: '<',

	    /**
	     * 从左至右 placeholder
	     * @type placeholder
	     */
	    placeholders: '<',

	    /**
	     * 操作文案 从上至下
	     * @type {array}
	     */
	    operations: '<',

	    /**
	     * 是否展示左边检索框
	     * @type {Boolean}
	     */
	    showLeftSearch: '<',

	    /**
	     * 是否展示右边搜索框
	     * @type {Boolean}
	     */
	    showRightSearch: '<',

	    /**
	     *是否需要单个增加按钮
	     * @type {Boolean}
	     */
	    addBtn: '<',

	    /**
	     * 是否需要增加全部按钮
	     * @type {Boolean}
	     */
	    addAllBtn: '<',

	    /**
	     * 删除某个元素
	     * @type {Boolean}
	     */
	    delBtn: '<',

	    /**
	     * 删除所有的按钮
	     * @type {Boolean}
	     */
	    delAllBtn: '<',

	    /**
	     *服务端检索
	     */
	    serverSearch: '&?' //加上问号 如果调用方不传此指令会有 undefined

	  }
	};

	exports.default = componentDefine;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(5);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Transfer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	'use strict';

	/**
	 * Transfer component
	 *
	 * @export
	 * @class Transfer
	 * @extends {Component}
	 */

	var Transfer = function (_Component) {
	  Transfer.$inject = ["$filter", "$scope"];
	  _inherits(Transfer, _Component);

	  function Transfer($filter, $scope) {
	    'ngInject';

	    _classCallCheck(this, Transfer);

	    var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this));

	    _this.$filter = $filter;
	    /**
	     * todo...
	     * 用户直接对  sourceData targetData赋值
	     * 过滤一遍
	     */
	    /*    $scope.$watch(() => {
	          return this.sourceData;
	        }, (newValue, oldValue) => {
	          if(angular.isArray(newValue) && newValue.length != 0){
	            console.log('newValue1111',newValue);
	          }
	    
	        });
	    
	        $scope.$watch(() => {
	          return this.targetData;
	        }, (newValue, oldValue) => {
	          //console.log(newValue,oldValue);
	          if(angular.isArray(newValue) && newValue.length != 0){
	            console.log('newValue',newValue)
	          }
	    
	        });*/

	    return _this;
	  }

	  /**
	   * @override
	   */


	  _createClass(Transfer, [{
	    key: '_initDefaultValue',
	    value: function _initDefaultValue() {
	      this.docInfo = {
	        leftTitle: '请选择',
	        rightTitle: '请选择',
	        leftPlaceholder: '请输入检索条件',
	        rightPlaceholder: '请输入检索条件',
	        addOperation: '添加',
	        addAllOperation: '添加全部',
	        delOperation: '删除',
	        delAllOperation: '全部删除'
	      };
	      /**
	       *是否需要服务端检索
	       * @type {boolean}
	       */
	      this.isNeedServerSearch = typeof this.serverSearch === 'function';
	      this.showLeftSearch = angular.isUndefined(this.showLeftSearch) ? true : this.showLeftSearch;
	      this.showRightSearch = angular.isUndefined(this.showRightSearch) ? true : this.showRightSearch;
	      this.addBtn = angular.isUndefined(this.addBtn) ? true : this.addBtn;
	      this.addAllBtn = angular.isUndefined(this.addAllBtn) ? true : this.addAllBtn;
	      this.delBtn = angular.isUndefined(this.delBtn) ? true : this.delBtn;
	      this.delAllBtn = angular.isUndefined(this.delAllBtn) ? true : this.delAllBtn;
	      this.sourceData = angular.isArray(this.sourceData) ? this.sourceData : [];
	      this.targetData = angular.isArray(this.targetData) ? this.targetData : [];
	      this.leftValue = angular.isArray(this.leftValue) ? this.leftValue : [];
	      this.rightValue = angular.isArray(this.rightValue) ? this.rightValue : [];
	      this.setDoc();
	    }
	  }, {
	    key: 'buildDoc',
	    value: function buildDoc(source, defArr) {
	      var _this2 = this;

	      source = angular.isArray(source) ? source : [];
	      angular.forEach(defArr, function (item, index) {
	        _this2.docInfo[item] = source[index] ? source[index] : _this2.docInfo[item];
	      });
	    }
	  }, {
	    key: 'setDoc',
	    value: function setDoc() {
	      this.buildDoc(this.titles, ['leftTitle', 'rightTitle']);
	      this.buildDoc(this.placeholders, ['leftPlaceholder', 'rightPlaceholder']);
	      this.buildDoc(this.operations, ['addOperation', 'addAllOperation', 'delOperation', 'delAllOperation']);
	    }

	    /**
	     *双击 增
	     */

	  }, {
	    key: 'optionSourceClick',
	    value: function optionSourceClick(option) {
	      this.rightValue = [];
	      this.targetData = this.pushData(this.targetData, option, this.sourceData);
	      this.sourceData = this.reduceData(this.sourceData, option);
	      this.leftValue = [];
	    }

	    /**
	     *双击 删
	     */

	  }, {
	    key: 'optionTargetClick',
	    value: function optionTargetClick(option) {
	      this.leftValue = [];
	      this.sourceData = this.pushData(this.sourceData, option, this.targetData);
	      this.targetData = this.reduceData(this.targetData, option);
	      this.rightValue = [];
	    }

	    /**
	     * reduce
	     */

	  }, {
	    key: 'reduceData',
	    value: function reduceData(target, data) {
	      var _this3 = this;

	      var target = target,
	          data = data;
	      angular.forEach(data, function (item) {
	        var index = _this3.getIndex(target, item);
	        if (index >= 0) {
	          target.splice(index, 1);
	        }
	      });
	      return target;
	    }

	    /**
	     * push
	     */

	  }, {
	    key: 'pushData',
	    value: function pushData(target, data, sourceData) {
	      var _this4 = this;

	      var target = angular.copy(target),
	          data = angular.copy(data),
	          sourceData = angular.copy(sourceData);
	      angular.forEach(data, function (item) {
	        if (_this4.getIndex(target, item) < 0) {
	          _this4.getIndex(sourceData, item) > -1 ? target.push(sourceData[_this4.getIndex(sourceData, item)]) : '';
	        }
	      });
	      return target;
	    }

	    /**
	     * get  index
	     */

	  }, {
	    key: 'getIndex',
	    value: function getIndex(target, item) {
	      var item = angular.isNumber(item) ? parseInt(item) : item;
	      return target.findIndex(function (element) {
	        return element && element.key == item;
	      });
	    }

	    /**
	     * getKeys
	     */

	  }, {
	    key: 'getKeys',
	    value: function getKeys(data) {
	      var target = [];
	      angular.forEach(data, function (item) {
	        target.push(item.key);
	      });
	      return target;
	    }

	    /**
	     * add
	     */

	  }, {
	    key: 'add',
	    value: function add() {
	      this.rightValue = [];
	      this.targetData = this.pushData(this.targetData, this.leftValue, this.sourceData);
	      this.sourceData = this.reduceData(this.sourceData, this.leftValue);
	      this.leftValue = [];
	    }

	    /**
	     * addAll
	     */

	  }, {
	    key: 'addAll',
	    value: function addAll() {
	      this.rightValue = [];
	      this.leftValue = [];
	      this.targetData = this.pushData(this.targetData, this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue)), this.sourceData);
	      this.leftSearchValue ? this.sourceData = this.reduceData(this.sourceData, this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue))) : this.sourceData = [];
	    }

	    /**
	     * del
	     */

	  }, {
	    key: 'del',
	    value: function del() {
	      this.leftValue = [];
	      this.sourceData = this.pushData(this.sourceData, this.rightValue, this.targetData);
	      this.targetData = this.reduceData(this.targetData, this.rightValue);
	      this.rightValue = [];
	    }

	    /**
	     * delAll
	     */

	  }, {
	    key: 'delAll',
	    value: function delAll() {
	      this.rightValue = [];
	      this.leftValue = [];
	      this.sourceData = this.pushData(this.sourceData, this.getKeys(this.$filter('filter')(this.targetData, this.rightSearchValue)), this.targetData);
	      this.rightSearchValue ? this.targetData = this.reduceData(this.targetData, this.getKeys(angular.copy(this.$filter('filter')(this.targetData, this.rightSearchValue)))) : this.targetData = [];
	    }

	    /**
	     * 点击事件
	     */

	  }, {
	    key: 'innerClick',
	    value: function innerClick() {
	      this.serverSearch && typeof this.serverSearch === 'function' && this.serverSearch({ $value: this.searchValue });
	    }

	    /**
	     * 包装一个change处理器, 在模板里面用change, 然后调用传进来的处理器
	     * @private
	     */

	  }, {
	    key: 'innerChange',
	    value: function innerChange() {}

	    /**
	     * @override
	     */

	  }, {
	    key: '_createClassName',
	    value: function _createClassName() {}
	    /**
	     * @override
	     */

	  }, {
	    key: '_launch',
	    value: function _launch() {}
	  }]);

	  return Transfer;
	}(_component2.default);

	exports.default = Transfer;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"transfer\">\n  <!-- 支持服务端检索 -->\n  <div class=\"form-inline server-search\" data-ng-if=\"controller.isNeedServerSearch\">\n    <input\n      class=\"form-control  input-sm\"\n      type=\"text\"\n      data-ng-model=\"controller.searchValue\"\n      placeholder=\"请输入检索的值\"\n    />\n    <bp-button click=\"controller.innerClick()\" size=\"sm\">查询</bp-button>\n  </div>\n  <!-- /支持服务端检索 -->\n\n  <!-- 左侧栏 -->\n  <div class=\"transfer-left\">\n\n    <!--列表标题 左-->\n    <div class=\"list-title\">\n      <div class=\"list-title-name\"\n           title=\"{{controller.docInfo.leftTitle}}\">\n        {{controller.docInfo.leftTitle}}\n      </div>\n      <div class=\"list-title-total\" title=\"共{{controller.leftValue.length != 0 ? controller.leftValue.length + '/':''}}{{controller.sourceData.length}}条\">\n        共{{controller.leftValue.length != 0 ? controller.leftValue.length + '/':''}}{{controller.sourceData.length}}条\n      </div>\n    </div>\n    <!--/列表标题 左-->\n\n    <div class=\"transfer-search\">\n      <!-- 前端检索 -->\n      <input\n             type=\"text\"\n             class=\"form-control input-sm\"\n             placeholder=\"{{controller.docInfo.leftPlaceholder}}\"\n             data-ng-model=\"controller.leftSearchValue\"\n             data-ng-disabled=\"!controller.showLeftSearch\"\n      />\n      <span class=\"transfer-search-span\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n      <!-- /前端检索 -->\n    </div>\n    <div class=\"transfer-left-select\">\n      <select  name=\"multipleSelect\"\n               multiple\n               data-ng-model=\"controller.leftValue\">\n        <option data-ng-repeat=\"option in controller.sourceData | filter:controller.leftSearchValue\"\n                data-ng-dblclick=\"controller.optionSourceClick(option)\"\n                value=\"{{option.key}}\"\n                title=\"{{option.value}}\">\n          {{option.value}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <!-- /左侧栏 -->\n\n  <!-- 中间 -->\n  <div class=\"transfer-center\">\n      <div class=\"form-group\">\n        <p>\n          <bp-button\n                size=\"sm\"\n                click=\"controller.add()\"\n                data-ng-if=\"controller.addBtn\"\n                disabled=\"(controller.leftValue).length === 0\"\n        >\n          {{controller.docInfo.addOperation}}\n        </bp-button>\n          </p>\n        <p>\n        <bp-button\n                size=\"sm\"\n                click=\"controller.addAll()\"\n                data-ng-if=\"controller.addAllBtn\"\n                disabled=\"(controller.sourceData).length === 0\"\n        >\n          {{controller.docInfo.addAllOperation}}\n        </bp-button>\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <p>\n        <bp-button\n                type=\"default\"\n                size=\"sm\"\n                click=\"controller.del()\"\n                data-ng-if=\"controller.delBtn\"\n                disabled=\"(controller.rightValue).length === 0\"\n        >\n          {{controller.docInfo.delOperation}}\n        </bp-button>\n        </p>\n        <p>\n        <bp-button\n                type=\"default\"\n                size=\"sm\"\n                click=\"controller.delAll()\"\n                data-ng-if=\"controller.delAllBtn\"\n                disabled=\"(controller.targetData).length === 0\"\n        >\n          {{controller.docInfo.delAllOperation}}\n        </bp-button>\n        </p>\n      </div>\n  </div>\n  <!--中间-->\n\n  <!-- 右侧 -->\n  <div class=\"transfer-right\">\n\n    <!--列表标题 右-->\n    <div class=\"list-title\">\n      <div class=\"list-title-name\"\n           title=\"{{controller.docInfo.rightTitle}}\">\n        {{controller.docInfo.rightTitle}}</div>\n      <div class=\"list-title-total\"\n           title=\"共{{controller.rightValue.length != 0 ? controller.rightValue.length + '/':''}}{{controller.targetData.length}}条\">\n        共{{controller.rightValue.length != 0 ? controller.rightValue.length + '/':''}}{{controller.targetData.length}}条\n      </div>\n    </div>\n    <!--/列表标题 右-->\n\n    <div class=\"transfer-search\">\n      <!-- 前端检索 右-->\n      <input type=\"text\"\n             class=\"form-control input-sm\"\n             placeholder=\"{{controller.docInfo.rightPlaceholder}}\"\n             data-ng-model=\"controller.rightSearchValue\"\n             data-ng-disabled=\"!controller.showRightSearch\"\n      />\n      <span class=\"transfer-search-span\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </span>\n      <!-- /前端检索 右-->\n    </div>\n    <div class=\"transfer-right-stores\">\n      <select  name=\"multipleSelect\"\n               multiple\n               data-ng-model=\"controller.rightValue\">\n        <option data-ng-repeat=\"option in controller.targetData | filter:controller.rightSearchValue\"\n                data-ng-dblclick=\"controller.optionTargetClick(option)\"\n                value=\"{{option.key}}\"\n                title=\"{{option.value}}\">\n          {{option.value}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <!-- /右侧 -->\n</div>\n"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./transfer.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./transfer.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".transfer {\n  width: 640px;\n  height: 322px;\n}\n.transfer .bp-btn:focus {\n  outline: 0;\n}\n.transfer .server-search {\n  padding-bottom: 12px;\n  /*  /* border-bottom: 1px solid #e9e9e9;\n       border-bottom-right-radius: 3px;\n       border-bottom-left-radius: 3px;*/\n}\n.transfer .server-search .input-sm {\n  border-color: #e9e9e9;\n  border-radius: 6px;\n}\n.transfer .list-title {\n  font-size: 12px;\n  padding: 2px;\n  height: 30px;\n  color: #666;\n  border-bottom: 1px solid  #e9e9e9;\n}\n.transfer .list-title .list-title-name {\n  width: 180px;\n  height: 18px;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  float: left;\n  margin: 5px 12px;\n}\n.transfer .list-title .list-title-total {\n  height: 18px;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 5px 0 0 200px;\n}\n.transfer .transfer-search {\n  width: 265px;\n  position: relative;\n  left: 6px;\n  top: 10px;\n}\n.transfer .transfer-search .input-sm {\n  border-color: #e9e9e9;\n  border-radius: 6px;\n}\n.transfer .transfer-search-span {\n  position: relative;\n  bottom: 23px;\n  left: 245px;\n}\n.transfer .transfer-search-span .glyphicon-search {\n  color: #ccc;\n}\n.transfer select {\n  width: 278px;\n  height: 240px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  font-size: 12px;\n  border: hidden;\n  overflow-y: auto;\n  margin: 0;\n  padding: 5px 0 0 9px;\n}\n.transfer select option {\n  width: 260px;\n  padding: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.transfer select option:hover {\n  background-color: #eaf8fe;\n}\n.transfer select option:checked {\n  background: #58b4e9 linear-gradient(0deg, #58b4e9 0%, #58b4e9 100%);\n}\n.transfer select:focus {\n  outline: 0;\n}\n.transfer .transfer-left {\n  width: 280px;\n  float: left;\n  border-radius: 6px;\n  border: 1px solid #e9e9e9;\n}\n.transfer .transfer-center {\n  float: left;\n  padding: 85px 5px;\n}\n.transfer .transfer-right {\n  width: 280px;\n  float: left;\n  border-radius: 6px;\n  border: 1px solid #e9e9e9;\n}\n.transfer .transfer-right .transfer-right-stores {\n  /* padding: 5px;*/\n}\n.transfer .transfer-right .transfer-left-select {\n  /* padding: 5px;*/\n}\n", ""]);

	// exports


/***/ }
/******/ ])
});
;