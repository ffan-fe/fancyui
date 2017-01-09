import generatecomponentComponent from './generatecomponent.component.js';
export default angular.module('generateComponent', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('generateComponent', generatecomponentComponent);
