/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Mon Mar 20 2017 16:54:25 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/OmniTable
 */

import OmniTableComponent from './OmniTable.component';
import Pagination from '../Pagination/index.js'

let OmniTableModule = angular.module('f-OmniTable', [
  Pagination.name
])

.component('fOmniTable', OmniTableComponent);

export default OmniTableModule;
