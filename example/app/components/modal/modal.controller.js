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
        template: `<div class="modal fade">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        {{message}}      
                      </div>
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