import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class popConfirmController {
	constructor($scope, Popconfirm, $sce) {
		'ngInject';
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
	}

	deleteConfirm(e) {
		this.instancePopConfirm(e);
	}

	instancePopConfirm(e) {
		this.Popconfirm.pop({
			title: '确定要删除吗?',
			placement: 'top'
		}, e)
	}
}
