/**
 * Bpswitch
 */

'use strict';

/**
 * Bpswitch component
 * 
 * @export
 * @class Bpswitch
 * @extends {Component}
 */
export default class Bpswitch {
	constructor() {
		this.isChecked = this.defaultChecked;
	}

	switchCheck() {
		if(this.disabled) {
			return;
		}
		this.isChecked = this.isChecked ? false : true;
		this.onChange(this.isChecked);
	}
}