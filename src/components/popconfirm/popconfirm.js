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

	pop(param, e) {
		let popDom;
		let data = Object.assign(this.$rootScope.$new(), param);
		let selector = $('.ant-popover');

		if (selector.length != 0) {
			selector.remove();
		}

		popDom = this.$compile(template)(data);
		popDom.addClass('zoom-big-enter');
		this.$document.find('body').append(popDom);


		let eTop = e.target.offsetTop + e.target.offsetParent.offsetTop;
		let popHeight = popDom[0].offsetHeight;
		// let scrollTop = window.scrollTop;
		let popTop = eTop - popHeight - 10;

		let eLeft = e.target.offsetLeft + e.target.offsetParent.offsetLeft;
		let eWidth = e.target.offsetWidth;
		let popWidth = popDom[0].offsetWidth;
		let popLeft = eLeft - popWidth / 2;

		switch (param.placement) {
			case 'top':
				popDom.css('top', popTop + 'px');
				popDom.css('left', popLeft + 'px');
				// popDom.css('transform-origin', '50% 96px 0px');
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

		$(document).bind('click',function(){
			popDom.remove();
		});

		popDom.bind('click',function(e){
			stopPropagation(e);
		});

		stopPropagation(e);

		document.getElementById('btnConfirm').onclick =  function () {
			param.onConfirm();
			popDom.remove();
		};

		document.getElementById('btnCancel').onclick =  function () {
			param.onCancel();
			popDom.remove();
		};

	}
}
