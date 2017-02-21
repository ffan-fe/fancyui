/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Fri Feb 17 2017 20:05:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */
import 'angular-animate';

import navmenuComponent from './navmenu.component';

let navmenuModule = angular.module('f-navmenu', [
  'ngAnimate'
])

.component('fNavmenu', navmenuComponent);

export default navmenuModule;
