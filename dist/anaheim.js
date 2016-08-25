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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< 80624e67db0ebe0d8452673d92c6f53af5e7e2c8
	exports.CitySelector = exports.RadioboxGroup = exports.Radiobox = exports.CheckboxGroup = exports.Checkbox = exports.Icon = exports.Button = undefined;
=======
	exports.Transfer = exports.RadioboxGroup = exports.Radiobox = exports.CheckboxGroup = exports.Checkbox = exports.Icon = exports.Button = undefined;
>>>>>>> transfer组件更新
=======
	exports.Transfer = exports.RadioboxGroup = exports.Radiobox = exports.CheckboxGroup = exports.Checkbox = exports.Icon = exports.Button = undefined;
>>>>>>> timepicker Update

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

<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< 80624e67db0ebe0d8452673d92c6f53af5e7e2c8
	var _city = __webpack_require__(42);

	var _city2 = _interopRequireDefault(_city);
=======
	var _transfer = __webpack_require__(42);

	var _transfer2 = _interopRequireDefault(_transfer);
>>>>>>> transfer组件更新
=======
	var _transfer = __webpack_require__(42);

	var _transfer2 = _interopRequireDefault(_transfer);
>>>>>>> timepicker Update

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';

	var Button = exports.Button = _button2.default;
	var Icon = exports.Icon = _icon2.default;
	var Checkbox = exports.Checkbox = _checkbox2.default;
	var CheckboxGroup = exports.CheckboxGroup = _checkbox4.default;
	var Radiobox = exports.Radiobox = _radiobox2.default;
	var RadioboxGroup = exports.RadioboxGroup = _radiobox4.default;
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< 80624e67db0ebe0d8452673d92c6f53af5e7e2c8
	var CitySelector = exports.CitySelector = _city2.default;
=======
	var Transfer = exports.Transfer = _transfer2.default;
>>>>>>> transfer组件更新
=======
	var Transfer = exports.Transfer = _transfer2.default;
>>>>>>> timepicker Update

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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
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
	      _get(Object.getPrototypeOf(Button.prototype), '_render', this).call(this);
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
	    falseValue: '@',
	    change: '&?',
	    click: '&?'
=======
	    falseValue: '@'
>>>>>>> timepicker Update
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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< cfcdf3f267689a46ed8a6a85106eeac222325373
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function}   change         - binding symbol is `&`, onChange event
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function}   click          - binding symbol is `&`, onClick event
=======
>>>>>>> 时间组件更新
=======
>>>>>>> timepicker Update
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

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this));

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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
=======
	    // $onInit() {
	    // }
>>>>>>> timepicker Update
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

