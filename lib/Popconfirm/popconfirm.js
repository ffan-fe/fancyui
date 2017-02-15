/**
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


import template from './template.html';
import scrollParent from './scrollparent.js';
import './popconfirm.less';

'use strict';

/**
 * Popconfirm component
 *
 * @export
 * @class Popconfirm
 * @extends {Component}
 */
export default class Popconfirm {
	constructor($document, $compile, $rootScope, $q) {
		'ngInject';
		this.$compile = $compile;
		this.$document = $document;
		this.$rootScope = $rootScope;
		this.$q = $q;
		this.popDom = null;
		this.last = null;
	}

	pop(param, e) {
		let defer = this.$q.defer();
		let data = Object.assign(this.$rootScope.$new(), param);
		if (!this.popDom || this.last != e.currentTarget) {
			this.removeDom(this.popDom);
			this.popDom = this.$compile(template)(data);
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
			if (e.stopPropagation)
				e.stopPropagation();
			else
				e.cancelBubble = true;
		}

		let self = this;
		$(document).bind('click',function(){
			self.removeDom(self.popDom);
			self.popDom = null;
		});

		this.popDom.bind('click',function(e){
			stopPropagation(e);
		});

		stopPropagation(e);

		data.confirm = () => {
			self.removeDom(self.popDom);
			self.popDom = null;
			defer.resolve('confirm');
		};

		data.cancel = () => {
			self.removeDom(self.popDom);
			self.popDom = null;
			defer.reject('cancel');
		};

		return defer.promise;
	}

	setPosition(param, e) {
		// click target position
		let eWidth = e.currentTarget.offsetWidth;
		let eHeight = e.currentTarget.offsetHeight;
		let eTop = e.currentTarget.offsetTop + e.currentTarget.offsetParent.offsetTop;
		let eLeft = e.currentTarget.offsetLeft + e.currentTarget.offsetParent.offsetLeft;

		// popup width and height
		let popWidth = this.popDom[0].offsetWidth;
		let popHeight = this.popDom[0].offsetHeight;

		// scroll top
		let eScrollTop = scrollParent(e.currentTarget).scrollTop;

		// top
		let popTop = eTop - popHeight - eScrollTop - 4;
		let popLeft = eLeft - popWidth / 2 + eWidth / 2;

		// left
		let popTopPositionLeft = eTop - popHeight / 2 + eHeight / 2 - eScrollTop;
		let popLeftPositionLeft = eLeft - popWidth - 4;

		// bottom
		let popTopPositionBottom = eTop + eHeight - eScrollTop;
		let popLeftPositionBottom = popLeft;

		// right
		let popTopPositionRight = eTop - popHeight / 2 + eHeight / 2 - eScrollTop;
		let popLeftPositionRight = eLeft + eWidth;

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

	removeDom(el) {
		if (el) {
			el.remove();
		}
	}
}
