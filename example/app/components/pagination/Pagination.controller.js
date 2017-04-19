/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Sat Mar 04 2017 22:22:48 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

import Base from '../../base';
export default class PaginationController extends Base{
  constructor($state,$translate) {
    'ngInject';
    super($state,$translate)

    this.onChange = page => {
      console.log('page: ' + page);
    };

    this.total = 500;

    this.showTotal = (total) => {
      return `total ${total} items`
    }
  }
}
