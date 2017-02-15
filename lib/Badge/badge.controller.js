/**
 * @description select
 *
 * @author anyunfei
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/badge
 */

export default class BadgeController {
	constructor() {
		'ngInject';
	}

	$onInit(){
		this.data= this.buildData()
		this.init();
	}

	buildData(){
		return [
			[1,2,3,4,5,6,7,8,9],
			[1,2,3,4,5,6,7,8,9],
			[1,2,3,4,5,6,7,8,9]
		]
	}

	init(){
		if (this.dot || this.count == 0) {
			this.countValue = '';
		} else {
			if (this.count > this.max) {
				this.countValue = this.max + '+';
			} else {
				this.countValue = this.count;
			}
		}
	}
}