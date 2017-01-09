/**
 * (description)
 *
 * @author yourname
 */

export default class SwitchdemoController {
	constructor($state) {
		'ngInject';
		this.$state = $state;
		this.onText = '开';
		this.offText = '关';
		this.disabled = false;
		this.disabled2 = true;
		this.defaultChecked = true;
	}

	onChange(checked) {
		console.log(checked);
	}
}