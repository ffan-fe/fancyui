/**
 * (description)
 *
 * @author yourname
 */

export default class ButtonController {
	constructor($state, $timeout, $translate) {
		'ngInject';
		this.$state = $state;
		this.disabled = false;
		this.$timeout = $timeout;
		this.tiggleDisabled = true;
		this.$translate = $translate;
	}

	sayHello(btn) {
		btn.state = { loading: true };
		this.tiggleDisabled = false;
		this.$timeout(() => {
			btn.state = { disabled: false, loading: false };
		}, 3000);
	}

	$onInit() {
		this.currentLang = this.$translate.use();
	}
}