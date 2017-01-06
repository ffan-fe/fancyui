/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

export default class MenuController {
  constructor($state) {
    'ngInject'
    this.$state= $state;
    this.name = 'menu';
    this.keys = ['mail'];
    this.openKeys = [];
    this.disabled = true;
  }

}
