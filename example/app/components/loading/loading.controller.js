/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Jan 16 2017 16:56:03 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/loading
 */

export default class LoadingController {
  constructor($state, LoadingService) {
    'ngInject'
    this.$state = $state;
    this.LoadingService = LoadingService;
  }

  show(e) {
    this.loading = this.LoadingService.loading({
      target: '#table-container',
      text: '正在加载中...'
    }); 
  }

  close() {
    this.loading.close();
  }
}