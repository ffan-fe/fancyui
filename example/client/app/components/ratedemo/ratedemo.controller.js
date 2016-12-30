/**
 * (description)
 *
 * @author yourname
 */

export default class RatedemoController {
	constructor($state) {
		'ngInject';
		this.$state = $state;
		this.colors = ['#99A9BF', '#f7ba2a', '#FF9900'];
		this.textArray = ['极差', '失望', '一般', '满意', '惊喜'];
	}

	onChange(value) {
		console.log(value);
	}
}