/**
 * (description)
 *
 * @author yourname
 */

export default class InputnumberdemoController {
	constructor($state) {
		'ngInject'
		this.name = 'inputnumberdemo';
		this.$state = $state;
	}

	onChange(value) {
		console.log(value);
	}
}