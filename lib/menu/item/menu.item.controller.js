/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

class MenuItemController {
  constructor($element, $scope) {
    'ngInject'
    this.$element = $element;
    this.$scope = $scope;
  }

  $onInit() {
    this.isSelected = this.fMenu.defaultSelectedKeys && Array.isArray(this.fMenu.defaultSelectedKeys) && this.fMenu.defaultSelectedKeys.includes(this.key);
    this.$scope.$watch('vm.fMenu.defaultSelectedKeys', (newValue, oldValue) => {
      this.isSelected = this.fMenu.defaultSelectedKeys && Array.isArray(this.fMenu.defaultSelectedKeys) && this.fMenu.defaultSelectedKeys.includes(this.key);
    });
  }

  onItemSelect(e) {
    if (this.disabled) {
      return;
    }
    this.isSelected = true;
    this.fMenu.onSelect({item: this.$element, key: this.key});

    this.fMenu.defaultSelectedKeys = [this.key];
    //this.$rootScope.$digest()
  }
}

export default MenuItemController;
