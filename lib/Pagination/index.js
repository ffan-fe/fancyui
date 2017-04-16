/**
 * @description xxxx
 *
 * @author fuzhiyuan@wandan.cn
 * @date Sat Mar 04 2017 22:22:48 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

import PaginationComponent from './Pagination.component';
import Select from '../Select'
import fCustomForm from './f-custom-form.js'
import Directive from '../Directive'

let PaginationModule = angular.module('f-Pagination', [
  Select.name,
  Directive.name
])
.directive('fCustomForm', ($compile) => {
    'ngInject'
    return fCustomForm($compile);
  })

.component('fPagination', PaginationComponent);

export default PaginationModule;
