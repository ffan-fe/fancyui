/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 03 2017 17:29:57 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';
import menuComponent from './menu.component';
import menuItemComponent from './item/menu.item.component.js';
import menuSubMenuComponent from './submenu/menu.submenu.component.js';
import menuItemGroupComponent from './itemgroup/menu.itemgroup.component.js';

let menuModule = angular.module('f.menu', [
  uiRouter,
  'ngAnimate'
])
.component('fMenu', menuComponent)
.directive('menuItem', () => menuItemComponent)
.directive('subMenu', () => menuSubMenuComponent)
.directive('menuItemGroup', () => menuItemGroupComponent);

export default menuModule;
