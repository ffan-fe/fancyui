/**
 * @ngdoc directive
 * @name popConfirm.service:popConfirm
 * @author anyunfei
 * @restrict E
 * @description
 * 气泡确认框, 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，交互形式更轻量。
 * 包含的状态有
 * - enable
 * - disabled
 * - loading
 *
 * @param {Array}      sourceData       - binding symbol is =?, 数据源
 * @param {Array}      targetData       - binding symbol is =?, 右侧选中目标值
 * @param {Array}      titles           - binding symbol is <, 左右侧标题,默认为`请选择`
 * @param {Array}      placeholders     - binding symbol is <, 左右placeholders值 默认为`请输入检索条件`
 * @param {Array}      operations       - binding symbol is <, 操作按钮的文案 默认依次为 `添加` `添加全部` `删除` `全部删除`
 * @param {Boolean}    showLeftSearch   - binding symbol is <, 是否启用左侧检索框 默认为 `true` 启用
 * @param {Boolean}    showRightSearch  - binding symbol is <, 是否启用右侧检索框 默认为 `true` 启用
 * @param {Boolean}    addBtn           - binding symbol is <, 是否展示增加按钮 默认为 `true` 展示
 * @param {Boolean}    addAllBtn        - binding symbol is <, 是否展示全部增加按钮 默认为 `true` 展示
 * @param {Boolean}    delBtn           - binding symbol is <, 是否展示删除按钮 默认为 `true` 展示
 * @param {Boolean}    delAllBtn        - binding symbol is <, 是否展示全部删除按钮 默认为 `true` 展示
 * @param {Function}   serverSearch     - binding symbol is &?, 是否启用服务端检索
 *
 *
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
			defer.resolve('点了确定');
		};

		data.cancel = () => {
			self.removeDom(self.popDom);
			self.popDom = null;
			defer.reject('点了取消');
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

	confirm() {

	}

	cancel() {

	}

	removeDom(el) {
		if (el) {
			el.remove();
		}
	}
}
