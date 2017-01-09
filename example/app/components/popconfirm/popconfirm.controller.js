/**
 * (description)
 *
 * @author yourname
 */

export default class PopconfirmController {
	constructor($scope, Popconfirm,$state) {
		'ngInject';
		this.$state = $state;
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
	}

	topPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除top吗?',
			placement: 'top',
			okText: '确定',
			cancelText: '取消'
		}, e).then(function () {
			alert('点了确定');
		}, function () {
			alert('点了取消');
		});
	}

	leftPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除left吗?',
			placement: 'left',
			okText: '确定',
			cancelText: '取消'
		}, e).then(function () {
			alert('点了确定');
		}, function () {
			alert('点了取消');
		});
	}

	bottomPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除bottom吗?',
			placement: 'bottom',
			okText: '确定',
			cancelText: '取消'
		}, e).then(function () {
			alert('点了确定');
		}, function () {
			alert('点了取消');
		});
	}

	rightPop(e) {
		this.Popconfirm.pop({
			title: '确定要删除right吗?',
			placement: 'right',
			okText: '确定',
			cancelText: '取消'
		}, e).then(function () {
			alert('点了确定');
		}, function () {
			alert('点了取消');
		});
	}
}