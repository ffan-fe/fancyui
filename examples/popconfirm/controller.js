import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class popConfirmController {
	constructor($scope, Popconfirm, $sce) {
		'ngInject';
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
		const exampleCodeHTMLPart = `<button type="button" class="btn btn-default" ng-click="vm.topPop($event)"><span>删除</span></button>`;
		const exampleCodeJSPart = `
			Popconfirm.pop({
				title: '确定要删除top吗?',
				placement: 'top',
				okText: '确定',
				cancelText: '取消'
			}, e).then(function () {
				alert('点了确定');
			}, function () {
				alert('点了取消');
			});
		`;
		this.exampleCodeHTML = $sce.trustAsHtml(Prism.highlight(exampleCodeHTMLPart, Prism.languages.html));
		this.exampleCodeJS = $sce.trustAsHtml(Prism.highlight(exampleCodeJSPart, Prism.languages.javascript));
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
