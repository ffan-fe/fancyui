/**
 * (description)
 *
 * @author yourname
 */

export default class PopconfirmController {
	constructor($scope, Popconfirm, $state, Message) {
		'ngInject';
		this.$state = $state;
		this.$scope = $scope;
		this.Popconfirm = Popconfirm;
		this.Message = Message;
	}

	topPop(e) {
	  let promise = this.Popconfirm.pop({
      title: '确定要删除top吗?',
      placement: 'top',
      okText: '确定',
      cancelText: '取消'
    }, e);
    promise && promise.then(() => {
      this.Message.info("点了确定");
    }, () => {
      this.Message.info("点了取消");
    });
	}

	leftPop(e) {
	  let promise = this.Popconfirm.pop({
      title: '确定要删除left吗?',
      placement: 'left',
      okText: '确定',
      cancelText: '取消'
    }, e);
    promise && promise.then(() => {
      this.Message.info("点了确定");
    }, () => {
      this.Message.info("点了取消");
    });
	}

	bottomPop(e) {
	  let promise = this.Popconfirm.pop({
      title: '确定要删除bottom吗?',
      placement: 'bottom',
      okText: '确定',
      cancelText: '取消'
    }, e);
    promise && promise.then(() => {
      this.Message.info("点了确定");
    }, () => {
      this.Message.info("点了取消");
    });
	}

	rightPop(e) {
    let promise = this.Popconfirm.pop({
      title: '确定要删除right吗?',
      placement: 'right',
      okText: '确定',
      cancelText: '取消'
    }, e);
    promise && promise.then(() => {
      this.Message.info("点了确定");
    }, () => {
      this.Message.info("点了取消");
    });
	}
}
