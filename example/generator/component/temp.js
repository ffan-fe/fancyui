import <%= name %>Component from './<%= name %>.component';
export default angular.module('<%= name %>', [])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('<%= name %>', <%= name %>Component);
