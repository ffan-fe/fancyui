/**
 * (description)
 *
 * @author yourname
 */

export default class SwitchController {
	constructor() {
		this.name = 'switch';
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