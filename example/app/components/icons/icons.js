import iconsComponent from './icons.component.js';
import Icon from '../../../../lib/Icon/index.js';
export default angular.module('icons', [
  Icon.name
  ])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('icons', iconsComponent);
