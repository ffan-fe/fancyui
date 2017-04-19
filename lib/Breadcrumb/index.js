/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Apr 19 2017 11:18:31 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Breadcrumb
 */

import BreadcrumbComponent from './Breadcrumb.component';
import Directive from '../Directive/index';

let BreadcrumbModule = angular.module('f-Breadcrumb', [
  Directive.name
])

.component('fBreadcrumb', BreadcrumbComponent);

export default BreadcrumbModule;
