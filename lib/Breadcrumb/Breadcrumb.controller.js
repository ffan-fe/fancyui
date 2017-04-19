/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Apr 19 2017 11:18:31 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Breadcrumb
 */

class BreadcrumbController {
  constructor() {
    if (!this.datasource || !Array.isArray(this.datasource) || !this.datasource.length) {
      this.datasource = null;
    }

    if (!this.separator) {
      this.separator = '/';
    }

    if (!this.onClick || typeof this.onClick != 'function') {
      this.onClick = () => {}
    }
  }
}

export default BreadcrumbController;
