/**
 * (description)
 *
 * @author yourname
 */

export default class PopupController {
	constructor($state, $uibModalInstance, $uibModal) {
		"ngInject";
		this.$uibModalInstance = $uibModalInstance;
		this.$uibModal = $uibModal;
	}

	/**
	 * 确定
	 */
	confirmSubmit() {
		console.log('你点了确定');
		this.$uibModalInstance.dismiss();
	}

	/**
	 * 取消
	 */
	cancel() {
		this.$uibModalInstance.dismiss();
	}
}