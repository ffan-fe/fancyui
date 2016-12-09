'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @ngdoc service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name popConfirm.service:popConfirm
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author anyunfei
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 气泡确认框, 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，交互形式更轻量。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * **Methods**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - `pop(config)` - 此方法会返回`Promise`, 其中`resolve`表明用户点击了确认按钮; `reject`表明用户点击了取消按钮;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    参数:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - title: String		    - 确认框的描述
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - placement: String		- 确认框的位置, 可选top / left / right / bottom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - okText: String	    - 确认按钮文字
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - cancelText: String    - 取消按钮文字
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <button type="button" class="btn btn-default" ng-click="vm.topPop($event)"><span>删除</span></button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Popconfirm.pop({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		title: '确定要删除top吗?',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		placement: 'top',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		okText: '确定',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		cancelText: '取消'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	}, e).then(function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		alert('点了确定');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	}, function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		alert('点了取消');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

var _scrollparent = require('./scrollparent.js');

var _scrollparent2 = _interopRequireDefault(_scrollparent);

require('./popconfirm.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

/**
 * Popconfirm component
 *
 * @export
 * @class Popconfirm
 * @extends {Component}
 */

var Popconfirm = function () {
	function Popconfirm($document, $compile, $rootScope, $q) {
		'ngInject';

		_classCallCheck(this, Popconfirm);

		this.$compile = $compile;
		this.$document = $document;
		this.$rootScope = $rootScope;
		this.$q = $q;
		this.popDom = null;
		this.last = null;
	}

	_createClass(Popconfirm, [{
		key: 'pop',
		value: function pop(param, e) {
			var defer = this.$q.defer();
			var data = Object.assign(this.$rootScope.$new(), param);
			if (!this.popDom || this.last != e.currentTarget) {
				this.removeDom(this.popDom);
				this.popDom = this.$compile(_template2.default)(data);
				this.popDom.addClass('zoom-big-enter');
				this.$document.find('body').append(this.popDom);
			} else {
				if (this.last == e.currentTarget) {
					this.removeDom(this.popDom);
					this.popDom = null;
					return;
				}
			}

			this.last = e.currentTarget;

			this.setPosition(param, e);

			function stopPropagation(e) {
				if (e.stopPropagation) e.stopPropagation();else e.cancelBubble = true;
			}

			var self = this;
			$(document).bind('click', function () {
				self.removeDom(self.popDom);
				self.popDom = null;
			});

			this.popDom.bind('click', function (e) {
				stopPropagation(e);
			});

			stopPropagation(e);

			data.confirm = function () {
				self.removeDom(self.popDom);
				self.popDom = null;
				defer.resolve('confirm');
			};

			data.cancel = function () {
				self.removeDom(self.popDom);
				self.popDom = null;
				defer.reject('cancel');
			};

			return defer.promise;
		}
	}, {
		key: 'setPosition',
		value: function setPosition(param, e) {
			// click target position
			var eWidth = e.currentTarget.offsetWidth;
			var eHeight = e.currentTarget.offsetHeight;
			var eTop = e.currentTarget.offsetTop + e.currentTarget.offsetParent.offsetTop;
			var eLeft = e.currentTarget.offsetLeft + e.currentTarget.offsetParent.offsetLeft;

			// popup width and height
			var popWidth = this.popDom[0].offsetWidth;
			var popHeight = this.popDom[0].offsetHeight;

			// scroll top
			var eScrollTop = (0, _scrollparent2.default)(e.currentTarget).scrollTop;

			// top
			var popTop = eTop - popHeight - eScrollTop - 4;
			var popLeft = eLeft - popWidth / 2 + eWidth / 2;

			// left
			var popTopPositionLeft = eTop - popHeight / 2 + eHeight / 2 - eScrollTop;
			var popLeftPositionLeft = eLeft - popWidth - 4;

			// bottom
			var popTopPositionBottom = eTop + eHeight - eScrollTop;
			var popLeftPositionBottom = popLeft;

			// right
			var popTopPositionRight = eTop - popHeight / 2 + eHeight / 2 - eScrollTop;
			var popLeftPositionRight = eLeft + eWidth;

			switch (param.placement) {
				case 'top':
					this.popDom.css('top', popTop + 'px');
					this.popDom.css('left', popLeft + 'px');
					this.popDom.addClass('bp-popover-placement-top');
					break;
				case 'left':
					this.popDom.css('top', popTopPositionLeft + 'px');
					this.popDom.css('left', popLeftPositionLeft + 'px');
					this.popDom.addClass('bp-popover-placement-left');
					break;
				case 'bottom':
					this.popDom.css('top', popTopPositionBottom + 'px');
					this.popDom.css('left', popLeftPositionBottom + 'px');
					this.popDom.addClass('bp-popover-placement-bottom');
					break;
				case 'right':
					this.popDom.css('top', popTopPositionRight + 'px');
					this.popDom.css('left', popLeftPositionRight + 'px');
					this.popDom.addClass('bp-popover-placement-right');
					break;
			}
		}
	}, {
		key: 'removeDom',
		value: function removeDom(el) {
			if (el) {
				el.remove();
			}
		}
	}]);

	return Popconfirm;
}();

exports.default = Popconfirm;