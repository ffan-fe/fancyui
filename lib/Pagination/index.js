/**
 * @description xxxx
 *
 * @author fuzhiyuan@wandan.cn
 * @date Sat Mar 04 2017 22:22:48 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

import PaginationComponent from './Pagination.component';
import Select from '../Select'
import fEnter from './f-enter.js'
import fBindHtml from './f-bind-html.js'
import fCustomForm from './f-custom-form.js'

let PaginationModule = angular.module('f-Pagination', [
  Select.name
])
.directive('fEnter', () => fEnter)
.directive('fBindHtml', () => fBindHtml)
.directive('fCustomForm', ($compile) => {
    'ngInject'
    return fCustomForm($compile);
  })

.component('fPagination', PaginationComponent);

export default PaginationModule;
