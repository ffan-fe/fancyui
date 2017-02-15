/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

class MenuItemController {
  constructor($timeout, $rootScope, $element) {
    'ngInject'
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
    this.$element = $element;

    this.onTitleClick = this.onTitleClick || noop;
    this.state = {};
    this.state.isOpen = false;
    this.state.timerId = null;
  }

  $onInit() {
    this.state.isOpen = this.fMenu.defaultOpenKeys && Array.isArray(this.fMenu.defaultOpenKeys) && this.fMenu.defaultOpenKeys.includes(this.key)
    if (this.fMenu.mode == 'inline') {
      this.onMouseEnter = noop;
      this.onMouseLeave = noop;
    } else {
      this.onClick = noop;
    }

    this.$element.find('div').html(this.title);

  }

  onMouseEnter(e) {
    if (this.state.timerId) {
      this.$timeout.cancel(this.state.timerId);
    }
    this.open();
  }

  onMouseLeave(e) {
    this.state.timerId = this.$timeout(this.close.bind(this), 300)
  }

  onClick(e) {
    this.state.isOpen = !this.state.isOpen;
  }

  open() {
    this.state.isOpen = true;
  }

  close() {
    this.state.isOpen = false;
  }
}

function noop() {
}

export default MenuItemController;
