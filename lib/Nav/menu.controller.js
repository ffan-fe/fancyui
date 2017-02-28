/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */


class MenuController {
  constructor() {
    this.theme = this.theme || 'light';
    this.mode = this.mode || 'vertical';
    this.onSelect = this.onSelect || noop;
    this.inlineIndent = this.inlineIndent || 24;
  }
}

function noop() {

}


export default MenuController;
