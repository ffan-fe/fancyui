/**
 * (description)
 *
 * @author yourname
 */

export default class TabsController {
	constructor($document) {
		"ngInject";
		this.name = 'tabs';
		this.$document = $document;
		this.isActive = true;
		this.tabSwitch();
	}

	tabSwitch() {
		let data = document.querySelector('.tab-list').querySelectorAll('li');
		angular.forEach(data, function (item, key) {
			$(item).on('click', function () {
				$(item).addClass('active')
			});
		})
	}
}