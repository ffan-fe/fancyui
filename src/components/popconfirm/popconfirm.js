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

		let eTop = e.currentTarget.offsetTop + e.currentTarget.offsetParent.offsetTop;
		let eLeft = e.currentTarget.offsetLeft + e.currentTarget.offsetParent.offsetLeft;
		let eWidth = e.currentTarget.offsetWidth;

		let popHeight = this.popDom[0].offsetHeight;
		let popTop = eTop - popHeight;
		let popWidth = this.popDom[0].offsetWidth;

		let popLeft = eLeft - popWidth / 2 + eWidth / 2;

		console.log(e.target)
		console.log(e.currentTarget)

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
