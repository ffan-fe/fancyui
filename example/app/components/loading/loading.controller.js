/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Jan 16 2017 16:56:03 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/loading
 */

export default class LoadingController {
  constructor($state,LoadingService) {
    'ngInject'
    this.$state= $state;
    this.name = 'loading';
    this.LoadingService = LoadingService;
  }


  click(){
    this.modal = this.LoadingService.loading({
      target:'#test',
      text:'正在XXOO...'
    });
  }

  close(){
    this.modal.close();
  } 
}