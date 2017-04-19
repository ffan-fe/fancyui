/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Apr 19 2017 11:18:31 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Breadcrumb
 */

import Base from '../../base';
export default class BreadcrumbController extends Base{
  constructor($state,$translate) {
    'ngInject';
    super($state,$translate)

    this.datasource = [
      {
        name: 'Home',
        icon: '<span class="glyphicon glyphicon-home"></span>'
      },
      {
        name: 'Application Center',
        icon: ''
      },
      {
        name: 'Application List',
        icon: ''
      },
      {
        name: 'An Application',
        icon: ''
      },
    ];
    this.onClick = item => {
      console.log(item);
    };
  }
}
