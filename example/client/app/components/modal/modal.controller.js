/**
 * (description)
 *
 * @author yourname
 */

import popupTemplate  from '../popup/popup.html';

export default class ModalController {
	constructor($scope, $uibModal) {
		"ngInject";
		this.$scope = $scope;
		this.$uibModal = $uibModal;
	}

	openPop() {
		this.$uibModal.open({
			animation: true,
			template: popupTemplate,
			controller: 'PopupController',
			controllerAs: 'vm',
			size: 'md',    // 可选lg/md/sm
			resolve: {}
		});
	}
}