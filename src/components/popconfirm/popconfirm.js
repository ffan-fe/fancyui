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
		// this.title = param.title;
		let data = Object.assign(this.$rootScope.$new(), param);

		let popDom;
		if ($('.ant-popover').length == 0) {
			popDom = this.$compile(template)(data);
			this.$document.find('body').append(popDom);
		} else {
			popDom = $('.ant-popover');
		}

		if (popDom[0].style.display == 'block') {
			popDom[0].style.display = 'none';
			popDom.removeClass('zoom-big-enter');
			popDom.addClass('zoom-big-leave');
		} else {
			popDom[0].style.display = 'block';
			popDom.addClass('zoom-big-enter');
			// popDom.addClass('zoom-big-enter-active');
		}





		let eTop = e.target.offsetTop + e.target.offsetParent.offsetTop;
		let popHeight = popDom[0].offsetHeight;
		let popTop = eTop - popHeight - 10;

		let eLeft = e.target.offsetLeft + e.target.offsetParent.offsetLeft;
		let eWidth = e.target.offsetWidth;
		let popWidth = popDom[0].offsetWidth;
		let popLeft = eLeft - popWidth / 2 + eWidth / 2;

		switch (param.placement) {
			case 'top':
				popDom.css('top', popTop + 'px');
				popDom.css('left', popLeft + 'px');
				popDom.css('transform-origin', '50% 96px 0px');
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
			popDom[0].style.display = 'none'
		});

		$('.ant-popover').bind('click',function(e){
			stopPropagation(e);
		});

		stopPropagation(e);
	}
}
