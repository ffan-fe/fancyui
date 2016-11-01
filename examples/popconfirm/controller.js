import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class popConfirmController {
	constructor($scope, Popconfirm, $sce) {
		'ngInject';
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
	}

	topLeftPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除吗?',
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

	topPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除top吗?',
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

	leftPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除left吗?',
			placement: 'left',
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

	bottomPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除bottom吗?',
			placement: 'bottom',
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

	rightPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除right吗?',
			placement: 'right',
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
