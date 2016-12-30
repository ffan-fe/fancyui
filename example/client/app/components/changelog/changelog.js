import changelogComponent from './changelog.component';
export default angular.module('changeLog', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('changeLog', changelogComponent);
