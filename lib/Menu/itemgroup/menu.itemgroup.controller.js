/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

class MenuItemController {
  constructor($element) {
    'ngInject'
    this.$element = $element;
  }

  $onInit() {
    this.$element.find('div').html(this.title);
  }
}

export default MenuItemController;
