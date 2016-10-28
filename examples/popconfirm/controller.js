import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class popConfirmController {
	constructor($scope, Popconfirm, $sce) {
		'ngInject';
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
	}

	topLeftConfirm(e) {
		this.Popconfirm.pop({
			title: '确定要删除123吗?',
			placement: 'top',
			okText: '确定',
			cancelText: '取消',
			onConfirm: function () {
				console.log('确定');
			},
			onCancel: function () {
				console.log('取消');
			}
		}, e)
	}
}
