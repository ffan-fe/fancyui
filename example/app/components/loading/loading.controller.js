/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Jan 16 2017 16:56:03 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/loading
 */

export default class LoadingController {
  constructor($state, LoadingService,HintService) {
    'ngInject'
    this.$state = $state;
    this.LoadingService = LoadingService;
    this.n = 0;
    this.HintService = HintService;
  }

  show(e) {
    console.log(JSON.stringify(e))
    console.log('show'+(this.n++) );
    this.HintService.Hint()
    /**
    this.loading = this.LoadingService.loading({
      target: '#table-container',
      text: 'loading...'
    }); */ 
  }

  close() {
    this.loading.close();
  }
}