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
	constructor($document, $compile) {
		'ngInject'
		// this.$scope = $scope;
		this.$compile = $compile;
		this.$document = $document;
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
		if ($('.ant-popover').length == 0) {
			popDom = this.$compile(template)(param);
		} else {
			popDom = $('.ant-popover');
		}

		if (popDom[0].style.display == 'block') {
			popDom[0].style.display = 'none'
		} else {
			popDom[0].style.display = 'block'
		}

		this.$document.find('body').append(popDom);


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
	}
}
