/**
 * @description 
 *
 * @author bcguan2008 <148135244@qq.com>
 * @date Tue Apr 04 2017 15:14:12 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/modal
 */

import Base from '../../base';

export default class ModalController extends Base{
  constructor($state,$translate,ModalService) {
    'ngInject';
    super($state,$translate)
    this.ModalService = ModalService;
  }

  myAlert() {

    let modalInstance = this.ModalService.open({
        template: `<div class="modal-content">
    <div class="modal-header">
      <span class="modal-title ng-binding">提示信息</span>
      <div class="modal-close" ng-click="vm.close();">X</div>
    </div>
    <div class="modal-body">
      {{vm.message}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn bp-btn-primary" ng-click="vm.ok();">确定</button>
      <!-- ngIf: !vm.alert --><button type="button" ng-if="!vm.alert" class="btn bp-btn-primary ng-scope" ng-click="vm.close();">取消</button><!-- end ngIf: !vm.alert -->
    </div>
  </div>`,
        controller : function(message,$scope){
          'ngInject'
          this.message = message;
        },
        controllerAs : 'vm',
        resolve : {
          message :()=>{
            return ['asdasd','dsafa'];
          }
        }
    });


    /**
		this.ModalService
			.alert({
				title: "测试",
				content: "你好，我是警告"
			})
			.then(() => {
        console.log('asdasd');
			}); */
	}
}