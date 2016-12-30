/**
 * (description)
 *
 * @author yourname
 */

export default class CommonTabsService {
	constructor($rootScope, $compile, $q) {
		'ngInject';
		this.$rootScope = $rootScope;
		this.$compile = $compile;
		this.$q = $q;
		this.defer = this.$q.defer();
	}

	switchTab(e) {
		$(e.target).addClass('active').siblings().removeClass('active')
	}
}