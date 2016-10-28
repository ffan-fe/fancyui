/**
 * Popconfirm
 */

import template from './template.html';
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
	constructor($document, $compile, $rootScope,) {
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
			el.remove();
		}
	}

	pop(param, e) {
		let data = Object.assign(this.$rootScope.$new(), param);
		let selector = $('.ant-popover');



		if (!this.popDom || this.last != e.target) {
			this.removeDom(this.popDom);
			this.popDom = this.$compile(template)(data);
			this.popDom.addClass('zoom-big-enter');
			this.$document.find('body').append(this.popDom);


		} else {
			if (this.last == e.target) {
				this.removeDom(this.popDom);
				this.popDom = null;
				return;
			}
		}


		this.last = e.target;


		let eTop = e.target.offsetTop + e.target.offsetParent.offsetTop;
		let eLeft = e.target.offsetLeft + e.target.offsetParent.offsetLeft;
		let eWidth = e.target.offsetWidth;

		let popHeight = this.popDom[0].offsetHeight;
		let popTop = eTop - popHeight - 10;
		let popWidth = this.popDom[0].offsetWidth;

		// console.log(this.popDom[0].clientWidth)


		let popLeft = eLeft - popWidth / 2 + eWidth / 2;

		switch (param.placement) {
			case 'top':
				this.popDom.css('top', popTop + 'px');
				this.popDom.css('left', popLeft + 'px');
				break;

			case 'left':

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