<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
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
=======
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
>>>>>>> timepicker Update
	     * @private
	     */

	  }, {
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< cfcdf3f267689a46ed8a6a85106eeac222325373
	    key: 'innerClick',
	    value: function innerClick() {
	      this.click && typeof this.click === 'function' && this.click({ checkbox: this });
=======
	    key: 'changeHandler',
	    value: function changeHandler() {
	      if (this.checked == this.trueValue) {
	        var _state5;

	        this.state = (_state5 = {}, _defineProperty(_state5, '' + _checkbox2.default.CHECKED, true), _defineProperty(_state5, '' + _checkbox2.default.HALF_CHECKED, false), _state5);
	      } else {
	        var _state6;

	        this.state = (_state6 = {}, _defineProperty(_state6, '' + _checkbox2.default.CHECKED, false), _defineProperty(_state6, '' + _checkbox2.default.HALF_CHECKED, false), _state6);
	      }
>>>>>>> 时间组件更新
=======
	    key: 'changeHandler',
	    value: function changeHandler() {
	      if (this.checked == this.trueValue) {
	        var _state2;

	        this.state = (_state2 = {}, _defineProperty(_state2, '' + _checkbox2.default.CHECKED, true), _defineProperty(_state2, '' + _checkbox2.default.HALF_CHECKED, false), _state2);
	      } else {
	        var _state3;

	        this.state = (_state3 = {}, _defineProperty(_state3, '' + _checkbox2.default.CHECKED, false), _defineProperty(_state3, '' + _checkbox2.default.HALF_CHECKED, false), _state3);
	      }
>>>>>>> timepicker Update
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

<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< cfcdf3f267689a46ed8a6a85106eeac222325373
	module.exports = "<label for=\"{{controller.htmlID}}\" class=\"checkbox-container\" \n  ng-class=\"[controller.className, {checked: controller.state.checked}]\">\n  <span class=\"checkbox-inner\">\n    <span class=\"checkbox-inner-box\"></span>\n    <input type=\"checkbox\" id=\"{{controller.htmlID}}\" \n      ng-true-value=\"{{controller.trueValue}}\"\n      ng-false-value=\"{{controller.falseValue}}\"\n      ng-disabled=\"controller.disabled\"\n      ng-click=\"controller.innerClick()\"\n      ng-model=\"controller.checked\" />\n    <span class=\"checkbox-label\" ng-transclude></span>\n  </span>\n</label>\n"
=======
	module.exports = "<label for=\"{{controller.htmlID}}\" class=\"checkbox-container\" \n  ng-class=\"[controller.className, {checked: controller.state.checked}]\">\n  <span class=\"checkbox-inner\">\n    <span class=\"checkbox-inner-box\"></span>\n    <input type=\"checkbox\" id=\"{{controller.htmlID}}\" \n      ng-true-value=\"{{controller.trueValue}}\"\n      ng-false-value=\"{{controller.falseValue}}\"\n      ng-disabled=\"controller.disabled\"\n      ng-model=\"controller.checked\" \n      ng-change=\"controller.changeHandler()\" />\n    <span class=\"checkbox-label\" ng-transclude></span>\n  </span>\n</label>\n"
>>>>>>> 时间组件更新
=======
	module.exports = "<label for=\"{{controller.htmlID}}\" class=\"checkbox-container\" \n  ng-class=\"[controller.className, {checked: controller.state.checked}]\">\n  <span class=\"checkbox-inner\">\n    <span class=\"checkbox-inner-box\"></span>\n    <input type=\"checkbox\" id=\"{{controller.htmlID}}\" \n      ng-true-value=\"{{controller.trueValue}}\"\n      ng-false-value=\"{{controller.falseValue}}\"\n      ng-disabled=\"controller.disabled\"\n      ng-model=\"controller.checked\" \n      ng-change=\"controller.changeHandler()\" />\n    <span class=\"checkbox-label\" ng-transclude></span>\n  </span>\n</label>\n"
>>>>>>> timepicker Update

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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
<<<<<<< cfcdf3f267689a46ed8a6a85106eeac222325373
/* 25 */
=======
/* 21 */
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
/* 22 */
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
/* 23 */
>>>>>>> 时间组件更新
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
=======
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
>>>>>>> timepicker Update
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxGroup).apply(this, arguments));
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/#/ui/radio)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	'use strict';

	/**
	 * Radio component
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
	 * 
=======
	 *
>>>>>>> timepicker Update
	 * @export
	 * @class Radio
	 * @extends {Component}
	 */

	var Radiobox = function (_Component) {
	  _inherits(Radiobox, _Component);

	  function Radiobox() {
	    _classCallCheck(this, Radiobox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Radiobox).apply(this, arguments));
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
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
	     * @override 
=======
	     * @override
>>>>>>> timepicker Update
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/#/ui/radio)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	'use strict';

	/**
	 * RadioGroup component
<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
	 * 
=======
	 *
>>>>>>> timepicker Update
	 * @export
	 * @class RadioGroup
	 * @extends {Component}
	 */

	var RadioboxGroup = function (_Component) {
	  _inherits(RadioboxGroup, _Component);

	  function RadioboxGroup() {
	    _classCallCheck(this, RadioboxGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioboxGroup).apply(this, arguments));
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

<<<<<<< c6766c370eb15f617c26598ea53e577b643c4552
	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _city = __webpack_require__(43);

	var _city2 = _interopRequireDefault(_city);

	var _angularUiBootstrap = __webpack_require__(49);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	var _checkbox = __webpack_require__(18);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';

	exports.default = _angular2.default.module('citySelector', [_angularUiBootstrap2.default, _checkbox2.default.name]).service('citySelector', _city2.default);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @ngdoc service
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name citySelector.service:citySelector
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author fengpeng
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 城市选择组件, 统一从接口[/Database/coupon_component/selectCity](/Database/coupon_component/selectCity)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 弹窗部分统一使用的是angular ui bootstrap 中的 uibModal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * **Methods**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - `open(config)` - 此方法会以弹窗的形式打开城市选择的弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮, 这里会返回所有选择城市的id; `reject`表明用户点击了取消或关闭按钮
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    参数`config`是可选的, 可用值是
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - isReadOnly:   Boolean   - 表示是否只读, 常见于详情页等场景
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - checkedList:  Array     - 表示回填字段, 里面包含是城市id
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - database:     Array     - 外部提供渲染UI的数据, 注意格式请保持一致, 格式请参照上述`Datebase`接口
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <pre>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  constructor(citySelector) {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    'ngInject';
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    this.citySelector = citySelector;
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  showCitySelector() {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           this.citySelector.open({checkedList: [310100, 310200, 371700]}).then(
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             idList => {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               console.log('idList', idList);
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           );
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         }
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * </pre>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _template = __webpack_require__(44);

	var _template2 = _interopRequireDefault(_template);

	var _citySelector = __webpack_require__(45);

	var _citySelector2 = _interopRequireDefault(_citySelector);

	__webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	'use strict';

	var CitySelector = function () {
	  /**
	   * Creates an instance of CitySelector.
	   * 
	   * @param {$uibModal} $uibModal 弹窗的实现依赖
	   * @param {$q} $q promise
	   */

	  CitySelector.$inject = ["$uibModal", "$q"];
	  function CitySelector($uibModal, $q) {
	    'ngInject';

	    _classCallCheck(this, CitySelector);

	    this.$uibModal = $uibModal;
	    this.$q = $q;
	    this.modalInstance = null;
	  }
	  /**
	   * 打开城市选择
	   * 
	   * @param {Object} [config={}] 
	   * @returns {Promise} resolve为确定, reject为取消
	   */


	  _createClass(CitySelector, [{
	    key: 'open',
	    value: function open() {
	      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var deferred = this.$q.defer();
	      this.modalInstance = this.$uibModal.open({
	        template: _template2.default,
	        controller: _citySelector2.default,
	        controllerAs: 'vm',
	        resolve: {
	          // 是否只读, 这里支持的是详情页等情况
	          isReadOnly: function isReadOnly() {
	            return config.isReadOnly || false;
	          },
	          // 这是里填入一个值列表, 做数据回填展示用
	          checkedList: function checkedList() {
	            return config.checkedList || [];
	          },
	          // 直接给一个结果, 用这个结果来渲染UI, 所以保证格式必须是一样的
	          database: function database() {
	            return config.database || null;
	          }
	        }
	      });
	      this.modalInstance.result.then(function (cityIDList) {
	        deferred.resolve(cityIDList);
	      }, function () {
	        deferred.reject();
	      });
	      return deferred.promise;
	    }
	  }]);

	  return CitySelector;
	}();

	exports.default = CitySelector;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div cg-busy=\"{promise:vm.loadPromise, minDuration: 500, message:'数据加载ing...'}\">\n  <div class=\"modal-header\">\n    <span class=\"modal-title\">城市选择</span>\n    <!--<div class=\"modal-close\">X</div>-->\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"city-selector-container\" >\n      <section class=\"region-container\" ng-repeat=\"region in vm.regionList track by $index\" ng-show=\"vm.regionList\">\n        <!--选择区域-->\n        <div>\n          <bp-checkbox id=\"region{{region.regionId}}\" \n            click=\"vm.checkboxClickHandler(region, 'region')\" \n            checked=\"region.checked\"\n            half-checked=\"region.halfChecked\"\n            disabled=\"vm.isReadOnly\">\n              {{region.regionName}}\n          </bp-checkbox>\n        </div>\n        <ul class=\"province-list list-inline\">\n          <!--省列表-->\n          <li class=\"province-list-item\" ng-repeat=\"province in region.child\" ng-class=\"{open:province.isShowCityList}\">\n            <bp-checkbox id=\"province{{province.provinceId}}\" \n              click=\"vm.checkboxClickHandler(province, 'province')\" \n              checked=\"province.checked\"\n              half-checked=\"province.halfChecked\"\n              disabled=\"vm.isReadOnly\">\n                {{province.provinceName}}\n            </bp-checkbox>\n            <span class=\"glyphicon glyphicon-chevron-down arrow-down\" ng-click=\"vm.showCityList(province)\"></span>\n            <div class=\"city-list-container\" ng-show=\"province.isShowCityList\">\n              <div class=\"city-list-close-btn-container\">\n                <a href=\"javascript:;\" class=\"city-list-close-btn\" ng-click=\"vm.closeCityList(province)\">\n                  <span class=\"glyphicon glyphicon-remove\"></span>\n                </a>\n              </div>\n              <ul class=\"city-list list-inline\">\n                <!--市列表-->\n                <li class=\"city-list-item\" ng-repeat=\"city in province.child\">\n                  <bp-checkbox id=\"city{{city.cityId}}\" \n                    click=\"vm.cityCheckHandler(city)\" \n                    checked=\"city.checked\" \n                    disabled=\"vm.isReadOnly\">\n                      {{city.cityName}}\n                  </bp-checkbox>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </section>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn bp-btn-primary\" ng-click=\"vm.confirmHandler()\">确定</button>\n    <button class=\"btn bp-btn-default\" ng-click=\"vm.cancelHandler()\">关闭</button>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _localData = __webpack_require__(46);

	var _localData2 = _interopRequireDefault(_localData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	'use strict';

	/**
	 * 几个区域枚举
	 */
	var regionType = {
	  REGION: "region",
	  PROVINCE: 'province',
	  CITY: 'city'
	};

	var CitySelectorController = function () {
	  /**
	   * Creates an instance of CitySelectorController.
	   * 
	   * @param {$uib} $uibModalInstance
	   * @param {$http} $http
	   * @param {Boolean} isReadOnly
	   * @param {Array} checkedList
	   * @param {Object} database 有了这个数据集就不再发请求了
	   */

	  CitySelectorController.$inject = ["$uibModalInstance", "$http", "isReadOnly", "checkedList", "database"];
	  function CitySelectorController($uibModalInstance, $http, isReadOnly, checkedList, database) {
	    'ngInject';

	    _classCallCheck(this, CitySelectorController);

	    this.$uibModalInstance = $uibModalInstance;
	    this.$http = $http;
	    this.isReadOnly = isReadOnly;
	    this.checkedList = checkedList;
	    this.database = database;
	    // 做回填的时候, 也需要回填各种状态, 这里记录好有变化的省份, 然后上下检查, 比较方便
	    this.fillProvinceList = [];
	  }

	  _createClass(CitySelectorController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;

	      // 如果外部提供了数据集, 那么就不再发请求了
	      if (this.database) {
	        this.regionList = this.database;
	        this.formatData(this.regionList);
	        return;
	      }
	      // 这个请求实际上只能运行在xadmin这个环境下
	      this.loadPromise = this.$http.get('/Database/coupon_component/selectCity').then(function (response) {
	        if (response && response.data && response.data.status == 200) {
	          _this.regionList = response.data.data;
	        } else {
	          _this.regionList = _localData2.default.data;
	        }
	      },
	      // 请求败了使用本地数据
	      function () {
	        _this.regionList = _localData2.default.data;
	      }).finally(function () {
	        _this.formatData(_this.regionList);
	      });
	    }
	    /**
	     * 开始对数据做一遍处理, 为子节点添加父节点ID, 这样方便查找
	     * 
	     * @param dataList {Array}
	     */

	  }, {
	    key: 'formatData',
	    value: function formatData(dataList) {
	      var _this2 = this;

	      if (dataList && angular.isArray(dataList)) {
	        dataList.forEach(function (item) {
	          if (item.child) {
	            _this2.formatNodeData(item, item.child);
	          }
	        });
	      }
	    }
	    /**
	     * 为子节点设置父节点ID, 回填数据
	     * 
	     * @param {Object} parentNode
	     * @param {Array} childList 子节点列表, 省或是市
	     */

	  }, {
	    key: 'formatNodeData',
	    value: function formatNodeData(parentNode, childList) {
	      var _this3 = this;

	      if (!angular.isArray(childList)) return;
	      // 获取父节点的信息
	      var getParentInfo = function getParentInfo(node) {
	        // 大区域
	        if (node.hasOwnProperty('regionId')) {
	          return { parentNodeID: node.regionId, parentNodeType: regionType.REGION };
	        }
	        // 省
	        if (node.hasOwnProperty('provinceId')) {
	          return { parentNodeID: node.provinceId, parentNodeType: regionType.provinceId };
	        }
	        // 都不是
	        return { parentNodeID: '', parentNodeType: '' };
	      };
	      //
	      childList.forEach(function (childItem) {
	        var _getParentInfo = getParentInfo(parentNode);

	        var parentNodeID = _getParentInfo.parentNodeID;
	        var parentNodeType = _getParentInfo.parentNodeType;

	        childItem.parentID = parentNodeID;
	        childItem.parentType = parentNodeType;
	        // 给节点添加类型属性, 并检测回填数据
	        (function (targetData) {
	          // 大区
	          if (targetData.hasOwnProperty('regionId')) {
	            targetData.type = regionType.REGION;
	            return;
	          }
	          // 省
	          if (targetData.hasOwnProperty('provinceId')) {
	            targetData.type = regionType.PROVINCE;
	            return;
	          }
	          // 市
	          if (targetData.hasOwnProperty('cityId')) {
	            targetData.type = regionType.CITY;
	            if (_this3.checkedList && _this3.checkedList.indexOf(targetData['cityId']) > -1) {
	              targetData.checked = true;
	              _this3.checkUp(targetData);
	              _this3.checkUp(parentNode);
	            }
	          };
	        })(childItem);
	        // 是否还存在子节点, 递归
	        if (childItem.child && angular.isArray(childItem.child)) {
	          _this3.formatNodeData(childItem, childItem.child);
	        }
	      });
	    }
	    /**
	     * checkbox click handler 在每个区域和省checkbox点击时的处理器
	     * 这里主要是做全选子节点的和取消全选子节点的操作
	     * 注意
	     *  1. 这里是递归操作
	     *  2. 这里只针对省和区域, 城市的有专门的处理方式
	     * 
	     * @param dataSource {Object} 区域或省的数据集.
	     * @param {String} type 用来区分到底是哪个级别被点了
	     */

	  }, {
	    key: 'checkboxClickHandler',
	    value: function checkboxClickHandler(dataSource, type) {
	      var _this4 = this;

	      if (dataSource && dataSource.child && angular.isArray(dataSource.child)) {
	        (function () {
	          //checked {Boolean} 这是view里在checkbox上用ng-model绑定得来的
	          var answer = dataSource.checked;
	          dataSource.child.forEach(function (item) {
	            item.checked = answer;
	            if (item.child && angular.isArray(item.child)) {
	              _this4.checkboxClickHandler(item, item.type);
	            }
	          });
	          if (type === regionType.PROVINCE) {
	            _this4.checkUp(dataSource);
	          }
	        })();
	      }
	    }
	    /**
	     * 城市checkbox click handler
	     * 
	     * @param cityData {Object} 城市的数据
	     */

	  }, {
	    key: 'cityCheckHandler',
	    value: function cityCheckHandler(cityData) {
	      this.checkUp(cityData);
	      // 这里肯定是市, 往上找区域再检测一次
	      var province = this.findParentNodeByID(cityData.parentID, regionType.PROVINCE);
	      this.checkUp(province);
	    }
	    /**
	     * 向上检查
	     */

	  }, {
	    key: 'checkUp',
	    value: function checkUp(node) {
	      var type = node.type === regionType.CITY ? regionType.PROVINCE : regionType.REGION;
	      var parentNode = this.findParentNodeByID(node.parentID, type);
	      var isAllChecked = this.isChildAllChecked(parentNode);
	      parentNode.checked = isAllChecked;
	      if (!isAllChecked) {
	        // 不是全选了, 那么有可能是半选, 查询之
	        parentNode.halfChecked = this.isHalfChecked(parentNode);
	      } else {
	        parentNode.halfChecked = false;
	      }
	    }
	    /**
	     * 检查子节点是不是都被选择了. 如果是检查的节点是省级单位, 那么往上找一层.
	     * 因为如果是区域级单是没有上级的, 市一级单位实际上就是检查的省, 所以只判断是不是省就可以了, 以后有了更多级别则需要修改
	     * 
	     * @param nodeData {Object} 要检查的节点
	     * @returns {Boolean} 节点第一级内是否全选
	     */

	  }, {
	    key: 'isChildAllChecked',
	    value: function isChildAllChecked(nodeData) {
	      if (nodeData && nodeData.child && angular.isArray(nodeData.child)) {
	        return nodeData.child.every(function (item) {
	          return item.checked;
	        });
	      }
	      return false;
	    }
	    /**
	     * 是否半选, 即是检查所有一级子节点, 是否有一个被选中
	     * 
	     * @param {any} nodeData
	     */

	  }, {
	    key: 'isHalfChecked',
	    value: function isHalfChecked(nodeData) {
	      if (nodeData && nodeData.child && angular.isArray(nodeData.child)) {
	        return nodeData.child.some(function (item) {
	          return item.checked;
	        });
	      }
	      return false;
	    }
	    /**
	     * 查找父节点
	     * 
	     * @param id          {int}     某个区域的id
	     * @param parentType  {String}  标识现在需要在哪一个级别查询
	     * @return {Object} 某一个级别的数据
	     */

	  }, {
	    key: 'findParentNodeByID',
	    value: function findParentNodeByID(id, parentType) {
	      var key = parentType + 'Id';
	      var find = function find(childList) {
	        if (childList && angular.isArray(childList)) {
	          return childList.find(function (item) {
	            return item[key] == id;
	          });
	        }
	      };
	      var result = null;
	      // 如果是区域一级别的就查一级就行
	      if (parentType === regionType.REGION) {
	        result = find(this.regionList);
	      }
	      // 如果要在省级别查询就要挨个循环省级数据
	      if (parentType === regionType.PROVINCE) {
	        var province = null;
	        for (var i = 0; i < this.regionList.length; i++) {
	          province = find(this.regionList[i].child);
	          if (province) {
	            result = province;
	            break;
	          }
	        }
	      }
	      return result;
	    }
	    /**
	     * 多给箭头一个开关的功能
	     * 
	     * @param provinceData {Object} 省一级的数据对象
	     */

	  }, {
	    key: 'showCityList',
	    value: function showCityList(provinceData) {
	      provinceData.isShowCityList = !provinceData.isShowCityList;
	      if (this.currentShowCityListData != provinceData) {
	        this.currentShowCityListData && (this.currentShowCityListData.isShowCityList = false);
	      }
	      this.currentShowCityListData = provinceData;
	    }
	    /**
	     * 关闭城市列表按钮
	     * 
	     * @param provinceData {Object} 省一级的数据对象
	     */

	  }, {
	    key: 'closeCityList',
	    value: function closeCityList(provinceData) {
	      provinceData.isShowCityList = false;
	      this.currentShowCityListData = null;
	    }
	    /**
	     * 收集选中的城市
	     * 
	     * @returns {Set} for city id list
	     */

	  }, {
	    key: 'collectCheckedInformation',
	    value: function collectCheckedInformation() {
	      var checkedCityIDList = [];
	      var find = function find(dataList) {
	        if (dataList && angular.isArray(dataList)) {
	          dataList.forEach(function (item) {
	            if (item.checked && item.hasOwnProperty('cityId')) {
	              checkedCityIDList.push(item['cityId']);
	            }
	            if (item.hasOwnProperty('child')) {
	              find(item.child);
	            }
	          });
	        }
	      };
	      find(this.regionList);
	      return checkedCityIDList;
	    }
	    /**
	     * 确认, 返回结果, 且关闭
	     */

	  }, {
	    key: 'confirmHandler',
	    value: function confirmHandler() {
	      this.$uibModalInstance.close(this.collectCheckedInformation());
	    }
	    /**
	     * 直接关闭
	     */

	  }, {
	    key: 'cancelHandler',
	    value: function cancelHandler() {
	      this.$uibModalInstance.dismiss();
	    }
	  }]);

	  return CitySelectorController;
	}();

	exports.default = CitySelectorController;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	exports.default = {
	      "status": 200,
	      "data": [{
	            "regionId": 3,
	            "regionName": "华东区",
	            "child": [{
	                  "provinceId": 310000,
	                  "provinceName": "上海市",
	                  "child": [{
	                        "cityId": 310100,
	                        "cityName": "上海市"
	                  }, {
	                        "cityId": 310200,
	                        "cityName": "上海县"
	                  }]
	            }, {
	                  "provinceId": 320000,
	                  "provinceName": "江苏省",
	                  "child": [{
	                        "cityId": 320100,
	                        "cityName": "南京市"
	                  }, {
	                        "cityId": 320200,
	                        "cityName": "无锡市"
	                  }, {
	                        "cityId": 320300,
	                        "cityName": "徐州市"
	                  }, {
	                        "cityId": 320400,
	                        "cityName": "常州市"
	                  }, {
	                        "cityId": 320500,
	                        "cityName": "苏州市"
	                  }, {
	                        "cityId": 320600,
	                        "cityName": "南通市"
	                  }, {
	                        "cityId": 320700,
	                        "cityName": "连云港市"
	                  }, {
	                        "cityId": 320800,
	                        "cityName": "淮安市"
	                  }, {
	                        "cityId": 320900,
	                        "cityName": "盐城市"
	                  }, {
	                        "cityId": 321000,
	                        "cityName": "扬州市"
	                  }, {
	                        "cityId": 321100,
	                        "cityName": "镇江市"
	                  }, {
	                        "cityId": 321200,
	                        "cityName": "泰州市"
	                  }, {
	                        "cityId": 321300,
	                        "cityName": "宿迁市"
	                  }]
	            }, {
	                  "provinceId": 330000,
	                  "provinceName": "浙江省",
	                  "child": [{
	                        "cityId": 330100,
	                        "cityName": "杭州市"
	                  }, {
	                        "cityId": 330200,
	                        "cityName": "宁波市"
	                  }, {
	                        "cityId": 330300,
	                        "cityName": "温州市"
	                  }, {
	                        "cityId": 330400,
	                        "cityName": "嘉兴市"
	                  }, {
	                        "cityId": 330500,
	                        "cityName": "湖州市"
	                  }, {
	                        "cityId": 330600,
	                        "cityName": "绍兴市"
	                  }, {
	                        "cityId": 330700,
	                        "cityName": "金华市"
	                  }, {
	                        "cityId": 330800,
	                        "cityName": "衢州市"
	                  }, {
	                        "cityId": 330900,
	                        "cityName": "舟山市"
	                  }, {
	                        "cityId": 331000,
	                        "cityName": "台州市"
	                  }, {
	                        "cityId": 331100,
	                        "cityName": "丽水市"
	                  }]
	            }, {
	                  "provinceId": 340000,
	                  "provinceName": "安徽省",
	                  "child": [{
	                        "cityId": 340100,
	                        "cityName": "合肥市"
	                  }, {
	                        "cityId": 340200,
	                        "cityName": "芜湖市"
	                  }, {
	                        "cityId": 340300,
	                        "cityName": "蚌埠市"
	                  }, {
	                        "cityId": 340400,
	                        "cityName": "淮南市"
	                  }, {
	                        "cityId": 340500,
	                        "cityName": "马鞍山市"
	                  }, {
	                        "cityId": 340600,
	                        "cityName": "淮北市"
	                  }, {
	                        "cityId": 340700,
	                        "cityName": "铜陵市"
	                  }, {
	                        "cityId": 340800,
	                        "cityName": "安庆市"
	                  }, {
	                        "cityId": 341000,
	                        "cityName": "黄山市"
	                  }, {
	                        "cityId": 341100,
	                        "cityName": "滁州市"
	                  }, {
	                        "cityId": 341200,
	                        "cityName": "阜阳市"
	                  }, {
	                        "cityId": 341300,
	                        "cityName": "宿州市"
	                  }, {
	                        "cityId": 341500,
	                        "cityName": "六安市"
	                  }, {
	                        "cityId": 341600,
	                        "cityName": "亳州市"
	                  }, {
	                        "cityId": 341700,
	                        "cityName": "池州市"
	                  }, {
	                        "cityId": 341800,
	                        "cityName": "宣城市"
	                  }]
	            }, {
	                  "provinceId": 350000,
	                  "provinceName": "福建省",
	                  "child": [{
	                        "cityId": 350100,
	                        "cityName": "福州市"
	                  }, {
	                        "cityId": 350200,
	                        "cityName": "厦门市"
	                  }, {
	                        "cityId": 350300,
	                        "cityName": "莆田市"
	                  }, {
	                        "cityId": 350400,
	                        "cityName": "三明市"
	                  }, {
	                        "cityId": 350500,
	                        "cityName": "泉州市"
	                  }, {
	                        "cityId": 350600,
	                        "cityName": "漳州市"
	                  }, {
	                        "cityId": 350700,
	                        "cityName": "南平市"
	                  }, {
	                        "cityId": 350800,
	                        "cityName": "龙岩市"
	                  }, {
	                        "cityId": 350900,
	                        "cityName": "宁德市"
	                  }]
	            }, {
	                  "provinceId": 360000,
	                  "provinceName": "江西省",
	                  "child": [{
	                        "cityId": 360100,
	                        "cityName": "南昌市"
	                  }, {
	                        "cityId": 360200,
	                        "cityName": "景德镇市"
	                  }, {
	                        "cityId": 360300,
	                        "cityName": "萍乡市"
	                  }, {
	                        "cityId": 360400,
	                        "cityName": "九江市"
	                  }, {
	                        "cityId": 360500,
	                        "cityName": "新余市"
	                  }, {
	                        "cityId": 360600,
	                        "cityName": "鹰潭市"
	                  }, {
	                        "cityId": 360700,
	                        "cityName": "赣州市"
	                  }, {
	                        "cityId": 360800,
	                        "cityName": "吉安市"
	                  }, {
	                        "cityId": 360900,
	                        "cityName": "宜春市"
	                  }, {
	                        "cityId": 361000,
	                        "cityName": "抚州市"
	                  }, {
	                        "cityId": 361100,
	                        "cityName": "上饶市"
	                  }]
	            }, {
	                  "provinceId": 370000,
	                  "provinceName": "山东省",
	                  "child": [{
	                        "cityId": 370100,
	                        "cityName": "济南市"
	                  }, {
	                        "cityId": 370200,
	                        "cityName": "青岛市"
	                  }, {
	                        "cityId": 370300,
	                        "cityName": "淄博市"
	                  }, {
	                        "cityId": 370400,
	                        "cityName": "枣庄市"
	                  }, {
	                        "cityId": 370500,
	                        "cityName": "东营市"
	                  }, {
	                        "cityId": 370600,
	                        "cityName": "烟台市"
	                  }, {
	                        "cityId": 370700,
	                        "cityName": "潍坊市"
	                  }, {
	                        "cityId": 370800,
	                        "cityName": "济宁市"
	                  }, {
	                        "cityId": 370900,
	                        "cityName": "泰安市"
	                  }, {
	                        "cityId": 371000,
	                        "cityName": "威海市"
	                  }, {
	                        "cityId": 371100,
	                        "cityName": "日照市"
	                  }, {
	                        "cityId": 371200,
	                        "cityName": "莱芜市"
	                  }, {
	                        "cityId": 371300,
	                        "cityName": "临沂市"
	                  }, {
	                        "cityId": 371400,
	                        "cityName": "德州市"
	                  }, {
	                        "cityId": 371500,
	                        "cityName": "聊城市"
	                  }, {
	                        "cityId": 371600,
	                        "cityName": "滨州市"
	                  }, {
	                        "cityId": 371700,
	                        "cityName": "菏泽市"
	                  }]
	            }]
	      }, {
	            "regionId": 1,
	            "regionName": "华北区",
	            "child": [{
	                  "provinceId": 110000,
	                  "provinceName": "北京市",
	                  "child": [{
	                        "cityId": 110100,
	                        "cityName": "北京市"
	                  }, {
	                        "cityId": 110200,
	                        "cityName": "北京县"
	                  }, {
	                        "cityId": 110800,
	                        "cityName": "测试城市"
	                  }]
	            }, {
	                  "provinceId": 120000,
	                  "provinceName": "天津市",
	                  "child": [{
	                        "cityId": 120100,
	                        "cityName": "天津市"
	                  }]
	            }, {
	                  "provinceId": 130000,
	                  "provinceName": "河北省",
	                  "child": [{
	                        "cityId": 130100,
	                        "cityName": "石家庄市"
	                  }, {
	                        "cityId": 130200,
	                        "cityName": "唐山市"
	                  }, {
	                        "cityId": 130300,
	                        "cityName": "秦皇岛市"
	                  }, {
	                        "cityId": 130400,
	                        "cityName": "邯郸市"
	                  }, {
	                        "cityId": 130500,
	                        "cityName": "邢台市"
	                  }, {
	                        "cityId": 130600,
	                        "cityName": "保定市"
	                  }, {
	                        "cityId": 130700,
	                        "cityName": "张家口市"
	                  }, {
	                        "cityId": 130800,
	                        "cityName": "承德市"
	                  }, {
	                        "cityId": 130900,
	                        "cityName": "沧州市"
	                  }, {
	                        "cityId": 131000,
	                        "cityName": "廊坊市"
	                  }, {
	                        "cityId": 131100,
	                        "cityName": "衡水市"
	                  }]
	            }, {
	                  "provinceId": 140000,
	                  "provinceName": "山西省",
	                  "child": [{
	                        "cityId": 140100,
	                        "cityName": "太原市"
	                  }, {
	                        "cityId": 140200,
	                        "cityName": "大同市"
	                  }, {
	                        "cityId": 140300,
	                        "cityName": "阳泉市"
	                  }, {
	                        "cityId": 140400,
	                        "cityName": "长治市"
	                  }, {
	                        "cityId": 140500,
	                        "cityName": "晋城市"
	                  }, {
	                        "cityId": 140600,
	                        "cityName": "朔州市"
	                  }, {
	                        "cityId": 140700,
	                        "cityName": "晋中市"
	                  }, {
	                        "cityId": 140800,
	                        "cityName": "运城市"
	                  }, {
	                        "cityId": 140900,
	                        "cityName": "忻州市"
	                  }, {
	                        "cityId": 141000,
	                        "cityName": "临汾市"
	                  }, {
	                        "cityId": 141100,
	                        "cityName": "吕梁市"
	                  }]
	            }, {
	                  "provinceId": 150000,
	                  "provinceName": "内蒙古自治区",
	                  "child": [{
	                        "cityId": 150100,
	                        "cityName": "呼和浩特市"
	                  }, {
	                        "cityId": 150200,
	                        "cityName": "包头市"
	                  }, {
	                        "cityId": 150300,
	                        "cityName": "乌海市"
	                  }, {
	                        "cityId": 150400,
	                        "cityName": "赤峰市"
	                  }, {
	                        "cityId": 150500,
	                        "cityName": "通辽市"
	                  }, {
	                        "cityId": 150600,
	                        "cityName": "鄂尔多斯市"
	                  }, {
	                        "cityId": 150700,
	                        "cityName": "呼伦贝尔市"
	                  }, {
	                        "cityId": 150800,
	                        "cityName": "巴彦淖尔市"
	                  }, {
	                        "cityId": 150900,
	                        "cityName": "乌兰察布市"
	                  }, {
	                        "cityId": 152200,
	                        "cityName": "兴安盟"
	                  }, {
	                        "cityId": 152500,
	                        "cityName": "锡林郭勒盟"
	                  }, {
	                        "cityId": 152900,
	                        "cityName": "阿拉善盟"
	                  }]
	            }]
	      }, {
	            "regionId": 2,
	            "regionName": "东北区",
	            "child": [{
	                  "provinceId": 210000,
	                  "provinceName": "辽宁省",
	                  "child": [{
	                        "cityId": 210100,
	                        "cityName": "沈阳市"
	                  }, {
	                        "cityId": 210200,
	                        "cityName": "大连市"
	                  }, {
	                        "cityId": 210300,
	                        "cityName": "鞍山市"
	                  }, {
	                        "cityId": 210400,
	                        "cityName": "抚顺市"
	                  }, {
	                        "cityId": 210500,
	                        "cityName": "本溪市"
	                  }, {
	                        "cityId": 210600,
	                        "cityName": "丹东市"
	                  }, {
	                        "cityId": 210700,
	                        "cityName": "锦州市"
	                  }, {
	                        "cityId": 210800,
	                        "cityName": "营口市"
	                  }, {
	                        "cityId": 210900,
	                        "cityName": "阜新市"
	                  }, {
	                        "cityId": 211000,
	                        "cityName": "辽阳市"
	                  }, {
	                        "cityId": 211100,
	                        "cityName": "盘锦市"
	                  }, {
	                        "cityId": 211200,
	                        "cityName": "铁岭市"
	                  }, {
	                        "cityId": 211300,
	                        "cityName": "朝阳市"
	                  }, {
	                        "cityId": 211400,
	                        "cityName": "葫芦岛市"
	                  }]
	            }, {
	                  "provinceId": 220000,
	                  "provinceName": "吉林省",
	                  "child": [{
	                        "cityId": 220100,
	                        "cityName": "长春市"
	                  }, {
	                        "cityId": 220200,
	                        "cityName": "吉林市"
	                  }, {
	                        "cityId": 220300,
	                        "cityName": "四平市"
	                  }, {
	                        "cityId": 220400,
	                        "cityName": "辽源市"
	                  }, {
	                        "cityId": 220500,
	                        "cityName": "通化市"
	                  }, {
	                        "cityId": 220600,
	                        "cityName": "白山市"
	                  }, {
	                        "cityId": 220700,
	                        "cityName": "松原市"
	                  }, {
	                        "cityId": 220800,
	                        "cityName": "白城市"
	                  }, {
	                        "cityId": 222400,
	                        "cityName": "延边朝鲜族自治州"
	                  }]
	            }, {
	                  "provinceId": 230000,
	                  "provinceName": "黑龙江省",
	                  "child": [{
	                        "cityId": 230100,
	                        "cityName": "哈尔滨市"
	                  }, {
	                        "cityId": 230200,
	                        "cityName": "齐齐哈尔市"
	                  }, {
	                        "cityId": 230300,
	                        "cityName": "鸡西市"
	                  }, {
	                        "cityId": 230400,
	                        "cityName": "鹤岗市"
	                  }, {
	                        "cityId": 230500,
	                        "cityName": "双鸭山市"
	                  }, {
	                        "cityId": 230600,
	                        "cityName": "大庆市"
	                  }, {
	                        "cityId": 230700,
	                        "cityName": "伊春市"
	                  }, {
	                        "cityId": 230800,
	                        "cityName": "佳木斯市"
	                  }, {
	                        "cityId": 230900,
	                        "cityName": "七台河市"
	                  }, {
	                        "cityId": 231000,
	                        "cityName": "牡丹江市"
	                  }, {
	                        "cityId": 231100,
	                        "cityName": "黑河市"
	                  }, {
	                        "cityId": 231200,
	                        "cityName": "绥化市"
	                  }, {
	                        "cityId": 232700,
	                        "cityName": "大兴安岭地区"
	                  }]
	            }]
	      }, {
	            "regionId": 4,
	            "regionName": "中南区",
	            "child": [{
	                  "provinceId": 410000,
	                  "provinceName": "河南省",
	                  "child": [{
	                        "cityId": 410100,
	                        "cityName": "郑州市"
	                  }, {
	                        "cityId": 410200,
	                        "cityName": "开封市"
	                  }, {
	                        "cityId": 410300,
	                        "cityName": "洛阳市"
	                  }, {
	                        "cityId": 410400,
	                        "cityName": "平顶山市"
	                  }, {
	                        "cityId": 410500,
	                        "cityName": "安阳市"
	                  }, {
	                        "cityId": 410600,
	                        "cityName": "鹤壁市"
	                  }, {
	                        "cityId": 410700,
	                        "cityName": "新乡市"
	                  }, {
	                        "cityId": 410800,
	                        "cityName": "焦作市"
	                  }, {
	                        "cityId": 410900,
	                        "cityName": "濮阳市"
	                  }, {
	                        "cityId": 411000,
	                        "cityName": "许昌市"
	                  }, {
	                        "cityId": 411100,
	                        "cityName": "漯河市"
	                  }, {
	                        "cityId": 411200,
	                        "cityName": "三门峡市"
	                  }, {
	                        "cityId": 411300,
	                        "cityName": "南阳市"
	                  }, {
	                        "cityId": 411400,
	                        "cityName": "商丘市"
	                  }, {
	                        "cityId": 411500,
	                        "cityName": "信阳市"
	                  }, {
	                        "cityId": 411600,
	                        "cityName": "周口市"
	                  }, {
	                        "cityId": 411700,
	                        "cityName": "驻马店市"
	                  }, {
	                        "cityId": 419000,
	                        "cityName": "省直辖县级行政区划"
	                  }]
	            }, {
	                  "provinceId": 420000,
	                  "provinceName": "湖北省",
	                  "child": [{
	                        "cityId": 420100,
	                        "cityName": "武汉市"
	                  }, {
	                        "cityId": 420200,
	                        "cityName": "黄石市"
	                  }, {
	                        "cityId": 420300,
	                        "cityName": "十堰市"
	                  }, {
	                        "cityId": 420500,
	                        "cityName": "宜昌市"
	                  }, {
	                        "cityId": 420600,
	                        "cityName": "襄阳市"
	                  }, {
	                        "cityId": 420700,
	                        "cityName": "鄂州市"
	                  }, {
	                        "cityId": 420800,
	                        "cityName": "荆门市"
	                  }, {
	                        "cityId": 420900,
	                        "cityName": "孝感市"
	                  }, {
	                        "cityId": 421000,
	                        "cityName": "荆州市"
	                  }, {
	                        "cityId": 421100,
	                        "cityName": "黄冈市"
	                  }, {
	                        "cityId": 421200,
	                        "cityName": "咸宁市"
	                  }, {
	                        "cityId": 421300,
	                        "cityName": "随州市"
	                  }, {
	                        "cityId": 422800,
	                        "cityName": "恩施土家族苗族自治州"
	                  }, {
	                        "cityId": 429000,
	                        "cityName": "省直辖县级行政区划"
	                  }]
	            }, {
	                  "provinceId": 430000,
	                  "provinceName": "湖南省",
	                  "child": [{
	                        "cityId": 430100,
	                        "cityName": "长沙市"
	                  }, {
	                        "cityId": 430200,
	                        "cityName": "株洲市"
	                  }, {
	                        "cityId": 430300,
	                        "cityName": "湘潭市"
	                  }, {
	                        "cityId": 430400,
	                        "cityName": "衡阳市"
	                  }, {
	                        "cityId": 430500,
	                        "cityName": "邵阳市"
	                  }, {
	                        "cityId": 430600,
	                        "cityName": "岳阳市"
	                  }, {
	                        "cityId": 430700,
	                        "cityName": "常德市"
	                  }, {
	                        "cityId": 430800,
	                        "cityName": "张家界市"
	                  }, {
	                        "cityId": 430900,
	                        "cityName": "益阳市"
	                  }, {
	                        "cityId": 431000,
	                        "cityName": "郴州市"
	                  }, {
	                        "cityId": 431100,
	                        "cityName": "永州市"
	                  }, {
	                        "cityId": 431200,
	                        "cityName": "怀化市"
	                  }, {
	                        "cityId": 431300,
	                        "cityName": "娄底市"
	                  }, {
	                        "cityId": 433100,
	                        "cityName": "湘西土家族苗族自治州"
	                  }]
	            }, {
	                  "provinceId": 440000,
	                  "provinceName": "广东省",
	                  "child": [{
	                        "cityId": 440100,
	                        "cityName": "广州市"
	                  }, {
	                        "cityId": 440200,
	                        "cityName": "韶关市"
	                  }, {
	                        "cityId": 440300,
	                        "cityName": "深圳市"
	                  }, {
	                        "cityId": 440400,
	                        "cityName": "珠海市"
	                  }, {
	                        "cityId": 440500,
	                        "cityName": "汕头市"
	                  }, {
	                        "cityId": 440600,
	                        "cityName": "佛山市"
	                  }, {
	                        "cityId": 440700,
	                        "cityName": "江门市"
	                  }, {
	                        "cityId": 440800,
	                        "cityName": "湛江市"
	                  }, {
	                        "cityId": 440900,
	                        "cityName": "茂名市"
	                  }, {
	                        "cityId": 441200,
	                        "cityName": "肇庆市"
	                  }, {
	                        "cityId": 441300,
	                        "cityName": "惠州市"
	                  }, {
	                        "cityId": 441400,
	                        "cityName": "梅州市"
	                  }, {
	                        "cityId": 441500,
	                        "cityName": "汕尾市"
	                  }, {
	                        "cityId": 441600,
	                        "cityName": "河源市"
	                  }, {
	                        "cityId": 441700,
	                        "cityName": "阳江市"
	                  }, {
	                        "cityId": 441800,
	                        "cityName": "清远市"
	                  }, {
	                        "cityId": 441900,
	                        "cityName": "东莞市"
	                  }, {
	                        "cityId": 442000,
	                        "cityName": "中山市"
	                  }, {
	                        "cityId": 445100,
	                        "cityName": "潮州市"
	                  }, {
	                        "cityId": 445200,
	                        "cityName": "揭阳市"
	                  }, {
	                        "cityId": 445300,
	                        "cityName": "云浮市"
	                  }]
	            }, {
	                  "provinceId": 450000,
	                  "provinceName": "广西壮族自治区",
	                  "child": [{
	                        "cityId": 450100,
	                        "cityName": "南宁市"
	                  }, {
	                        "cityId": 450200,
	                        "cityName": "柳州市"
	                  }, {
	                        "cityId": 450300,
	                        "cityName": "桂林市"
	                  }, {
	                        "cityId": 450400,
	                        "cityName": "梧州市"
	                  }, {
	                        "cityId": 450500,
	                        "cityName": "北海市"
	                  }, {
	                        "cityId": 450600,
	                        "cityName": "防城港市"
	                  }, {
	                        "cityId": 450700,
	                        "cityName": "钦州市"
	                  }, {
	                        "cityId": 450800,
	                        "cityName": "贵港市"
	                  }, {
	                        "cityId": 450900,
	                        "cityName": "玉林市"
	                  }, {
	                        "cityId": 451000,
	                        "cityName": "百色市"
	                  }, {
	                        "cityId": 451100,
	                        "cityName": "贺州市"
	                  }, {
	                        "cityId": 451200,
	                        "cityName": "河池市"
	                  }, {
	                        "cityId": 451300,
	                        "cityName": "来宾市"
	                  }, {
	                        "cityId": 451400,
	                        "cityName": "崇左市"
	                  }]
	            }, {
	                  "provinceId": 460000,
	                  "provinceName": "海南省",
	                  "child": [{
	                        "cityId": 460100,
	                        "cityName": "海口市"
	                  }, {
	                        "cityId": 460200,
	                        "cityName": "三亚市"
	                  }, {
	                        "cityId": 460300,
	                        "cityName": "三沙市"
	                  }, {
	                        "cityId": 469000,
	                        "cityName": "省直辖县级行政区划"
	                  }]
	            }]
	      }, {
	            "regionId": 5,
	            "regionName": "西南区",
	            "child": [{
	                  "provinceId": 500000,
	                  "provinceName": "重庆市",
	                  "child": [{
	                        "cityId": 500100,
	                        "cityName": "重庆市"
	                  }, {
	                        "cityId": 500200,
	                        "cityName": "重庆县"
	                  }]
	            }, {
	                  "provinceId": 510000,
	                  "provinceName": "四川省",
	                  "child": [{
	                        "cityId": 510100,
	                        "cityName": "成都市"
	                  }, {
	                        "cityId": 510300,
	                        "cityName": "自贡市"
	                  }, {
	                        "cityId": 510400,
	                        "cityName": "攀枝花市"
	                  }, {
	                        "cityId": 510500,
	                        "cityName": "泸州市"
	                  }, {
	                        "cityId": 510600,
	                        "cityName": "德阳市"
	                  }, {
	                        "cityId": 510700,
	                        "cityName": "绵阳市"
	                  }, {
	                        "cityId": 510800,
	                        "cityName": "广元市"
	                  }, {
	                        "cityId": 510900,
	                        "cityName": "遂宁市"
	                  }, {
	                        "cityId": 511000,
	                        "cityName": "内江市"
	                  }, {
	                        "cityId": 511100,
	                        "cityName": "乐山市"
	                  }, {
	                        "cityId": 511300,
	                        "cityName": "南充市"
	                  }, {
	                        "cityId": 511400,
	                        "cityName": "眉山市"
	                  }, {
	                        "cityId": 511500,
	                        "cityName": "宜宾市"
	                  }, {
	                        "cityId": 511600,
	                        "cityName": "广安市"
	                  }, {
	                        "cityId": 511700,
	                        "cityName": "达州市"
	                  }, {
	                        "cityId": 511800,
	                        "cityName": "雅安市"
	                  }, {
	                        "cityId": 511900,
	                        "cityName": "巴中市"
	                  }, {
	                        "cityId": 512000,
	                        "cityName": "资阳市"
	                  }, {
	                        "cityId": 513200,
	                        "cityName": "阿坝藏族羌族自治州"
	                  }, {
	                        "cityId": 513300,
	                        "cityName": "甘孜藏族自治州"
	                  }, {
	                        "cityId": 513400,
	                        "cityName": "凉山彝族自治州"
	                  }]
	            }, {
	                  "provinceId": 520000,
	                  "provinceName": "贵州省",
	                  "child": [{
	                        "cityId": 520100,
	                        "cityName": "贵阳市"
	                  }, {
	                        "cityId": 520200,
	                        "cityName": "六盘水市"
	                  }, {
	                        "cityId": 520300,
	                        "cityName": "遵义市"
	                  }, {
	                        "cityId": 520400,
	                        "cityName": "安顺市"
	                  }, {
	                        "cityId": 520500,
	                        "cityName": "毕节市"
	                  }, {
	                        "cityId": 520600,
	                        "cityName": "铜仁市"
	                  }, {
	                        "cityId": 522300,
	                        "cityName": "黔西南布依族苗族自治州"
	                  }, {
	                        "cityId": 522600,
	                        "cityName": "黔东南苗族侗族自治州"
	                  }, {
	                        "cityId": 522700,
	                        "cityName": "黔南布依族苗族自治州"
	                  }]
	            }, {
	                  "provinceId": 530000,
	                  "provinceName": "云南省",
	                  "child": [{
	                        "cityId": 530100,
	                        "cityName": "昆明市"
	                  }, {
	                        "cityId": 530300,
	                        "cityName": "曲靖市"
	                  }, {
	                        "cityId": 530400,
	                        "cityName": "玉溪市"
	                  }, {
	                        "cityId": 530500,
	                        "cityName": "保山市"
	                  }, {
	                        "cityId": 530600,
	                        "cityName": "昭通市"
	                  }, {
	                        "cityId": 530700,
	                        "cityName": "丽江市"
	                  }, {
	                        "cityId": 530800,
	                        "cityName": "普洱市"
	                  }, {
	                        "cityId": 530900,
	                        "cityName": "临沧市"
	                  }, {
	                        "cityId": 532300,
	                        "cityName": "楚雄彝族自治州"
	                  }, {
	                        "cityId": 532500,
	                        "cityName": "红河哈尼族彝族自治州"
	                  }, {
	                        "cityId": 532600,
	                        "cityName": "文山壮族苗族自治州"
	                  }, {
	                        "cityId": 532800,
	                        "cityName": "西双版纳傣族自治州"
	                  }, {
	                        "cityId": 532900,
	                        "cityName": "大理白族自治州"
	                  }, {
	                        "cityId": 533100,
	                        "cityName": "德宏傣族景颇族自治州"
	                  }, {
	                        "cityId": 533300,
	                        "cityName": "怒江傈僳族自治州"
	                  }, {
	                        "cityId": 533400,
	                        "cityName": "迪庆藏族自治州"
	                  }]
	            }, {
	                  "provinceId": 540000,
	                  "provinceName": "西藏自治区",
	                  "child": [{
	                        "cityId": 540100,
	                        "cityName": "拉萨市"
	                  }, {
	                        "cityId": 542100,
	                        "cityName": "昌都地区"
	                  }, {
	                        "cityId": 542200,
	                        "cityName": "山南地区"
	                  }, {
	                        "cityId": 542300,
	                        "cityName": "日喀则地区"
	                  }, {
	                        "cityId": 542400,
	                        "cityName": "那曲地区"
	                  }, {
	                        "cityId": 542500,
	                        "cityName": "阿里地区"
	                  }, {
	                        "cityId": 542600,
	                        "cityName": "林芝地区"
	                  }]
	            }]
	      }, {
	            "regionId": 6,
	            "regionName": "西北区",
	            "child": [{
	                  "provinceId": 610000,
	                  "provinceName": "陕西省",
	                  "child": [{
	                        "cityId": 610100,
	                        "cityName": "西安市"
	                  }, {
	                        "cityId": 610200,
	                        "cityName": "铜川市"
	                  }, {
	                        "cityId": 610300,
	                        "cityName": "宝鸡市"
	                  }, {
	                        "cityId": 610400,
	                        "cityName": "咸阳市"
	                  }, {
	                        "cityId": 610500,
	                        "cityName": "渭南市"
	                  }, {
	                        "cityId": 610600,
	                        "cityName": "延安市"
	                  }, {
	                        "cityId": 610700,
	                        "cityName": "汉中市"
	                  }, {
	                        "cityId": 610800,
	                        "cityName": "榆林市"
	                  }, {
	                        "cityId": 610900,
	                        "cityName": "安康市"
	                  }, {
	                        "cityId": 611000,
	                        "cityName": "商洛市"
	                  }]
	            }, {
	                  "provinceId": 620000,
	                  "provinceName": "甘肃省",
	                  "child": [{
	                        "cityId": 620100,
	                        "cityName": "兰州市"
	                  }, {
	                        "cityId": 620200,
	                        "cityName": "嘉峪关市"
	                  }, {
	                        "cityId": 620400,
	                        "cityName": "白银市"
	                  }, {
	                        "cityId": 620500,
	                        "cityName": "天水市"
	                  }, {
	                        "cityId": 620600,
	                        "cityName": "武威市"
	                  }, {
	                        "cityId": 620700,
	                        "cityName": "张掖市"
	                  }, {
	                        "cityId": 620800,
	                        "cityName": "平凉市"
	                  }, {
	                        "cityId": 620900,
	                        "cityName": "酒泉市"
	                  }, {
	                        "cityId": 621000,
	                        "cityName": "庆阳市"
	                  }, {
	                        "cityId": 621100,
	                        "cityName": "定西市"
	                  }, {
	                        "cityId": 621200,
	                        "cityName": "陇南市"
	                  }, {
	                        "cityId": 622900,
	                        "cityName": "临夏回族自治州"
	                  }, {
	                        "cityId": 623000,
	                        "cityName": "甘南藏族自治州"
	                  }]
	            }, {
	                  "provinceId": 630000,
	                  "provinceName": "青海省",
	                  "child": [{
	                        "cityId": 630100,
	                        "cityName": "西宁市"
	                  }, {
	                        "cityId": 632100,
	                        "cityName": "海东地区"
	                  }, {
	                        "cityId": 632200,
	                        "cityName": "海北藏族自治州"
	                  }, {
	                        "cityId": 632300,
	                        "cityName": "黄南藏族自治州"
	                  }, {
	                        "cityId": 632500,
	                        "cityName": "海南藏族自治州"
	                  }, {
	                        "cityId": 632600,
	                        "cityName": "果洛藏族自治州"
	                  }, {
	                        "cityId": 632700,
	                        "cityName": "玉树藏族自治州"
	                  }, {
	                        "cityId": 632800,
	                        "cityName": "海西蒙古族藏族自治州"
	                  }]
	            }, {
	                  "provinceId": 640000,
	                  "provinceName": "宁夏回族自治区",
	                  "child": [{
	                        "cityId": 640100,
	                        "cityName": "银川市"
	                  }, {
	                        "cityId": 640200,
	                        "cityName": "石嘴山市"
	                  }, {
	                        "cityId": 640300,
	                        "cityName": "吴忠市"
	                  }, {
	                        "cityId": 640400,
	                        "cityName": "固原市"
	                  }, {
	                        "cityId": 640500,
	                        "cityName": "中卫市"
	                  }]
	            }, {
	                  "provinceId": 650000,
	                  "provinceName": "新疆维吾尔自治区",
	                  "child": [{
	                        "cityId": 650100,
	                        "cityName": "乌鲁木齐市"
	                  }, {
	                        "cityId": 650200,
	                        "cityName": "克拉玛依市"
	                  }, {
	                        "cityId": 652100,
	                        "cityName": "吐鲁番地区"
	                  }, {
	                        "cityId": 652200,
	                        "cityName": "哈密地区"
	                  }, {
	                        "cityId": 652300,
	                        "cityName": "昌吉回族自治州"
	                  }, {
	                        "cityId": 652700,
	                        "cityName": "博尔塔拉蒙古自治州"
	                  }, {
	                        "cityId": 652800,
	                        "cityName": "巴音郭楞蒙古自治州"
	                  }, {
	                        "cityId": 652900,
	                        "cityName": "阿克苏地区"
	                  }, {
	                        "cityId": 653000,
	                        "cityName": "克孜勒苏柯尔克孜自治州"
	                  }, {
	                        "cityId": 653100,
	                        "cityName": "喀什地区"
	                  }, {
	                        "cityId": 653200,
	                        "cityName": "和田地区"
	                  }, {
	                        "cityId": 654000,
	                        "cityName": "伊犁哈萨克自治州"
	                  }, {
	                        "cityId": 654200,
	                        "cityName": "塔城地区"
	                  }, {
	                        "cityId": 654300,
	                        "cityName": "阿勒泰地区"
	                  }, {
	                        "cityId": 659000,
	                        "cityName": "自治区直辖县级行政区划"
	                  }]
	            }]
	      }, {
	            "regionId": 7,
	            "regionName": "港澳台地区",
	            "child": [{
	                  "provinceId": 710000,
	                  "provinceName": "台湾",
	                  "child": [{
	                        "cityId": 710001,
	                        "cityName": "台湾"
	                  }]
	            }, {
	                  "provinceId": 810000,
	                  "provinceName": "香港",
	                  "child": [{
	                        "cityId": 810001,
	                        "cityName": "香港特别行政区"
	                  }]
	            }, {
	                  "provinceId": 820000,
	                  "provinceName": "澳门",
	                  "child": [{
	                        "cityId": 820001,
	                        "cityName": "澳门特别行政区"
	                  }]
	            }]
	      }]
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./city.selector.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./city.selector.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".city-selector-container .checkbox {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.city-selector-container .region-container {\n  padding: 5px 10px;\n}\n.city-selector-container .region-container:nth-child(even) {\n  background-color: #EEEEEE;\n}\n.city-selector-container .province-list .province-list-item {\n  position: relative;\n}\n.city-selector-container .province-list .province-list-item.open {\n  background-color: #fcf8e3;\n}\n.city-selector-container .province-list .city-list-container {\n  position: absolute;\n  z-index: 998;\n  width: 240px;\n  padding: 5px;\n  left: 0px;\n  background-color: #fcf8e3;\n}\n.city-selector-container .province-list .city-list-container .city-list {\n  margin: auto 0;\n}\n.city-selector-container .province-list .city-list-container .city-list .city-list-item {\n  min-width: 107px;\n}\n.city-selector-container .province-list .city-list-container .city-list-close-btn-container {\n  text-align: right;\n}\n.city-selector-container .province-list .arrow-down {\n  font-size: 12px;\n  cursor: pointer;\n}\n.city-selector-container .citySelector-btn-container {\n  text-align: center;\n  padding: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);

	module.exports = 'ui.bootstrap';


/***/ },
/* 50 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 1.3.3 - 2016-05-22
	 * License: MIT
	 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        var expandingExpr = $parse(attrs.expanding),
	            expandedExpr = $parse(attrs.expanded),
	            collapsingExpr = $parse(attrs.collapsing),
	            collapsedExpr = $parse(attrs.collapsed);

	        if (!scope.$eval(attrs.uibCollapse)) {
	          element.addClass('in')
	            .addClass('collapse')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false)
	            .css({height: 'auto'});
	        }

	        function expand() {
	          if (element.hasClass('collapse') && element.hasClass('in')) {
	            return;
	          }

	          $q.resolve(expandingExpr(scope))
	            .then(function() {
	              element.removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', true)
	                .attr('aria-hidden', false);

	              if ($animateCss) {
	                $animateCss(element, {
	                  addClass: 'in',
	                  easing: 'ease',
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).start()['finally'](expandDone);
	              } else {
	                $animate.addClass(element, 'in', {
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).then(expandDone);
	              }
	            });
	        }

	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse')
	            .css({height: 'auto'});
	          expandedExpr(scope);
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          $q.resolve(collapsingExpr(scope))
	            .then(function() {
	              element
	                // IMPORTANT: The height must be set before adding "collapsing" class.
	                // Otherwise, the browser attempts to animate from height 0 (in
	                // collapsing class) to the given height here.
	                .css({height: element[0].scrollHeight + 'px'})
	                // initially all panel collapse have the collapse class, this removal
	                // prevents the animation from jumping to collapsed state
	                .removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', false)
	                .attr('aria-hidden', true);

	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: 'in',
	                  to: {height: '0'}
	                }).start()['finally'](collapseDone);
	              } else {
	                $animate.removeClass(element, 'in', {
	                  to: {height: '0'}
	                }).then(collapseDone);
	              }
	            });
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	          collapsedExpr(scope);
	        }

	        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('uibAccordionConfig', {
	  closeOthers: true
	})

	.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function() {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function() {
	  return {
	    require: '^uibAccordion',         // We need this directive to be inside an accordion
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      panelClass: '@?',           // Ditto with panelClass
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass || 'panel-default';
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };

	      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	      scope.headingId = id + '-tab';
	      scope.panelId = id + '-panel';
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function() {
	  return {
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function() {
	  return {
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, controller) {
	      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
	        if (heading) {
	          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
	          elem.html('');
	          elem.append(heading);
	        }
	      });
	    }
	  };

	  function getHeaderSelectors() {
	      return 'uib-accordion-header,' +
	          'data-uib-accordion-header,' +
	          'x-uib-accordion-header,' +
	          'uib\\:accordion-header,' +
	          '[uib-accordion-header],' +
	          '[data-uib-accordion-header],' +
	          '[x-uib-accordion-header]';
	  }
	});

	angular.module('ui.bootstrap.alert', [])

	.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;

	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
	    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

	  if (dismissOnTimeout) {
	    $timeout(function() {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}])

	.directive('uibAlert', function() {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});

	angular.module('ui.bootstrap.buttons', [])

	.constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('uibBtnRadio', ['$parse', function($parse) {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      var uncheckableExpr = $parse(attrs.uibUncheckable);

	      element.find('input').css({display: 'none'});

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });

	      if (attrs.uibUncheckable) {
	        scope.$watch(uncheckableExpr, function(uncheckable) {
	          attrs.$set('uncheckable', uncheckable ? '' : undefined);
	        });
	      }
	    }
	  };
	}])

	.directive('uibBtnCheckbox', function() {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.carousel', [])

	.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = $scope.active,
	    currentInterval, isPlaying, bufferedTransitions = [];

	  var destroyed = false;

	  self.addSlide = function(slide, element) {
	    slides.push({
	      slide: slide,
	      element: element
	    });
	    slides.sort(function(a, b) {
	      return +a.slide.index - +b.slide.index;
	    });
	    //if this is the first slide or the slide is set to active, select it
	    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
	      if ($scope.$currentTransition) {
	        $scope.$currentTransition = null;
	      }

	      currentIndex = slide.index;
	      $scope.active = slide.index;
	      setActive(currentIndex);
	      self.select(slides[findSlideIndex(slide)]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    }
	  };

	  self.getCurrentIndex = function() {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide.index === currentIndex) {
	        return i;
	      }
	    }
	  };

	  self.next = $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'next');
	  };

	  self.prev = $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'prev');
	  };

	  self.removeSlide = function(slide) {
	    var index = findSlideIndex(slide);

	    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
	    if (bufferedIndex !== -1) {
	      bufferedTransitions.splice(bufferedIndex, 1);
	    }

	    //get the index of the slide inside the carousel
	    slides.splice(index, 1);
	    if (slides.length > 0 && currentIndex === index) {
	      if (index >= slides.length) {
	        currentIndex = slides.length - 1;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[slides.length - 1]);
	      } else {
	        currentIndex = index;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	      $scope.active = currentIndex;
	    }

	    //clean the active value when no more slide
	    if (slides.length === 0) {
	      currentIndex = null;
	      $scope.active = null;
	      clearBufferedTransitions();
	    }
	  };

	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = findSlideIndex(nextSlide.slide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide.slide.index !== currentIndex &&
	      !$scope.$currentTransition) {
	      goNext(nextSlide.slide, nextIndex, direction);
	    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
	      bufferedTransitions.push(slides[nextIndex]);
	    }
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return +slide.slide.index;
	  };

	  $scope.isActive = function(slide) {
	    return $scope.active === slide.slide.index;
	  };

	  $scope.isPrevDisabled = function() {
	    return $scope.active === 0 && $scope.noWrap();
	  };

	  $scope.isNextDisabled = function() {
	    return $scope.active === slides.length - 1 && $scope.noWrap();
	  };

	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };

	  $scope.$on('$destroy', function() {
	    destroyed = true;
	    resetTimer();
	  });

	  $scope.$watch('noTransition', function(noTransition) {
	    $animate.enabled($element, !noTransition);
	  });

	  $scope.$watch('interval', restartTimer);

	  $scope.$watchCollection('slides', resetTransition);

	  $scope.$watch('active', function(index) {
	    if (angular.isNumber(index) && currentIndex !== index) {
	      for (var i = 0; i < slides.length; i++) {
	        if (slides[i].slide.index === index) {
	          index = i;
	          break;
	        }
	      }

	      var slide = slides[index];
	      if (slide) {
	        setActive(index);
	        self.select(slides[index]);
	        currentIndex = index;
	      }
	    }
	  });

	  function clearBufferedTransitions() {
	    while (bufferedTransitions.length) {
	      bufferedTransitions.shift();
	    }
	  }

	  function getSlideByIndex(index) {
	    for (var i = 0, l = slides.length; i < l; ++i) {
	      if (slides[i].index === index) {
	        return slides[i];
	      }
	    }
	  }

	  function setActive(index) {
	    for (var i = 0; i < slides.length; i++) {
	      slides[i].slide.active = i === index;
	    }
	  }

	  function goNext(slide, index, direction) {
	    if (destroyed) {
	      return;
	    }

	    angular.extend(slide, {direction: direction});
	    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
	    if ($animate.enabled($element) && !$scope.$currentTransition &&
	      slides[index].element && self.slides.length > 1) {
	      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
	      var currentIdx = self.getCurrentIndex();

	      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
	        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      $animate.on('addClass', slides[index].element, function(element, phase) {
	        if (phase === 'close') {
	          $scope.$currentTransition = null;
	          $animate.off('addClass', element);
	          if (bufferedTransitions.length) {
	            var nextSlide = bufferedTransitions.pop().slide;
	            var nextIndex = nextSlide.index;
	            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	            clearBufferedTransitions();

	            goNext(nextSlide, nextIndex, nextDirection);
	          }
	        }
	      });
	    }

	    $scope.active = slide.index;
	    currentIndex = slide.index;
	    setActive(index);

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  function findSlideIndex(slide) {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide === slide) {
	        return i;
	      }
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	      clearBufferedTransitions();
	    }
	  }

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }
	}])

	.directive('uibCarousel', function() {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
	    },
	    scope: {
	      active: '=',
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	})

	.directive('uibSlide', function() {
	  return {
	    require: '^uibCarousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/slide.html';
	    },
	    scope: {
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });
	    }
	  };
	})

	.animation('.item', ['$animateCss',
	function($animateCss) {
	  var SLIDE_DIRECTION = 'uib-slideDirection';

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);

	angular.module('ui.bootstrap.dateparser', [])

	.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', function($log, $locale, dateFilter, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  var localeId;
	  var formatCodeToRegex;

	  this.init = function() {
	    localeId = $locale.id;

	    this.parsers = {};
	    this.formatters = {};

	    formatCodeToRegex = [
	      {
	        key: 'yyyy',
	        regex: '\\d{4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yyyy');
	        }
	      },
	      {
	        key: 'yy',
	        regex: '\\d{2}',
	        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yy');
	        }
	      },
	      {
	        key: 'y',
	        regex: '\\d{1,4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'y');
	        }
	      },
	      {
	        key: 'M!',
	        regex: '0?[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) {
	          var value = date.getMonth();
	          if (/^[0-9]$/.test(value)) {
	            return dateFilter(date, 'MM');
	          }

	          return dateFilter(date, 'M');
	        }
	      },
	      {
	        key: 'MMMM',
	        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMMM'); }
	      },
	      {
	        key: 'MMM',
	        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMM'); }
	      },
	      {
	        key: 'MM',
	        regex: '0[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'MM'); }
	      },
	      {
	        key: 'M',
	        regex: '[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'M'); }
	      },
	      {
	        key: 'd!',
	        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) {
	          var value = date.getDate();
	          if (/^[1-9]$/.test(value)) {
	            return dateFilter(date, 'dd');
	          }

	          return dateFilter(date, 'd');
	        }
	      },
	      {
	        key: 'dd',
	        regex: '[0-2][0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'dd'); }
	      },
	      {
	        key: 'd',
	        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'd'); }
	      },
	      {
	        key: 'EEEE',
	        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEEE'); }
	      },
	      {
	        key: 'EEE',
	        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEE'); }
	      },
	      {
	        key: 'HH',
	        regex: '(?:0|1)[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'HH'); }
	      },
	      {
	        key: 'hh',
	        regex: '0[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'hh'); }
	      },
	      {
	        key: 'H',
	        regex: '1?[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'H'); }
	      },
	      {
	        key: 'h',
	        regex: '[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'h'); }
	      },
	      {
	        key: 'mm',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'mm'); }
	      },
	      {
	        key: 'm',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'm'); }
	      },
	      {
	        key: 'sss',
	        regex: '[0-9][0-9][0-9]',
	        apply: function(value) { this.milliseconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'sss'); }
	      },
	      {
	        key: 'ss',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'ss'); }
	      },
	      {
	        key: 's',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 's'); }
	      },
	      {
	        key: 'a',
	        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	        apply: function(value) {
	          if (this.hours === 12) {
	            this.hours = 0;
	          }

	          if (value === 'PM') {
	            this.hours += 12;
	          }
	        },
	        formatter: function(date) { return dateFilter(date, 'a'); }
	      },
	      {
	        key: 'Z',
	        regex: '[+-]\\d{4}',
	        apply: function(value) {
	          var matches = value.match(/([+-])(\d{2})(\d{2})/),
	            sign = matches[1],
	            hours = matches[2],
	            minutes = matches[3];
	          this.hours += toInt(sign + hours);
	          this.minutes += toInt(sign + minutes);
	        },
	        formatter: function(date) {
	          return dateFilter(date, 'Z');
	        }
	      },
	      {
	        key: 'ww',
	        regex: '[0-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'ww'); }
	      },
	      {
	        key: 'w',
	        regex: '[0-9]|[1-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'w'); }
	      },
	      {
	        key: 'GGGG',
	        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
	        formatter: function(date) { return dateFilter(date, 'GGGG'); }
	      },
	      {
	        key: 'GGG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GGG'); }
	      },
	      {
	        key: 'GG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GG'); }
	      },
	      {
	        key: 'G',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'G'); }
	      }
	    ];
	  };

	  this.init();

	  function createParser(format, func) {
	    var map = [], regex = format.split('');

	    // check for literal values
	    var quoteIndex = format.indexOf('\'');
	    if (quoteIndex > -1) {
	      var inLiteral = false;
	      format = format.split('');
	      for (var i = quoteIndex; i < format.length; i++) {
	        if (inLiteral) {
	          if (format[i] === '\'') {
	            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
	              format[i+1] = '$';
	              regex[i+1] = '';
	            } else { // end of literal
	              regex[i] = '';
	              inLiteral = false;
	            }
	          }
	          format[i] = '$';
	        } else {
	          if (format[i] === '\'') { // start of literal
	            format[i] = '$';
	            regex[i] = '';
	            inLiteral = true;
	          }
	        }
	      }

	      format = format.join('');
	    }

	    angular.forEach(formatCodeToRegex, function(data) {
	      var index = format.indexOf(data.key);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({
	          index: index,
	          key: data.key,
	          apply: data[func],
	          matcher: data.regex
	        });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.filter = function(date, format) {
	    if (!angular.isDate(date) || isNaN(date) || !format) {
	      return '';
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.formatters[format]) {
	      this.formatters[format] = createParser(format, 'formatter');
	    }

	    var parser = this.formatters[format],
	      map = parser.map;

	    var _format = format;

	    return map.reduce(function(str, mapper, i) {
	      var match = _format.match(new RegExp('(.*)' + mapper.key));
	      if (match && angular.isString(match[1])) {
	        str += match[1];
	        _format = _format.replace(match[1] + mapper.key, '');
	      }

	      var endStr = i === map.length - 1 ? _format : '';

	      if (mapper.apply) {
	        return str + mapper.apply.call(null, date) + endStr;
	      }

	      return str + endStr;
	    }, '');
	  };

	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format, 'apply');
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex),
	        tzOffset = false;
	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i - 1];
	        if (mapper.matcher === 'Z') {
	          tzOffset = true;
	        }

	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
	        Date.prototype.setFullYear;
	      var timesetter = tzOffset ? Date.prototype.setUTCHours :
	        Date.prototype.setHours;

	      if (isValid(fields.year, fields.month, fields.date)) {
	        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
	          dt = new Date(baseDate);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours, fields.minutes,
	            fields.seconds, fields.milliseconds);
	        } else {
	          dt = new Date(0);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
	            fields.seconds || 0, fields.milliseconds || 0);
	        }
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if (month === 1 && date > 28) {
	      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
	    }

	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }

	    return true;
	  }

	  function toInt(str) {
	    return parseInt(str, 10);
	  }

	  this.toTimezone = toTimezone;
	  this.fromTimezone = fromTimezone;
	  this.timezoneToOffset = timezoneToOffset;
	  this.addDateMinutes = addDateMinutes;
	  this.convertTimezoneToLocal = convertTimezoneToLocal;

	  function toTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
	  }

	  function fromTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
	  }

	  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
	  function timezoneToOffset(timezone, fallback) {
	    timezone = timezone.replace(/:/g, '');
	    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
	    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
	  }

	  function addDateMinutes(date, minutes) {
	    date = new Date(date.getTime());
	    date.setMinutes(date.getMinutes() + minutes);
	    return date;
	  }

	  function convertTimezoneToLocal(date, timezone, reverse) {
	    reverse = reverse ? -1 : 1;
	    var dateTimezoneOffset = date.getTimezoneOffset();
	    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
	    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
	  }
	}]);

	// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
	// at most one element.
	angular.module('ui.bootstrap.isClass', [])
	.directive('uibIsClass', [
	         '$animate',
	function ($animate) {
	  //                    11111111          22222222
	  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
	  //                    11111111           22222222
	  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

	  var dataPerTracked = {};

	  return {
	    restrict: 'A',
	    compile: function(tElement, tAttrs) {
	      var linkedScopes = [];
	      var instances = [];
	      var expToData = {};
	      var lastActivated = null;
	      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
	      var onExp = onExpMatches[2];
	      var expsStr = onExpMatches[1];
	      var exps = expsStr.split(',');

	      return linkFn;

	      function linkFn(scope, element, attrs) {
	        linkedScopes.push(scope);
	        instances.push({
	          scope: scope,
	          element: element
	        });

	        exps.forEach(function(exp, k) {
	          addForExp(exp, scope);
	        });

	        scope.$on('$destroy', removeScope);
	      }

	      function addForExp(exp, scope) {
	        var matches = exp.match(IS_REGEXP);
	        var clazz = scope.$eval(matches[1]);
	        var compareWithExp = matches[2];
	        var data = expToData[exp];
	        if (!data) {
	          var watchFn = function(compareWithVal) {
	            var newActivated = null;
	            instances.some(function(instance) {
	              var thisVal = instance.scope.$eval(onExp);
	              if (thisVal === compareWithVal) {
	                newActivated = instance;
	                return true;
	              }
	            });
	            if (data.lastActivated !== newActivated) {
	              if (data.lastActivated) {
	                $animate.removeClass(data.lastActivated.element, clazz);
	              }
	              if (newActivated) {
	                $animate.addClass(newActivated.element, clazz);
	              }
	              data.lastActivated = newActivated;
	            }
	          };
	          expToData[exp] = data = {
	            lastActivated: null,
	            scope: scope,
	            watchFn: watchFn,
	            compareWithExp: compareWithExp,
	            watcher: scope.$watch(compareWithExp, watchFn)
	          };
	        }
	        data.watchFn(scope.$eval(compareWithExp));
	      }

	      function removeScope(e) {
	        var removedScope = e.targetScope;
	        var index = linkedScopes.indexOf(removedScope);
	        linkedScopes.splice(index, 1);
	        instances.splice(index, 1);
	        if (linkedScopes.length) {
	          var newWatchScope = linkedScopes[0];
	          angular.forEach(expToData, function(data) {
	            if (data.scope === removedScope) {
	              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
	              data.scope = newWatchScope;
	            }
	          });
	        } else {
	          expToData = {};
	        }
	      }
	    }
	  };
	}]);
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

	.value('$datepickerSuppressError', false)

	.value('$datepickerLiteralWarning', true)

	.constant('uibDatepickerConfig', {
	  datepickerMode: 'day',
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  maxDate: null,
	  maxMode: 'year',
	  minDate: null,
	  minMode: 'day',
	  ngModelOptions: {},
	  shortcutPropagation: false,
	  showWeeks: true,
	  yearColumns: 5,
	  yearRows: 4
	})

	.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
	  function($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
	      ngModelOptions = {},
	      watchListeners = [],
	      optionsUsed = !!$attrs.datepickerOptions;

	  if (!$scope.datepickerOptions) {
	    $scope.datepickerOptions = {};
	  }

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  [
	    'customClass',
	    'dateDisabled',
	    'datepickerMode',
	    'formatDay',
	    'formatDayHeader',
	    'formatDayTitle',
	    'formatMonth',
	    'formatMonthTitle',
	    'formatYear',
	    'maxDate',
	    'maxMode',
	    'minDate',
	    'minMode',
	    'showWeeks',
	    'shortcutPropagation',
	    'startingDay',
	    'yearColumns',
	    'yearRows'
	  ].forEach(function(key) {
	    switch (key) {
	      case 'customClass':
	      case 'dateDisabled':
	        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
	        break;
	      case 'datepickerMode':
	        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
	          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
	        break;
	      case 'formatDay':
	      case 'formatDayHeader':
	      case 'formatDayTitle':
	      case 'formatMonth':
	      case 'formatMonthTitle':
	      case 'formatYear':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
	          datepickerConfig[key];
	        break;
	      case 'showWeeks':
	      case 'shortcutPropagation':
	      case 'yearColumns':
	      case 'yearRows':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $scope.datepickerOptions[key] : datepickerConfig[key];
	        break;
	      case 'startingDay':
	        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
	          self.startingDay = $scope.datepickerOptions.startingDay;
	        } else if (angular.isNumber(datepickerConfig.startingDay)) {
	          self.startingDay = datepickerConfig.startingDay;
	        } else {
	          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
	        }

	        break;
	      case 'maxDate':
	      case 'minDate':
	        $scope.$watch('datepickerOptions.' + key, function(value) {
	          if (value) {
	            if (angular.isDate(value)) {
	              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
	            } else {
	              if ($datepickerLiteralWarning) {
	                $log.warn('Literal date support has been deprecated, please switch to date object usage');
	              }

	              self[key] = new Date(dateFilter(value, 'medium'));
	            }
	          } else {
	            self[key] = datepickerConfig[key] ?
	              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
	              null;
	          }

	          self.refreshView();
	        });

	        break;
	      case 'maxMode':
	      case 'minMode':
	        if ($scope.datepickerOptions[key]) {
	          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
	            self[key] = $scope[key] = angular.isDefined(value) ? value : datepickerOptions[key];
	            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
	              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
	              $scope.datepickerMode = self[key];
	              $scope.datepickerOptions.datepickerMode = self[key];
	            }
	          });
	        } else {
	          self[key] = $scope[key] = datepickerConfig[key] || null;
	        }

	        break;
	    }
	  });

	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if (angular.isDefined($attrs.ngDisabled)) {
	    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
	      $scope.disabled = disabled;
	      self.refreshView();
	    }));
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
	    if ($scope.datepickerOptions.initDate) {
	      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
	      $scope.$watch('datepickerOptions.initDate', function(initDate) {
	        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
	          self.refreshView();
	        }
	      });
	    } else {
	      self.activeDate = new Date();
	    }

	    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
	    this.activeDate = !isNaN(date) ?
	      dateParser.fromTimezone(date, ngModelOptions.timezone) :
	      dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      $scope.selectedDt = null;
	      this._refreshView();
	      if ($scope.activeDt) {
	        $scope.activeDateId = $scope.activeDt.uid;
	      }

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      ngModelCtrl.$setValidity('dateDisabled', !date ||
	        this.element && !this.isDisabled(date));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
	    var today = new Date();
	    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
	    var time = this.compare(date, today);
	    var dt = {
	      date: date,
	      label: dateParser.filter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      past: time < 0,
	      current: time === 0,
	      future: time > 0,
	      customClass: this.customClass(date) || null
	    };

	    if (model && this.compare(date, model) === 0) {
	      $scope.selectedDt = dt;
	    }

	    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
	      $scope.activeDt = dt;
	    }

	    return dt;
	  };

	  this.isDisabled = function(date) {
	    return $scope.disabled ||
	      this.minDate && this.compare(date, this.minDate) < 0 ||
	      this.maxDate && this.compare(date, this.maxDate) > 0 ||
	      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

	      $scope.$emit('uib:datepicker.mode');
	    }

	    $scope.$broadcast('uib:datepicker.focus');
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
	      $scope.datepickerMode === self.minMode && direction === -1) {
	      return;
	    }

	    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

	    $scope.$emit('uib:datepicker.mode');
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };

	  $scope.$on('$destroy', function() {
	    //Clear all watch listeners on destroy
	    while (watchListeners.length) {
	      watchListeners.shift()();
	    }
	  });

	  function setMode(mode) {
	    $scope.datepickerMode = mode;
	    $scope.datepickerOptions.datepickerMode = mode;
	  }
	}])

	.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return month === 1 && year % 4 === 0 &&
	      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
	  }

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };

	  this.getDates = function(startDate, n) {
	    var dates = new Array(n), current = new Date(startDate), i = 0, date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };

	  this._refreshView = function() {
	    var year = this.activeDate.getFullYear(),
	      month = this.activeDate.getMonth(),
	      firstDayOfMonth = new Date(this.activeDate);

	    firstDayOfMonth.setFullYear(year, month, 1);

	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	      numDisplayedFromPreviousMonth = difference > 0 ?
	        7 - difference : - difference,
	      firstDate = new Date(firstDayOfMonth);

	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }

	    // 42 is the number of days on a six-week calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i ++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }

	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);

	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(
	          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getDate();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 7;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}])

	.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };

	  this._refreshView = function() {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;

	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getMonth();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 3;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}])

	.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var columns, range;
	  this.element = $element;

	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }

	  this.yearpickerInit = function() {
	    columns = this.yearColumns;
	    range = this.yearRows * columns;
	    this.step = { years: range };
	  };

	  this._refreshView = function() {
	    var years = new Array(range), date;

	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, columns);
	    scope.columns = columns;
	  };

	  this.compare = function(date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getFullYear();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - columns;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + columns;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? - 1 : 1) * range;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}])

	.directive('uibDatepicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerOptions: '=?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('uibDaypicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/day.html';
	    },
	    require: ['^uibDatepicker', 'uibDaypicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        daypickerCtrl = ctrls[1];

	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibMonthpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/month.html';
	    },
	    require: ['^uibDatepicker', 'uibMonthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        monthpickerCtrl = ctrls[1];

	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibYearpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/year.html';
	    },
	    require: ['^uibDatepicker', 'uibYearpicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();

	      ctrl.refreshView();
	    }
	  };
	});

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods for working with the DOM.
	 * It is meant to be used where we need to absolute-position elements in
	 * relation to another element (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
	    /**
	     * Used by scrollbarWidth() function to cache scrollbar's width.
	     * Do not access this variable directly, use scrollbarWidth() instead.
	     */
	    var SCROLLBAR_WIDTH;
	    /**
	     * scrollbar on body and html element in IE and Edge overlay
	     * content and should be considered 0 width.
	     */
	    var BODY_SCROLLBAR_WIDTH;
	    var OVERFLOW_REGEX = {
	      normal: /(auto|scroll)/,
	      hidden: /(auto|scroll|hidden)/
	    };
	    var PLACEMENT_REGEX = {
	      auto: /\s?auto?\s?/i,
	      primary: /^(top|bottom|left|right)$/,
	      secondary: /^(top|bottom|left|right|center)$/,
	      vertical: /^(top|bottom)$/
	    };
	    var BODY_REGEX = /(HTML|BODY)/;

	    return {

	      /**
	       * Provides a raw DOM element from a jQuery/jQLite element.
	       *
	       * @param {element} elem - The element to convert.
	       *
	       * @returns {element} A HTML element.
	       */
	      getRawNode: function(elem) {
	        return elem.nodeName ? elem : elem[0] || elem;
	      },

	      /**
	       * Provides a parsed number for a style property.  Strips
	       * units and casts invalid numbers to 0.
	       *
	       * @param {string} value - The style value to parse.
	       *
	       * @returns {number} A valid number.
	       */
	      parseStyle: function(value) {
	        value = parseFloat(value);
	        return isFinite(value) ? value : 0;
	      },

	      /**
	       * Provides the closest positioned ancestor.
	       *
	       * @param {element} element - The element to get the offest parent for.
	       *
	       * @returns {element} The closest positioned ancestor.
	       */
	      offsetParent: function(elem) {
	        elem = this.getRawNode(elem);

	        var offsetParent = elem.offsetParent || $document[0].documentElement;

	        function isStaticPositioned(el) {
	          return ($window.getComputedStyle(el).position || 'static') === 'static';
	        }

	        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
	          offsetParent = offsetParent.offsetParent;
	        }

	        return offsetParent || $document[0].documentElement;
	      },

	      /**
	       * Provides the scrollbar width, concept from TWBS measureScrollbar()
	       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
	       * In IE and Edge, scollbar on body and html element overlay and should
	       * return a width of 0.
	       *
	       * @returns {number} The width of the browser scollbar.
	       */
	      scrollbarWidth: function(isBody) {
	        if (isBody) {
	          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
	            var bodyElem = $document.find('body');
	            bodyElem.addClass('uib-position-body-scrollbar-measure');
	            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
	            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
	            bodyElem.removeClass('uib-position-body-scrollbar-measure');
	          }
	          return BODY_SCROLLBAR_WIDTH;
	        }

	        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
	          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
	          $document.find('body').append(scrollElem);
	          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
	          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
	          scrollElem.remove();
	        }

	        return SCROLLBAR_WIDTH;
	      },

	      /**
	       * Provides the padding required on an element to replace the scrollbar.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
	       *     <li>**widthOverflow**: whether the the width is overflowing</li>
	       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
	       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
	       *     <li>**heightOverflow**: whether the the height is overflowing</li>
	       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
	       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
	       *   </ul>
	       */
	      scrollbarPadding: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemStyle = $window.getComputedStyle(elem);
	        var paddingRight = this.parseStyle(elemStyle.paddingRight);
	        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
	        var scrollParent = this.scrollParent(elem, false, true);
	        var scrollbarWidth = this.scrollbarWidth(scrollParent, BODY_REGEX.test(scrollParent.tagName));

	        return {
	          scrollbarWidth: scrollbarWidth,
	          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
	          right: paddingRight + scrollbarWidth,
	          originalRight: paddingRight,
	          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
	          bottom: paddingBottom + scrollbarWidth,
	          originalBottom: paddingBottom
	         };
	      },

	      /**
	       * Checks to see if the element is scrollable.
	       *
	       * @param {element} elem - The element to check.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       *
	       * @returns {boolean} Whether the element is scrollable.
	       */
	      isScrollable: function(elem, includeHidden) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var elemStyle = $window.getComputedStyle(elem);
	        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
	      },

	      /**
	       * Provides the closest scrollable ancestor.
	       * A port of the jQuery UI scrollParent method:
	       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
	       *
	       * @param {element} elem - The element to find the scroll parent of.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       * @param {boolean=} [includeSelf=false] - Should the element being passed be
	       * included in the scrollable llokup.
	       *
	       * @returns {element} A HTML element.
	       */
	      scrollParent: function(elem, includeHidden, includeSelf) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var documentEl = $document[0].documentElement;
	        var elemStyle = $window.getComputedStyle(elem);
	        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
	          return elem;
	        }
	        var excludeStatic = elemStyle.position === 'absolute';
	        var scrollParent = elem.parentElement || documentEl;

	        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
	          return documentEl;
	        }

	        while (scrollParent.parentElement && scrollParent !== documentEl) {
	          var spStyle = $window.getComputedStyle(scrollParent);
	          if (excludeStatic && spStyle.position !== 'static') {
	            excludeStatic = false;
	          }

	          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
	            break;
	          }
	          scrollParent = scrollParent.parentElement;
	        }

	        return scrollParent;
	      },

	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/ - distance to closest positioned
	       * ancestor.  Does not account for margins by default like jQuery position.
	       *
	       * @param {element} elem - The element to caclulate the position on.
	       * @param {boolean=} [includeMargins=false] - Should margins be accounted
	       * for, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of offset parent</li>
	       *     <li>**left**: distance to left edge of offset parent</li>
	       *   </ul>
	       */
	      position: function(elem, includeMagins) {
	        elem = this.getRawNode(elem);

	        var elemOffset = this.offset(elem);
	        if (includeMagins) {
	          var elemStyle = $window.getComputedStyle(elem);
	          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
	          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
	        }
	        var parent = this.offsetParent(elem);
	        var parentOffset = {top: 0, left: 0};

	        if (parent !== $document[0].documentElement) {
	          parentOffset = this.offset(parent);
	          parentOffset.top += parent.clientTop - parent.scrollTop;
	          parentOffset.left += parent.clientLeft - parent.scrollLeft;
	        }

	        return {
	          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
	          top: Math.round(elemOffset.top - parentOffset.top),
	          left: Math.round(elemOffset.left - parentOffset.left)
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/ - distance to viewport.  Does
	       * not account for borders, margins, or padding on the body
	       * element.
	       *
	       * @param {element} elem - The element to calculate the offset on.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of viewport</li>
	       *     <li>**right**: distance to bottom edge of viewport</li>
	       *   </ul>
	       */
	      offset: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemBCR = elem.getBoundingClientRect();
	        return {
	          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
	          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
	          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
	        };
	      },

	      /**
	       * Provides offset distance to the closest scrollable ancestor
	       * or viewport.  Accounts for border and scrollbar width.
	       *
	       * Right and bottom dimensions represent the distance to the
	       * respective edge of the viewport element.  If the element
	       * edge extends beyond the viewport, a negative value will be
	       * reported.
	       *
	       * @param {element} elem - The element to get the viewport offset for.
	       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
	       * of the first scrollable element, default is false.
	       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
	       * be accounted for, default is true.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: distance to the top content edge of viewport element</li>
	       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
	       *     <li>**left**: distance to the left content edge of viewport element</li>
	       *     <li>**right**: distance to the right content edge of viewport element</li>
	       *   </ul>
	       */
	      viewportOffset: function(elem, useDocument, includePadding) {
	        elem = this.getRawNode(elem);
	        includePadding = includePadding !== false ? true : false;

	        var elemBCR = elem.getBoundingClientRect();
	        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

	        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
	        var offsetParentBCR = offsetParent.getBoundingClientRect();

	        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
	        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
	        if (offsetParent === $document[0].documentElement) {
	          offsetBCR.top += $window.pageYOffset;
	          offsetBCR.left += $window.pageXOffset;
	        }
	        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
	        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

	        if (includePadding) {
	          var offsetParentStyle = $window.getComputedStyle(offsetParent);
	          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
	          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
	          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
	          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
	        }

	        return {
	          top: Math.round(elemBCR.top - offsetBCR.top),
	          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
	          left: Math.round(elemBCR.left - offsetBCR.left),
	          right: Math.round(offsetBCR.right - elemBCR.right)
	        };
	      },

	      /**
	       * Provides an array of placement values parsed from a placement string.
	       * Along with the 'auto' indicator, supported placement strings are:
	       *   <ul>
	       *     <li>top: element on top, horizontally centered on host element.</li>
	       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
	       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
	       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
	       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
	       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
	       *     <li>left: element on left, vertically centered on host element.</li>
	       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
	       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
	       *     <li>right: element on right, vertically centered on host element.</li>
	       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
	       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
	       *   </ul>
	       * A placement string with an 'auto' indicator is expected to be
	       * space separated from the placement, i.e: 'auto bottom-left'  If
	       * the primary and secondary placement values do not match 'top,
	       * bottom, left, right' then 'top' will be the primary placement and
	       * 'center' will be the secondary placement.  If 'auto' is passed, true
	       * will be returned as the 3rd value of the array.
	       *
	       * @param {string} placement - The placement string to parse.
	       *
	       * @returns {array} An array with the following values
	       * <ul>
	       *   <li>**[0]**: The primary placement.</li>
	       *   <li>**[1]**: The secondary placement.</li>
	       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
	       * </ul>
	       */
	      parsePlacement: function(placement) {
	        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
	        if (autoPlace) {
	          placement = placement.replace(PLACEMENT_REGEX.auto, '');
	        }

	        placement = placement.split('-');

	        placement[0] = placement[0] || 'top';
	        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
	          placement[0] = 'top';
	        }

	        placement[1] = placement[1] || 'center';
	        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
	          placement[1] = 'center';
	        }

	        if (autoPlace) {
	          placement[2] = true;
	        } else {
	          placement[2] = false;
	        }

	        return placement;
	      },

	      /**
	       * Provides coordinates for an element to be positioned relative to
	       * another element.  Passing 'auto' as part of the placement parameter
	       * will enable smart placement - where the element fits. i.e:
	       * 'auto left-top' will check to see if there is enough space to the left
	       * of the hostElem to fit the targetElem, if not place right (same for secondary
	       * top placement).  Available space is calculated using the viewportOffset
	       * function.
	       *
	       * @param {element} hostElem - The element to position against.
	       * @param {element} targetElem - The element to position.
	       * @param {string=} [placement=top] - The placement for the targetElem,
	       *   default is 'top'. 'center' is assumed as secondary placement for
	       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
	       *   <ul>
	       *     <li>top</li>
	       *     <li>top-right</li>
	       *     <li>top-left</li>
	       *     <li>bottom</li>
	       *     <li>bottom-left</li>
	       *     <li>bottom-right</li>
	       *     <li>left</li>
	       *     <li>left-top</li>
	       *     <li>left-bottom</li>
	       *     <li>right</li>
	       *     <li>right-top</li>
	       *     <li>right-bottom</li>
	       *   </ul>
	       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
	       *   be calculated from the body element, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: Value for targetElem top.</li>
	       *     <li>**left**: Value for targetElem left.</li>
	       *     <li>**placement**: The resolved placement.</li>
	       *   </ul>
	       */
	      positionElements: function(hostElem, targetElem, placement, appendToBody) {
	        hostElem = this.getRawNode(hostElem);
	        targetElem = this.getRawNode(targetElem);

	        // need to read from prop to support tests.
	        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
	        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

	        placement = this.parsePlacement(placement);

	        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
	        var targetElemPos = {top: 0, left: 0, placement: ''};

	        if (placement[2]) {
	          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

	          var targetElemStyle = $window.getComputedStyle(targetElem);
	          var adjustedSize = {
	            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
	            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
	          };

	          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
	                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
	                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
	                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
	                         placement[0];

	          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
	                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
	                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
	                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
	                         placement[1];

	          if (placement[1] === 'center') {
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
	              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
	                placement[1] = 'left';
	              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
	                placement[1] = 'right';
	              }
	            } else {
	              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
	              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
	                placement[1] = 'top';
	              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
	                placement[1] = 'bottom';
	              }
	            }
	          }
	        }

	        switch (placement[0]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top - targetHeight;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left - targetWidth;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width;
	            break;
	        }

	        switch (placement[1]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
	            break;
	          case 'center':
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
	            } else {
	              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
	            }
	            break;
	        }

	        targetElemPos.top = Math.round(targetElemPos.top);
	        targetElemPos.left = Math.round(targetElemPos.left);
	        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

	        return targetElemPos;
	      },

	      /**
	      * Provides a way for positioning tooltip & dropdown
	      * arrows when using placement options beyond the standard
	      * left, right, top, or bottom.
	      *
	      * @param {element} elem - The tooltip/dropdown element.
	      * @param {string} placement - The placement for the elem.
	      */
	      positionArrow: function(elem, placement) {
	        elem = this.getRawNode(elem);

	        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
	        if (!innerElem) {
	          return;
	        }

	        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

	        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
	        if (!arrowElem) {
	          return;
	        }

	        var arrowCss = {
	          top: '',
	          bottom: '',
	          left: '',
	          right: ''
	        };

	        placement = this.parsePlacement(placement);
	        if (placement[1] === 'center') {
	          // no adjustment necessary - just reset styles
	          angular.element(arrowElem).css(arrowCss);
	          return;
	        }

	        var borderProp = 'border-' + placement[0] + '-width';
	        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

	        var borderRadiusProp = 'border-';
	        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	          borderRadiusProp += placement[0] + '-' + placement[1];
	        } else {
	          borderRadiusProp += placement[1] + '-' + placement[0];
	        }
	        borderRadiusProp += '-radius';
	        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

	        switch (placement[0]) {
	          case 'top':
	            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'bottom':
	            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'left':
	            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'right':
	            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
	            break;
	        }

	        arrowCss[placement[1]] = borderRadius;

	        angular.element(arrowElem).css(arrowCss);
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

	.value('$datepickerPopupLiteralWarning', true)

	.constant('uibDatepickerPopupConfig', {
	  altInputFormats: [],
	  appendToBody: false,
	  clearText: 'Clear',
	  closeOnDateSelection: true,
	  closeText: 'Done',
	  currentText: 'Today',
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
	  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  onOpenFocus: true,
	  showButtonBar: true,
	  placement: 'auto bottom-left'
	})

	.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
	function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
	  var cache = {},
	    isHtml5DateInput = false;
	  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
	    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
	    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [],
	    timezone;

	  this.init = function(_ngModel_) {
	    ngModel = _ngModel_;
	    ngModelOptions = _ngModel_.$options;
	    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
	      $scope.$parent.$eval($attrs.closeOnDateSelection) :
	      datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
	      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
	      datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
	      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
	      $attrs.datepickerPopupTemplateUrl :
	      datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
	      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
	    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
	      $scope.$parent.$eval($attrs.altInputFormats) :
	      datepickerPopupConfig.altInputFormats;

	    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
	      $scope.$parent.$eval($attrs.showButtonBar) :
	      datepickerPopupConfig.showButtonBar;

	    if (datepickerPopupConfig.html5Types[$attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
	        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	        // Invalidate the $modelValue to ensure that formatters re-run
	        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	        if (newDateFormat !== dateFormat) {
	          dateFormat = newDateFormat;
	          ngModel.$modelValue = null;

	          if (!dateFormat) {
	            throw new Error('uibDatepickerPopup must have a date format specified.');
	          }
	        }
	      });
	    }

	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }

	    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }

	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    if (ngModelOptions) {
	      timezone = ngModelOptions.timezone;
	      $scope.ngModelOptions = angular.copy(ngModelOptions);
	      $scope.ngModelOptions.timezone = null;
	      if ($scope.ngModelOptions.updateOnDefault === true) {
	        $scope.ngModelOptions.updateOn = $scope.ngModelOptions.updateOn ?
	          $scope.ngModelOptions.updateOn + ' default' : 'default';
	      }

	      popupEl.attr('ng-model-options', 'ngModelOptions');
	    } else {
	      timezone = null;
	    }

	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });

	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);

	    if (!$scope.datepickerOptions) {
	      $scope.datepickerOptions = {};
	    }

	    if (isHtml5DateInput) {
	      if ($attrs.type === 'month') {
	        $scope.datepickerOptions.datepickerMode = 'month';
	        $scope.datepickerOptions.minMode = 'month';
	      }
	    }

	    datepickerEl.attr('datepicker-options', 'datepickerOptions');

	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function(value) {
	        if (ngModel.$isEmpty(value)) {
	          $scope.date = value;
	          return value;
	        }

	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }

	        $scope.date = dateParser.fromTimezone(value, timezone);

	        return dateParser.filter($scope.date, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function(value) {
	        $scope.date = dateParser.fromTimezone(value, timezone);
	        return value;
	      });
	    }

	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function() {
	      $scope.date = parseDateString(ngModel.$viewValue);
	    });

	    $element.on('keydown', inputKeydownBind);

	    $popup = $compile(popupEl)($scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else {
	      $element.after($popup);
	    }

	    $scope.$on('$destroy', function() {
	      if ($scope.isOpen === true) {
	        if (!$rootScope.$$phase) {
	          $scope.$apply(function() {
	            $scope.isOpen = false;
	          });
	        }
	      }

	      $popup.remove();
	      $element.off('keydown', inputKeydownBind);
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);

	      //Clear all watch listeners on destroy
	      while (watchListeners.length) {
	        watchListeners.shift()();
	      }
	    });
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };

	  $scope.isDisabled = function(date) {
	    if (date === 'today') {
	      date = dateParser.fromTimezone(new Date(), timezone);
	    }

	    var dates = {};
	    angular.forEach(['minDate', 'maxDate'], function(key) {
	      if (!$scope.datepickerOptions[key]) {
	        dates[key] = null;
	      } else if (angular.isDate($scope.datepickerOptions[key])) {
	        dates[key] = dateParser.fromTimezone(new Date($scope.datepickerOptions[key]), timezone);
	      } else {
	        if ($datepickerPopupLiteralWarning) {
	          $log.warn('Literal date support has been deprecated, please switch to date object usage');
	        }

	        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
	      }
	    });

	    return $scope.datepickerOptions &&
	      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
	      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
	  };

	  $scope.compare = function(date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	  };

	  // Inner change
	  $scope.dateSelection = function(dt) {
	    if (angular.isDefined(dt)) {
	      $scope.date = dt;
	    }
	    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    $element.val(date);
	    ngModel.$setViewValue(date);

	    if (closeOnDateSelection) {
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.keydown = function(evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.select = function(date, evt) {
	    evt.stopPropagation();

	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate($scope.date)) {
	        date = new Date($scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    $scope.dateSelection(date);
	  };

	  $scope.close = function(evt) {
	    evt.stopPropagation();

	    $scope.isOpen = false;
	    $element[0].focus();
	  };

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if ($attrs.ngDisabled) {
	    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
	      $scope.disabled = disabled;
	    }));
	  }

	  $scope.$watch('isOpen', function(value) {
	    if (value) {
	      if (!$scope.disabled) {
	        $timeout(function() {
	          positionPopup();

	          if (onOpenFocus) {
	            $scope.$broadcast('uib:datepicker.focus');
	          }

	          $document.on('click', documentClickBind);

	          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	          if (appendToBody || $position.parsePlacement(placement)[2]) {
	            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
	            if (scrollParentEl) {
	              scrollParentEl.on('scroll', positionPopup);
	            }
	          } else {
	            scrollParentEl = null;
	          }

	          angular.element($window).on('resize', positionPopup);
	        }, 0, false);
	      } else {
	        $scope.isOpen = false;
	      }
	    } else {
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);
	    }
	  });

	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	  }

	  function parseDateString(viewValue) {
	    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
	    if (isNaN(date)) {
	      for (var i = 0; i < altInputFormats.length; i++) {
	        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
	        if (!isNaN(date)) {
	          return date;
	        }
	      }
	    }
	    return date;
	  }

	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }

	    if (!viewValue) {
	      return null;
	    }

	    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    }

	    if (angular.isString(viewValue)) {
	      var date = parseDateString(viewValue);
	      if (!isNaN(date)) {
	        return dateParser.toTimezone(date, timezone);
	      }
	    }

	    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
	  }

	  function validator(modelValue, viewValue) {
	    var value = modelValue || viewValue;

	    if (!$attrs.ngRequired && !value) {
	      return true;
	    }

	    if (angular.isNumber(value)) {
	      value = new Date(value);
	    }

	    if (!value) {
	      return true;
	    }

	    if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    }

	    if (angular.isString(value)) {
	      return !isNaN(parseDateString(viewValue));
	    }

	    return false;
	  }

	  function documentClickBind(event) {
	    if (!$scope.isOpen && $scope.disabled) {
	      return;
	    }

	    var popup = $popup[0];
	    var dpContainsTarget = $element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	    }
	  }

	  function inputKeydownBind(evt) {
	    if (evt.which === 27 && $scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	      $element[0].focus();
	    } else if (evt.which === 40 && !$scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = true;
	      });
	    }
	  }

	  function positionPopup() {
	    if ($scope.isOpen) {
	      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
	      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	      var position = $position.positionElements($element, dpElement, placement, appendToBody);
	      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
	      if (dpElement.hasClass('uib-position-measure')) {
	        dpElement.removeClass('uib-position-measure');
	      }
	    }
	  }

	  $scope.$on('uib:datepicker.mode', function() {
	    $timeout(positionPopup, 0, false);
	  });
	}])

	.directive('uibDatepickerPopup', function() {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      datepickerOptions: '=?',
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];

	      ctrl.init(ngModel);
	    }
	  };
	})

	.directive('uibDatepickerPopupWrap', function() {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
	    }
	  };
	});

	angular.module('ui.bootstrap.debounce', [])
	/**
	 * A helper, internal service that debounces a function
	 */
	  .factory('$$debounce', ['$timeout', function($timeout) {
	    return function(callback, debounceTime) {
	      var timeoutPromise;

	      return function() {
	        var self = this;
	        var args = Array.prototype.slice.call(arguments);
	        if (timeoutPromise) {
	          $timeout.cancel(timeoutPromise);
	        }

	        timeoutPromise = $timeout(function() {
	          callback.apply(self, args);
	        }, debounceTime);
	      };
	    };
	  }]);

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('uibDropdownConfig', {
	  appendToOpenClass: 'uib-dropdown-open',
	  openClass: 'open'
	})

	.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function(dropdownScope, element) {
	    if (!openScope) {
	      $document.on('click', closeDropdown);
	      element.on('keydown', keybindFilter);
	    }

	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function(dropdownScope, element) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.off('click', closeDropdown);
	      element.off('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if (evt && openScope.getAutoClose() === 'disabled') { return; }

	    if (evt && evt.which === 3) { return; }

	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    appendToOpenClass = dropdownConfig.appendToOpenClass,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    appendTo = null,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');

	  $element.addClass('dropdown');

	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    if (angular.isDefined($attrs.dropdownAppendTo)) {
	      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
	      if (appendToEl) {
	        appendTo = angular.element(appendToEl);
	      }
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);

	    if (appendToBody && !appendTo) {
	      appendTo = body;
	    }

	    if (appendTo && self.dropdownMenu) {
	      appendTo.append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen(scope, scope.isOpen);
	    }

	    return scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return $element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      angular.element(self.dropdownMenu).find('a') :
	      $element.find('ul').eq(0).find('a');

	    switch (keyCode) {
	      case 40: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = self.selectedOption === elems.length - 1 ?
	            self.selectedOption :
	            self.selectedOption + 1;
	        }
	        break;
	      }
	      case 38: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendTo && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
	        css,
	        rightalign,
	        scrollbarWidth;

	      css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        scrollbarWidth = $position.scrollbarWidth(true);
	        css.right = window.innerWidth - scrollbarWidth -
	          (pos.left + $element.prop('offsetWidth')) + 'px';
	      }

	      // Need to adjust our positioning to be relative to the appendTo container
	      // if it's not the body element
	      if (!appendToBody) {
	        var appendOffset = $position.offset(appendTo);

	        css.top = pos.top - appendOffset.top + 'px';

	        if (!rightalign) {
	          css.left = pos.left - appendOffset.left + 'px';
	        } else {
	          css.right = window.innerWidth -
	            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
	        }
	      }

	      self.dropdownMenu.css(css);
	    }

	    var openContainer = appendTo ? appendTo : $element;
	    var hasOpenClass = openContainer.hasClass(appendTo ? appendToOpenClass : openClass);

	    if (hasOpenClass === !isOpen) {
	      $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
	        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	          toggleInvoker($scope, { open: !!isOpen });
	        }
	      });
	    }

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      uibDropdownService.open(scope, $element);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      uibDropdownService.close(scope, $element);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });
	}])

	.directive('uibDropdown', function() {
	  return {
	    controller: 'UibDropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	})

	.directive('uibDropdownMenu', function() {
	  return {
	    restrict: 'A',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }

	      element.addClass('dropdown-menu');

	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }

	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('uibDropdownToggle', function() {
	  return {
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];

	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  });
	angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};

	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }

	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];

	            if (!values) {
	              return;
	            }

	            var idx = values.indexOf(value);

	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }

	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })

	/**
	 * Pluggable resolve mechanism for the modal resolve resolution
	 * Supports UI Router's $resolve service
	 */
	  .provider('$uibResolve', function() {
	    var resolve = this;
	    this.resolver = null;

	    this.setResolver = function(resolver) {
	      this.resolver = resolver;
	    };

	    this.$get = ['$injector', '$q', function($injector, $q) {
	      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
	      return {
	        resolve: function(invocables, locals, parent, self) {
	          if (resolver) {
	            return resolver.resolve(invocables, locals, parent, self);
	          }

	          var promises = [];

	          angular.forEach(invocables, function(value) {
	            if (angular.isFunction(value) || angular.isArray(value)) {
	              promises.push($q.resolve($injector.invoke(value)));
	            } else if (angular.isString(value)) {
	              promises.push($q.resolve($injector.get(value)));
	            } else {
	              promises.push($q.resolve(value));
	            }
	          });

	          return $q.all(promises).then(function(resolves) {
	            var resolveObj = {};
	            var resolveIter = 0;
	            angular.forEach(invocables, function(value, key) {
	              resolveObj[key] = resolves[resolveIter++];
	            });

	            return resolveObj;
	          });
	        }
	      };
	    }];
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
	  function($animate, $injector, $modalStack) {
	    return {
	      replace: true,
	      templateUrl: 'uib/template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        $animate.addClass(element, attrs.modalInClass);

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if (scope.modalOptions.animation) {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          } else {
	            done();
	          }
	        });
	      }
	    }
	  }])

	  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
	  function($modalStack, $q, $animateCss, $document) {
	    return {
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'uib/template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        element.addClass(attrs.windowTopClass || '');
	        scope.size = attrs.size;

	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop &&
	            modal.value.backdrop !== 'static' &&
	            evt.target === evt.currentTarget) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // moved from template to fix issue #2280
	        element.on('click', scope.close);

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value === 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;

	          if (attrs.modalInClass) {
	            animationPromise = $animateCss(element, {
	              addClass: attrs.modalInClass
	            }).start();

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              $animateCss(element, {
	                removeClass: attrs.modalInClass
	              }).start().then(done);
	            });
	          }


	          $q.when(animationPromise).then(function() {
	            // Notify {@link $modalStack} that modal is rendered.
	            var modal = $modalStack.getTop();
	            if (modal) {
	              $modalStack.modalRendered(modal.key);
	            }

	            /**
	             * If something within the freshly-opened modal already has focus (perhaps via a
	             * directive that causes focus). then no need to try and focus anything.
	             */
	            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
	              var inputWithAutofocus = element[0].querySelector('[autofocus]');
	              /**
	               * Auto-focusing of a freshly-opened modal element causes any child elements
	               * with the autofocus attribute to lose focus. This is an issue on touch
	               * based devices which will show and then hide the onscreen keyboard.
	               * Attempts to refocus the autofocus element via JavaScript will not reopen
	               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	               * the modal element if the modal does not contain an autofocus element.
	               */
	              if (inputWithAutofocus) {
	                inputWithAutofocus.focus();
	              } else {
	                element[0].focus();
	              }
	            }
	          });
	        });
	      }
	    };
	  }])

	  .directive('uibModalAnimationClass', function() {
	    return {
	      compile: function(tElement, tAttrs) {
	        if (tAttrs.modalAnimation) {
	          tElement.addClass(tAttrs.uibModalAnimationClass);
	        }
	      }
	    };
	  })

	  .directive('uibModalTransclude', function() {
	    return {
	      link: function(scope, element, attrs, controller, transclude) {
	        transclude(scope.$parent, function(clone) {
	          element.empty();
	          element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
	    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
	    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };
	      var topModalIndex = 0;
	      var previousTopOpenedModal = null;

	      //Modal focus behavior
	      var tabableSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';
	      var scrollbarPadding;

	      function isVisible(element) {
	        return !!(element.offsetWidth ||
	          element.offsetHeight ||
	          element.getClientRects().length);
	      }

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }

	        // If any backdrop exist, ensure that it's index is always
	        // right below the top modal
	        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
	          topBackdropIndex = topModalIndex;
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var modalWindow = openedWindows.get(modalInstance).value;
	        var appendToElement = modalWindow.appendTo;

	        //clean up the stack
	        openedWindows.remove(modalInstance);
	        previousTopOpenedModal = openedWindows.top();
	        if (previousTopOpenedModal) {
	          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
	        }

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
	          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
	          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	            if (scrollbarPadding.originalRight) {
	              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
	            } else {
	              appendToElement.css({paddingRight: ''});
	            }
	            scrollbarPadding = null;
	          }
	          toggleTopWindowClass(true);
	        }, modalWindow.closedDeferred);
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else if (appendToElement.focus) {
	          appendToElement.focus();
	        }
	      }

	      // Add or remove "windowTopClass" from the top window in the stack
	      function toggleTopWindowClass(toggleSwitch) {
	        var modalWindow;

	        if (openedWindows.length() > 0) {
	          modalWindow = openedWindows.top().value;
	          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
	        }
	      }

	      function checkRemoveBackdrop() {
	        //remove backdrop if no longer needed
	        if (backdropDomEl && backdropIndex() === -1) {
	          var backdropScopeRef = backdropScope;
	          removeAfterAnimate(backdropDomEl, backdropScope, function() {
	            backdropScopeRef = null;
	          });
	          backdropDomEl = undefined;
	          backdropScope = undefined;
	        }
	      }

	      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          $animate.leave(domEl).then(function() {
	            domEl.remove();
	            if (closedDeferred) {
	              closedDeferred.resolve();
	            }
	          });

	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.on('keydown', keydownListener);

	      $rootScope.$on('$destroy', function() {
	        $document.off('keydown', keydownListener);
	      });

	      function keydownListener(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal) {
	          switch (evt.which) {
	            case 27: {
	              if (modal.value.keyboard) {
	                evt.preventDefault();
	                $rootScope.$apply(function() {
	                  $modalStack.dismiss(modal.key, 'escape key press');
	                });
	              }
	              break;
	            }
	            case 9: {
	              var list = $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
	                  focusChanged = $modalStack.focusLastFocusableElement(list);
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt, list)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement(list);
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }

	              break;
	            }
	          }
	        }
	      }

	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

	        toggleTopWindowClass(false);

	        // Store the current top first, to determine what index we ought to use
	        // for the current top modal
	        previousTopOpenedModal = openedWindows.top();

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          closedDeferred: modal.closedDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass,
	          windowTopClass: modal.windowTopClass,
	          animation: modal.animation,
	          appendTo: modal.appendTo
	        });

	        openedClasses.put(modalBodyClass, modalInstance);

	        var appendToElement = modal.appendTo,
	            currBackdropIndex = backdropIndex();

	        if (!appendToElement.length) {
	          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
	        }

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.modalOptions = modal;
	          backdropScope.index = currBackdropIndex;
	          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
	          backdropDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            backdropDomEl.attr('modal-animation', 'true');
	          }
	          $compile(backdropDomEl)(backdropScope);
	          $animate.enter(backdropDomEl, appendToElement);
	          scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
	          if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	            appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
	          }
	        }

	        // Set the top modal index based on the index of the previous top modal
	        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
	        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'window-top-class': modal.windowTopClass,
	          'size': modal.size,
	          'index': topModalIndex,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        appendToElement.addClass(modalBodyClass);
	        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

	        openedWindows.top().value.modalDomEl = angularDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[0].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.focusLastFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[list.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isModalFocused = function(evt, modalWindow) {
	        if (evt && modalWindow) {
	          var modalDomEl = modalWindow.value.modalDomEl;
	          if (modalDomEl && modalDomEl.length) {
	            return (evt.target || evt.srcElement) === modalDomEl[0];
	          }
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[list.length - 1];
	        }
	        return false;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (modalWindow) {
	          var modalDomE1 = modalWindow.value.modalDomEl;
	          if (modalDomE1 && modalDomE1.length) {
	            var elements = modalDomE1[0].querySelectorAll(tabableSelector);
	            return elements ?
	              Array.prototype.filter.call(elements, function(element) {
	                return isVisible(element);
	              }) : elements;
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$uibModal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
	        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ?
	                options.templateUrl() : options.templateUrl);
	          }

	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };

	          $modal.open = function(modalOptions) {
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalClosedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              closed: modalClosedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);

	            function resolveWithTemplate() {
	              return templateAndResolvePromise;
	            }

	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(resolveWithTemplate, resolveWithTemplate)
	              .then(function resolveSuccess(tplAndVars) {
	                var providedScope = modalOptions.scope || $rootScope;

	                var modalScope = providedScope.$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;

	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });

	                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$scope.$resolve = {};
	                  ctrlLocals.$uibModalInstance = modalInstance;
	                  angular.forEach(tplAndVars[1], function(value, key) {
	                    ctrlLocals[key] = value;
	                    ctrlLocals.$scope.$resolve[key] = value;
	                  });

	                  // the third param will make the controller instantiate later,private api
	                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
	                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
	                  if (modalOptions.controllerAs && modalOptions.bindToController) {
	                    ctrlInstance = ctrlInstantiate.instance;
	                    ctrlInstance.$close = modalScope.$close;
	                    ctrlInstance.$dismiss = modalScope.$dismiss;
	                    angular.extend(ctrlInstance, {
	                      $resolve: ctrlLocals.$scope.$resolve
	                    }, providedScope);
	                  }

	                  ctrlInstance = ctrlInstantiate();

	                  if (angular.isFunction(ctrlInstance.$onInit)) {
	                    ctrlInstance.$onInit();
	                  }
	                }

	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  closedDeferred: modalClosedDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowTopClass: modalOptions.windowTopClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass,
	                  appendTo: modalOptions.appendTo
	                });
	                modalOpenedDeferred.resolve(true);

	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })['finally'](function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }
	      ]
	    };

	    return $modalProvider;
	  });

	angular.module('ui.bootstrap.paging', [])
	/**
	 * Helper internal service for generating common controller code between the
	 * pager and pagination components
	 */
	.factory('uibPaging', ['$parse', function($parse) {
	  return {
	    create: function(ctrl, $scope, $attrs) {
	      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
	      ctrl._watchers = [];

	      ctrl.init = function(ngModelCtrl, config) {
	        ctrl.ngModelCtrl = ngModelCtrl;
	        ctrl.config = config;

	        ngModelCtrl.$render = function() {
	          ctrl.render();
	        };

	        if ($attrs.itemsPerPage) {
	          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
	            ctrl.itemsPerPage = parseInt(value, 10);
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }));
	        } else {
	          ctrl.itemsPerPage = config.itemsPerPage;
	        }

	        $scope.$watch('totalItems', function(newTotal, oldTotal) {
	          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }
	        });
	      };

	      ctrl.calculateTotalPages = function() {
	        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	      };

	      ctrl.render = function() {
	        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
	      };

	      $scope.selectPage = function(page, evt) {
	        if (evt) {
	          evt.preventDefault();
	        }

	        var clickAllowed = !$scope.ngDisabled || !evt;
	        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	          if (evt && evt.target) {
	            evt.target.blur();
	          }
	          ctrl.ngModelCtrl.$setViewValue(page);
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.getText = function(key) {
	        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
	      };

	      $scope.noPrevious = function() {
	        return $scope.page === 1;
	      };

	      $scope.noNext = function() {
	        return $scope.page === $scope.totalPages;
	      };

	      ctrl.updatePage = function() {
	        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

	        if ($scope.page > $scope.totalPages) {
	          $scope.selectPage($scope.totalPages);
	        } else {
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.$on('$destroy', function() {
	        while (ctrl._watchers.length) {
	          ctrl._watchers.shift()();
	        }
	      });
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging'])

	.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
	  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

	  uibPaging.create(this, $scope, $attrs);
	}])

	.constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPagerController',
	    controllerAs: 'pager',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pager/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	        return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging'])
	.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
	  var ctrl = this;
	  // Setup configuration parameters
	  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
	    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
	    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
	    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
	    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
	  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
	  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;

	  uibPaging.create(this, $scope, $attrs);

	  if ($attrs.maxSize) {
	    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
	      maxSize = parseInt(value, 10);
	      ctrl.render();
	    }));
	  }

	  // Create page object used in template
	  function makePage(number, text, isActive) {
	    return {
	      number: number,
	      text: text,
	      active: isActive
	    };
	  }

	  function getPages(currentPage, totalPages) {
	    var pages = [];

	    // Default page limits
	    var startPage = 1, endPage = totalPages;
	    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	    // recompute if maxSize
	    if (isMaxSized) {
	      if (rotate) {
	        // Current page is displayed in the middle of the visible ones
	        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
	        endPage = startPage + maxSize - 1;

	        // Adjust if limit is exceeded
	        if (endPage > totalPages) {
	          endPage = totalPages;
	          startPage = endPage - maxSize + 1;
	        }
	      } else {
	        // Visible pages are paginated with maxSize
	        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

	        // Adjust last page if limit is exceeded
	        endPage = Math.min(startPage + maxSize - 1, totalPages);
	      }
	    }

	    // Add page number links
	    for (var number = startPage; number <= endPage; number++) {
	      var page = makePage(number, pageLabel(number), number === currentPage);
	      pages.push(page);
	    }

	    // Add links to move between page sets
	    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
	      if (startPage > 1) {
	        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
	        var previousPageSet = makePage(startPage - 1, '...', false);
	        pages.unshift(previousPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
	            var secondPageLink = makePage(2, '2', false);
	            pages.unshift(secondPageLink);
	          }
	          //add the first page
	          var firstPageLink = makePage(1, '1', false);
	          pages.unshift(firstPageLink);
	        }
	      }

	      if (endPage < totalPages) {
	        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
	        var nextPageSet = makePage(endPage + 1, '...', false);
	        pages.push(nextPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
	            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
	            pages.push(secondToLastPageLink);
	          }
	          //add the last page
	          var lastPageLink = makePage(totalPages, totalPages, false);
	          pages.push(lastPageLink);
	        }
	      }
	    }
	    return pages;
	  }

	  var originalRender = this.render;
	  this.render = function() {
	    originalRender();
	    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
	      $scope.pages = getPages($scope.page, $scope.totalPages);
	    }
	  };
	}])

	.constant('uibPaginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  boundaryLinkNumbers: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true,
	  forceEllipses: false
	})

	.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['uibPagination', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };

	  /**
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', keypressListener);

	    $rootScope.$on('$destroy', function() {
	      $document.off('keypress', keypressListener);
	    });

	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }

	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case(ttType);

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName + '-popup ' +
	          'uib-title="' + startSym + 'title' + endSym + '" ' +
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="' + startSym + 'content' + endSym + '" ') +
	          'placement="' + startSym + 'placement' + endSym + '" ' +
	          'popup-class="' + startSym + 'popupClass' + endSym + '" ' +
	          'animation="animation" ' +
	          'is-open="isOpen" ' +
	          'origin-scope="origScope" ' +
	          'class="uib-position-measure"' +
	          '>' +
	        '</div>';

	      return {
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);

	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	            var lastPlacement;

	            var positionTooltip = function() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) { return; }

	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });

	                  if (!tooltip.hasClass(ttPosition.placement.split('-')[0])) {
	                    tooltip.removeClass(lastPlacement.split('-')[0]);
	                    tooltip.addClass(ttPosition.placement.split('-')[0]);
	                  }

	                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
	                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
	                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
	                  }

	                  // first time through tt element will have the
	                  // uib-position-measure class or if the placement
	                  // has changed we need to position the arrow.
	                  if (tooltip.hasClass('uib-position-measure')) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                    tooltip.removeClass('uib-position-measure');
	                  } else if (lastPlacement !== ttPosition.placement) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                  }
	                  lastPlacement = ttPosition.placement;

	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });

	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }

	              cancelHide();
	              prepareTooltip();

	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }

	            function hideTooltipBind() {
	              cancelShow();

	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();

	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }

	              createTooltip();

	              // And show the tooltip.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }

	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }

	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }

	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function() {
	                if (ttScope) {
	                  ttScope.isOpen = false;
	                  assignIsOpen(false);
	                  // And now we remove it from the DOM. However, if we have animation, we
	                  // need to wait for it to expire beforehand.
	                  // FIXME: this is a placeholder for a port of the transitions library.
	                  // The fade transition in TWBS is 150ms.
	                  if (ttScope.animation) {
	                    if (!transitionTimeout) {
	                      transitionTimeout = $timeout(removeTooltip, 150, false);
	                    }
	                  } else {
	                    removeTooltip();
	                  }
	                }
	              });
	            }

	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }

	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }

	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });

	              prepObservers();
	            }

	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();

	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            /**
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }

	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	              var placement = $position.parsePlacement(ttScope.placement);
	              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }

	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }

	            ttScope.contentExp = function() {
	              return ttScope.content;
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function(val) {
	              if (val) {
	                cancelShow();
	              }

	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });

	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function(val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }

	            function prepObservers() {
	              observers.length = 0;

	              if (contentParse) {
	                observers.push(
	                  scope.$watch(contentParse, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    }
	                  })
	                );

	                observers.push(
	                  tooltipLinkedScope.$watch(function() {
	                    if (!repositionScheduled) {
	                      repositionScheduled = true;
	                      tooltipLinkedScope.$$postDigest(function() {
	                        repositionScheduled = false;
	                        if (ttScope && ttScope.isOpen) {
	                          positionTooltip();
	                        }
	                      });
	                    }
	                  })
	                );
	              } else {
	                observers.push(
	                  attrs.$observe(ttType, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    } else {
	                      positionTooltip();
	                    }
	                  })
	                );
	              }

	              observers.push(
	                attrs.$observe(prefix + 'Title', function(val) {
	                  ttScope.title = val;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );

	              observers.push(
	                attrs.$observe(prefix + 'Placement', function(val) {
	                  ttScope.placement = val ? val : options.placement;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	            }

	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function(observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }

	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }

	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();

	              triggers = getTriggers(val);

	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
	                  }

	                  element.on('keypress', function(e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }

	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }

	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }

	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }

	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $uibPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      }

	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }

	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}])

	.directive('uibTooltipPopup', function() {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	  };
	})

	.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}])

	.directive('uibTooltipTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	  };
	})

	.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('uibTooltipHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	  };
	})

	.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

	.directive('uibPopoverTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/popover/popover-template.html'
	  };
	})

	.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', uibTitle: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover-html.html'
	  };
	})

	.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverPopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover.html'
	  };
	})

	.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	})

	.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = getMaxOrDefault();

	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = getMaxOrDefault();
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };

	  //$attrs.$observe('maxParam', function(maxParam) {
	  $scope.$watch('maxParam', function(maxParam) {
	    self.bars.forEach(function(bar) {
	      bar.max = getMaxOrDefault();
	      bar.recalculatePercentage();
	    });
	  });

	  function getMaxOrDefault () {
	    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
	  }
	}])

	.directive('uibProgress', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      maxParam: '=?max'
	    },
	    templateUrl: 'uib/template/progressbar/progress.html'
	  };
	})

	.directive('uibBar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	})

	.directive('uibProgressbar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      maxParam: '=?max',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	});

	angular.module('ui.bootstrap.rating', [])

	.constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  enableReset: true,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl = { $setViewValue: angular.noop },
	    self = this;

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }

	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    this.enableReset = angular.isDefined($attrs.enableReset) ?
	      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
	    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;

	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };

	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    }

	    return this.titles[index];
	  };

	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
	      ngModelCtrl.$setViewValue(newViewValue);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.title = self.getTitle($scope.value - 1);
	  };
	}])

	.directive('uibRating', function() {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?readOnly',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'uib/template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});

	angular.module('ui.bootstrap.tabs', [])

	.controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	    oldIndex;
	  ctrl.tabs = [];

	  ctrl.select = function(index, evt) {
	    if (!destroyed) {
	      var previousIndex = findTabIndex(oldIndex);
	      var previousSelected = ctrl.tabs[previousIndex];
	      if (previousSelected) {
	        previousSelected.tab.onDeselect({
	          $event: evt,
	          $selectedIndex: index
	        });
	        if (evt && evt.isDefaultPrevented()) {
	          return;
	        }
	        previousSelected.tab.active = false;
	      }

	      var selected = ctrl.tabs[index];
	      if (selected) {
	        selected.tab.onSelect({
	          $event: evt
	        });
	        selected.tab.active = true;
	        ctrl.active = selected.index;
	        oldIndex = selected.index;
	      } else if (!selected && angular.isDefined(oldIndex)) {
	        ctrl.active = null;
	        oldIndex = null;
	      }
	    }
	  };

	  ctrl.addTab = function addTab(tab) {
	    ctrl.tabs.push({
	      tab: tab,
	      index: tab.index
	    });
	    ctrl.tabs.sort(function(t1, t2) {
	      if (t1.index > t2.index) {
	        return 1;
	      }

	      if (t1.index < t2.index) {
	        return -1;
	      }

	      return 0;
	    });

	    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
	      var newActiveIndex = findTabIndex(tab.index);
	      ctrl.select(newActiveIndex);
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index;
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].tab === tab) {
	        index = i;
	        break;
	      }
	    }

	    if (ctrl.tabs[index].index === ctrl.active) {
	      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
	        index - 1 : index + 1 % ctrl.tabs.length;
	      ctrl.select(newActiveTabIndex);
	    }

	    ctrl.tabs.splice(index, 1);
	  };

	  $scope.$watch('tabset.active', function(val) {
	    if (angular.isDefined(val) && val !== oldIndex) {
	      ctrl.select(findTabIndex(val));
	    }
	  });

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });

	  function findTabIndex(index) {
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].index === index) {
	        return i;
	      }
	    }
	  }
	}])

	.directive('uibTabset', function() {
	  return {
	    transclude: true,
	    replace: true,
	    scope: {},
	    bindToController: {
	      active: '=?',
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    controllerAs: 'tabset',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
	    },
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ?
	        scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ?
	        scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})

	.directive('uibTab', ['$parse', function($parse) {
	  return {
	    require: '^uibTabset',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tab.html';
	    },
	    transclude: true,
	    scope: {
	      heading: '@',
	      index: '=?',
	      classes: '@?',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    controllerAs: 'tab',
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      if (angular.isUndefined(attrs.index)) {
	        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
	          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
	        } else {
	          scope.index = 0;
	        }
	      }

	      if (angular.isUndefined(attrs.classes)) {
	        scope.classes = '';
	      }

	      scope.select = function(evt) {
	        if (!scope.disabled) {
	          var index;
	          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
	            if (tabsetCtrl.tabs[i].tab === scope) {
	              index = i;
	              break;
	            }
	          }

	          tabsetCtrl.select(index, evt);
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('uibTabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTab',
	    link: function(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})

	.directive('uibTabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };

	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('uib-tab-heading') ||
	      node.hasAttribute('data-uib-tab-heading') ||
	      node.hasAttribute('x-uib-tab-heading') ||
	      node.tagName.toLowerCase() === 'uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'uib:tab-heading'
	    );
	  }
	});

	angular.module('ui.bootstrap.timepicker', [])

	.constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  secondStep: 1,
	  showMeridian: true,
	  showSeconds: false,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true,
	  templateUrl: 'uib/template/timepicker/timepicker.html'
	})

	.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	    watchers = [],
	    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
	    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');

	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1),
	        secondsInputEl = inputs.eq(2);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = +value;
	    }));
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = +value;
	    }));
	  }

	  var min;
	  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  }));

	  var max;
	  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  }));

	  var disabled = false;
	  if ($attrs.ngDisabled) {
	    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
	      disabled = value;
	    }));
	  }

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementSeconds = function() {
	    var incrementedSelected = addSeconds(selected, secondStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementSeconds = function() {
	    var decrementedSelected = addSeconds(selected, -secondStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 12) {
	      return disabled || addMinutes(selected, 12 * 60) > max;
	    }

	    return disabled || addMinutes(selected, -12 * 60) < min;
	  };

	  var secondStep = timepickerConfig.secondStep;
	  if ($attrs.secondStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
	      secondStep = +value;
	    }));
	  }

	  $scope.showSeconds = timepickerConfig.showSeconds;
	  if ($attrs.showSeconds) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
	      $scope.showSeconds = !!value;
	    }));
	  }

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    }));
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = +$scope.hours;
	    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
	      hours >= 0 && hours < 24;
	    if (!valid || $scope.hours === '') {
	      return undefined;
	    }

	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = +$scope.minutes;
	    var valid = minutes >= 0 && minutes < 60;
	    if (!valid || $scope.minutes === '') {
	      return undefined;
	    }
	    return minutes;
	  }

	  function getSecondsFromTemplate() {
	    var seconds = +$scope.seconds;
	    return seconds >= 0 && seconds < 60 ? seconds : undefined;
	  }

	  function pad(value, noPad) {
	    if (value === null) {
	      return '';
	    }

	    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
	      '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
	      return e.detail || delta > 0;
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      }
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      }
	      e.preventDefault();
	    });

	     secondsInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
	      }
	      e.preventDefault();
	    });
	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementHours();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementHours();
	          $scope.$apply();
	        }
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementMinutes();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementMinutes();
	          $scope.$apply();
	        }
	      }
	    });

	    secondsInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementSeconds();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementSeconds();
	          $scope.$apply();
	        }
	      }
	    });
	  };

	  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      $scope.updateSeconds = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }

	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }

	      if (angular.isDefined(invalidSeconds)) {
	        $scope.invalidSeconds = invalidSeconds;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.hours === null || $scope.hours === '') {
	        invalidate(true);
	      } else if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours, !padHours);
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.minutes === null) {
	        invalidate(undefined, true);
	      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });

	    $scope.updateSeconds = function() {
	      var seconds = getSecondsFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(seconds)) {
	        selected.setSeconds(seconds);
	        refresh('s');
	      } else {
	        invalidate(undefined, undefined, true);
	      }
	    };

	    secondsInputEl.bind('blur', function(e) {
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
	        $scope.$apply( function() {
	          $scope.seconds = pad($scope.seconds);
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	    $scope.invalidSeconds = false;
	  }

	  function updateTemplate(keyboardChange) {
	    if (!ngModelCtrl.$modelValue) {
	      $scope.hours = null;
	      $scope.minutes = null;
	      $scope.seconds = null;
	      $scope.meridian = meridians[0];
	    } else {
	      var hours = selected.getHours(),
	        minutes = selected.getMinutes(),
	        seconds = selected.getSeconds();

	      if ($scope.showMeridian) {
	        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
	      }

	      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
	      if (keyboardChange !== 'm') {
	        $scope.minutes = pad(minutes);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

	      if (keyboardChange !== 's') {
	        $scope.seconds = pad(seconds);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	    }
	  }

	  function addSecondsToSelected(seconds) {
	    selected = addSeconds(selected, seconds);
	    refresh();
	  }

	  function addMinutes(selected, minutes) {
	    return addSeconds(selected, minutes*60);
	  }

	  function addSeconds(date, seconds) {
	    var dt = new Date(date.getTime() + seconds * 1000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
	    return newDate;
	  }

	  function modelIsEmpty() {
	    return ($scope.hours === null || $scope.hours === '') &&
	      ($scope.minutes === null || $scope.minutes === '') &&
	      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
	  }

	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addSecondsToSelected(hourStep * 60 * 60);
	    }
	  };

	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addSecondsToSelected(-hourStep * 60 * 60);
	    }
	  };

	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addSecondsToSelected(minuteStep * 60);
	    }
	  };

	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addSecondsToSelected(-minuteStep * 60);
	    }
	  };

	  $scope.incrementSeconds = function() {
	    if (!$scope.noIncrementSeconds()) {
	      addSecondsToSelected(secondStep);
	    }
	  };

	  $scope.decrementSeconds = function() {
	    if (!$scope.noDecrementSeconds()) {
	      addSecondsToSelected(-secondStep);
	    }
	  };

	  $scope.toggleMeridian = function() {
	    var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	    if (!$scope.noToggleMeridian()) {
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
	      } else {
	        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
	      }
	    }
	  };

	  $scope.blur = function() {
	    ngModelCtrl.$setTouched();
	  };

	  $scope.$on('$destroy', function() {
	    while (watchers.length) {
	      watchers.shift()();
	    }
	  });
	}])

	.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
	  return {
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('uibTypeaheadParser', ['$parse', function($parse) {
	    //                      00000111000000000000022200000000000000003333333333333330000000000044000
	    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	    return {
	      parse: function(input) {
	        var match = input.match(TYPEAHEAD_REGEXP);
	        if (!match) {
	          throw new Error(
	            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	              ' but got "' + input + '".');
	        }

	        return {
	          itemName: match[3],
	          source: $parse(match[4]),
	          viewMapper: $parse(match[2] || match[1]),
	          modelMapper: $parse(match[1])
	        };
	      }
	    };
	  }])

	  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
	    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    var modelCtrl, ngModelOptions;
	    //SUPPORTED ATTRIBUTES (OPTIONS)

	    //minimal no of characters that needs to be entered before typeahead kicks-in
	    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	    if (!minLength && minLength !== 0) {
	      minLength = 1;
	    }

	    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
	        minLength = !newVal && newVal !== 0 ? 1 : newVal;
	    });

	    //minimal wait time after last character typed before typeahead kicks-in
	    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	    //should it restrict model values to the ones selected from the popup only?
	    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
	    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
	      isEditable = newVal !== false;
	    });

	    //binding to a variable that indicates if matches are being retrieved asynchronously
	    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	    //a function to determine if an event should cause selection
	    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
	      var evt = vals.$event;
	      return evt.which === 13 || evt.which === 9;
	    };

	    //a callback executed when a match is selected
	    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	    //should it select highlighted popup value when losing focus?
	    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	    //binding to a variable that indicates if there were no results after the query is completed
	    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	    var appendTo = attrs.typeaheadAppendTo ?
	      originalScope.$eval(attrs.typeaheadAppendTo) : null;

	    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	    //If input matches an item of the list exactly, select it automatically
	    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	    //binding to a variable that indicates if dropdown is open
	    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

	    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

	    //INTERNAL VARIABLES

	    //model setter executed upon match selection
	    var parsedModel = $parse(attrs.ngModel);
	    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	    var $setModelValue = function(scope, newValue) {
	      if (angular.isFunction(parsedModel(originalScope)) &&
	        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	        return invokeModelSetter(scope, {$$$p: newValue});
	      }

	      return parsedModel.assign(scope, newValue);
	    };

	    //expressions used by typeahead
	    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

	    var hasFocus;

	    //Used to avoid bug in iOS webview where iOS keyboard does not fire
	    //mousedown & mouseup events
	    //Issue #3699
	    var selected;

	    //create a child scope for the typeahead directive so we are not polluting original scope
	    //with typeahead-specific data (matches, query etc.)
	    var scope = originalScope.$new();
	    var offDestroy = originalScope.$on('$destroy', function() {
	      scope.$destroy();
	    });
	    scope.$on('$destroy', offDestroy);

	    // WAI-ARIA
	    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	    element.attr({
	      'aria-autocomplete': 'list',
	      'aria-expanded': false,
	      'aria-owns': popupId
	    });

	    var inputsContainer, hintInputElem;
	    //add read-only input to show hint
	    if (showHint) {
	      inputsContainer = angular.element('<div></div>');
	      inputsContainer.css('position', 'relative');
	      element.after(inputsContainer);
	      hintInputElem = element.clone();
	      hintInputElem.attr('placeholder', '');
	      hintInputElem.attr('tabindex', '-1');
	      hintInputElem.val('');
	      hintInputElem.css({
	        'position': 'absolute',
	        'top': '0px',
	        'left': '0px',
	        'border-color': 'transparent',
	        'box-shadow': 'none',
	        'opacity': 1,
	        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
	        'color': '#999'
	      });
	      element.css({
	        'position': 'relative',
	        'vertical-align': 'top',
	        'background-color': 'transparent'
	      });
	      inputsContainer.append(hintInputElem);
	      hintInputElem.after(element);
	    }

	    //pop-up element used to display matches
	    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
	    popUpEl.attr({
	      id: popupId,
	      matches: 'matches',
	      active: 'activeIdx',
	      select: 'select(activeIdx, evt)',
	      'move-in-progress': 'moveInProgress',
	      query: 'query',
	      position: 'position',
	      'assign-is-open': 'assignIsOpen(isOpen)',
	      debounce: 'debounceUpdate'
	    });
	    //custom item template
	    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	    }

	    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	    }

	    var resetHint = function() {
	      if (showHint) {
	        hintInputElem.val('');
	      }
	    };

	    var resetMatches = function() {
	      scope.matches = [];
	      scope.activeIdx = -1;
	      element.attr('aria-expanded', false);
	      resetHint();
	    };

	    var getMatchId = function(index) {
	      return popupId + '-option-' + index;
	    };

	    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	    // This attribute is added or removed automatically when the `activeIdx` changes.
	    scope.$watch('activeIdx', function(index) {
	      if (index < 0) {
	        element.removeAttr('aria-activedescendant');
	      } else {
	        element.attr('aria-activedescendant', getMatchId(index));
	      }
	    });

	    var inputIsExactMatch = function(inputValue, index) {
	      if (scope.matches.length > index && inputValue) {
	        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	      }

	      return false;
	    };

	    var getMatchesAsync = function(inputValue, evt) {
	      var locals = {$viewValue: inputValue};
	      isLoadingSetter(originalScope, true);
	      isNoResultsSetter(originalScope, false);
	      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	        //it might happen that several async queries were in progress if a user were typing fast
	        //but we are interested only in responses that correspond to the current view value
	        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
	        if (onCurrentRequest && hasFocus) {
	          if (matches && matches.length > 0) {
	            scope.activeIdx = focusFirst ? 0 : -1;
	            isNoResultsSetter(originalScope, false);
	            scope.matches.length = 0;

	            //transform labels
	            for (var i = 0; i < matches.length; i++) {
	              locals[parserResult.itemName] = matches[i];
	              scope.matches.push({
	                id: getMatchId(i),
	                label: parserResult.viewMapper(scope, locals),
	                model: matches[i]
	              });
	            }

	            scope.query = inputValue;
	            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	            //due to other elements being rendered
	            recalculatePosition();

	            element.attr('aria-expanded', true);

	            //Select the single remaining option if user input matches
	            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	                $$debounce(function() {
	                  scope.select(0, evt);
	                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	              } else {
	                scope.select(0, evt);
	              }
	            }

	            if (showHint) {
	              var firstLabel = scope.matches[0].label;
	              if (angular.isString(inputValue) &&
	                inputValue.length > 0 &&
	                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
	                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
	              } else {
	                hintInputElem.val('');
	              }
	            }
	          } else {
	            resetMatches();
	            isNoResultsSetter(originalScope, true);
	          }
	        }
	        if (onCurrentRequest) {
	          isLoadingSetter(originalScope, false);
	        }
	      }, function() {
	        resetMatches();
	        isLoadingSetter(originalScope, false);
	        isNoResultsSetter(originalScope, true);
	      });
	    };

	    // bind events only if appendToBody params exist - performance feature
	    if (appendToBody) {
	      angular.element($window).on('resize', fireRecalculating);
	      $document.find('body').on('scroll', fireRecalculating);
	    }

	    // Declare the debounced function outside recalculating for
	    // proper debouncing
	    var debouncedRecalculate = $$debounce(function() {
	      // if popup is visible
	      if (scope.matches.length) {
	        recalculatePosition();
	      }

	      scope.moveInProgress = false;
	    }, eventDebounceTime);

	    // Default progress type
	    scope.moveInProgress = false;

	    function fireRecalculating() {
	      if (!scope.moveInProgress) {
	        scope.moveInProgress = true;
	        scope.$digest();
	      }

	      debouncedRecalculate();
	    }

	    // recalculate actual position and set new values to scope
	    // after digest loop is popup in right position
	    function recalculatePosition() {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top += element.prop('offsetHeight');
	    }

	    //we need to propagate user's query so we can higlight matches
	    scope.query = undefined;

	    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutPromise;

	    var scheduleSearchWithTimeout = function(inputValue) {
	      timeoutPromise = $timeout(function() {
	        getMatchesAsync(inputValue);
	      }, waitTime);
	    };

	    var cancelPreviousTimeout = function() {
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	    };

	    resetMatches();

	    scope.assignIsOpen = function (isOpen) {
	      isOpenSetter(originalScope, isOpen);
	    };

	    scope.select = function(activeIdx, evt) {
	      //called from within the $digest() cycle
	      var locals = {};
	      var model, item;

	      selected = true;
	      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	      model = parserResult.modelMapper(originalScope, locals);
	      $setModelValue(originalScope, model);
	      modelCtrl.$setValidity('editable', true);
	      modelCtrl.$setValidity('parse', true);

	      onSelectCallback(originalScope, {
	        $item: item,
	        $model: model,
	        $label: parserResult.viewMapper(originalScope, locals),
	        $event: evt
	      });

	      resetMatches();

	      //return focus to the input element if a match was selected via a mouse click event
	      // use timeout to avoid $rootScope:inprog error
	      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	        $timeout(function() { element[0].focus(); }, 0, false);
	      }
	    };

	    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	    element.on('keydown', function(evt) {
	      //typeahead is open and an "interesting" key was pressed
	      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	        return;
	      }

	      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

	      /**
	       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
	       * or
	       * shift + tab is pressed to bring focus to the previous element
	       * then clear the results
	       */
	      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
	        resetMatches();
	        scope.$digest();
	        return;
	      }

	      evt.preventDefault();
	      var target;
	      switch (evt.which) {
	        case 27: // escape
	          evt.stopPropagation();

	          resetMatches();
	          originalScope.$digest();
	          break;
	        case 38: // up arrow
	          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	        case 40: // down arrow
	          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	        default:
	          if (shouldSelect) {
	            scope.$apply(function() {
	              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	                $$debounce(function() {
	                  scope.select(scope.activeIdx, evt);
	                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	              } else {
	                scope.select(scope.activeIdx, evt);
	              }
	            });
	          }
	      }
	    });

	    element.bind('focus', function (evt) {
	      hasFocus = true;
	      if (minLength === 0 && !modelCtrl.$viewValue) {
	        $timeout(function() {
	          getMatchesAsync(modelCtrl.$viewValue, evt);
	        }, 0);
	      }
	    });

	    element.bind('blur', function(evt) {
	      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	        selected = true;
	        scope.$apply(function() {
	          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
	            $$debounce(function() {
	              scope.select(scope.activeIdx, evt);
	            }, scope.debounceUpdate.blur);
	          } else {
	            scope.select(scope.activeIdx, evt);
	          }
	        });
	      }
	      if (!isEditable && modelCtrl.$error.editable) {
	        modelCtrl.$setViewValue();
	        // Reset validity as we are clearing
	        modelCtrl.$setValidity('editable', true);
	        modelCtrl.$setValidity('parse', true);
	        element.val('');
	      }
	      hasFocus = false;
	      selected = false;
	    });

	    // Keep reference to click handler to unbind it.
	    var dismissClickHandler = function(evt) {
	      // Issue #3973
	      // Firefox treats right click as a click on document
	      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	        resetMatches();
	        if (!$rootScope.$$phase) {
	          originalScope.$digest();
	        }
	      }
	    };

	    $document.on('click', dismissClickHandler);

	    originalScope.$on('$destroy', function() {
	      $document.off('click', dismissClickHandler);
	      if (appendToBody || appendTo) {
	        $popup.remove();
	      }

	      if (appendToBody) {
	        angular.element($window).off('resize', fireRecalculating);
	        $document.find('body').off('scroll', fireRecalculating);
	      }
	      // Prevent jQuery cache memory leak
	      popUpEl.remove();

	      if (showHint) {
	          inputsContainer.remove();
	      }
	    });

	    var $popup = $compile(popUpEl)(scope);

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else if (appendTo) {
	      angular.element(appendTo).eq(0).append($popup);
	    } else {
	      element.after($popup);
	    }

	    this.init = function(_modelCtrl, _ngModelOptions) {
	      modelCtrl = _modelCtrl;
	      ngModelOptions = _ngModelOptions;

	      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);

	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function(inputValue) {
	        hasFocus = true;

	        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	          if (waitTime > 0) {
	            cancelPreviousTimeout();
	            scheduleSearchWithTimeout(inputValue);
	          } else {
	            getMatchesAsync(inputValue);
	          }
	        } else {
	          isLoadingSetter(originalScope, false);
	          cancelPreviousTimeout();
	          resetMatches();
	        }

	        if (isEditable) {
	          return inputValue;
	        }

	        if (!inputValue) {
	          // Reset in case user had typed something previously.
	          modelCtrl.$setValidity('editable', true);
	          return null;
	        }

	        modelCtrl.$setValidity('editable', false);
	        return undefined;
	      });

	      modelCtrl.$formatters.push(function(modelValue) {
	        var candidateViewValue, emptyViewValue;
	        var locals = {};

	        // The validity may be set to false via $parsers (see above) if
	        // the model is restricted to selected values. If the model
	        // is set manually it is considered to be valid.
	        if (!isEditable) {
	          modelCtrl.$setValidity('editable', true);
	        }

	        if (inputFormatter) {
	          locals.$model = modelValue;
	          return inputFormatter(originalScope, locals);
	        }

	        //it might happen that we don't have enough info to properly render input value
	        //we need to check for this situation and simply return model value if we can't apply custom formatting
	        locals[parserResult.itemName] = modelValue;
	        candidateViewValue = parserResult.viewMapper(originalScope, locals);
	        locals[parserResult.itemName] = undefined;
	        emptyViewValue = parserResult.viewMapper(originalScope, locals);

	        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	      });
	    };
	  }])

	  .directive('uibTypeahead', function() {
	    return {
	      controller: 'UibTypeaheadController',
	      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
	      link: function(originalScope, element, attrs, ctrls) {
	        ctrls[2].init(ctrls[0], ctrls[1]);
	      }
	    };
	  })

	  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&',
	        assignIsOpen: '&',
	        debounce: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          var isDropdownOpen = scope.matches.length > 0;
	          scope.assignIsOpen({ isOpen: isDropdownOpen });
	          return isDropdownOpen;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active === matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx, evt) {
	          var debounce = scope.debounce();
	          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
	            $$debounce(function() {
	              scope.select({activeIdx: activeIdx, evt: evt});
	            }, angular.isNumber(debounce) ? debounce : debounce['default']);
	          } else {
	            scope.select({activeIdx: activeIdx, evt: evt});
	          }
	        };
	      }
	    };
	  }])

	  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link: function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          var tplEl = angular.element(tplContent.trim());
	          element.replaceWith(tplEl);
	          $compile(tplEl)(scope);
	        });
	      }
	    };
	  }])

	  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);

	angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion-group.html",
	    "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" +
	    "  <div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
	    "    <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion.html",
	    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
	    "    <span class=\"sr-only\">previous</span>\n" +
	    "  </a>\n" +
	    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
	    "    <span class=\"sr-only\">next</span>\n" +
	    "  </a>\n" +
	    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
	    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
	    "    </li>\n" +
	    "  </ol>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/datepicker.html",
	    "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
	    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
	    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/day.html",
	    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/month.html",
	    "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/year.html",
	    "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepickerPopup/popup.html",
	    "<div>\n" +
	    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "    <li ng-transclude></li>\n" +
	    "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
	    "      <span class=\"btn-group pull-left\">\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
	    "      </span>\n" +
	    "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
	    "    </li>\n" +
	    "  </ul>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     uib-modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    uib-modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
	    "    <div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pager/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);

	angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tab.html",
	    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
	    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\"\n" +
	    "         ng-repeat=\"tab in tabset.tabs\"\n" +
	    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
	    "         uib-tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/timepicker/timepicker.html",
	    "<table class=\"uib-timepicker\">\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
	    "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-match.html",
	    "<a href\n" +
	    "   tabindex=\"-1\"\n" +
	    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
	    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
	angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
	angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
	angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
	angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
	angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
	angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

=======
>>>>>>> timepicker Update
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

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Transfer).call(this));

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