/**
 * Popconfirm
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
	constructor($document, $compile, $rootScope) {
		'ngInject'
		this.$compile = $compile;
		this.$document = $document;
		this.$rootScope = $rootScope;
		this.popDom = null;
		this.last = null;
	}

	/**
	 * @override
	 */
	_initDefaultValue() {

	}

	/**
	 * @override
	 */
	_createClassName() {
	}

	/**
	 * @override
	 */
	_launch() {
	}

	removeDom(el) {
		if (el) {
			// el.removeClass('zoom-big-enter');
			// el.addClass('zoom-big-leave');
			el.remove();
		}
	}

	pop(param, e) {
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

		$('#btnConfirm').bind('click', function () {
			param.onConfirm();
			self.removeDom(self.popDom);
			self.popDom = null;
		});

		$('#btnCancel').bind('click', function () {
			param.onCancel();
			self.removeDom(self.popDom);
			self.popDom = null;
		});
	}
}
