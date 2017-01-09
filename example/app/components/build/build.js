import buildComponent from './build.component.js';
export default angular.module('build', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('build', buildComponent);


