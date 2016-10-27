import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class popConfirmController {
  constructor($scope, Popconfirm, $sce) {
    'ngInject';
    this.$scope = $scope;
    this.Popconfirm = Popconfirm;
  }

  deleteConfirm() {
    console.dir(this.Popconfirm)
    this.instancePopConfirm();
  }

  instancePopConfirm() {
    this.Popconfirm.test({title: '确定要删除吗?'})
  }
}
