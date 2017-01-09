import tabsComponent from './tabs.component.js';

export default angular.module('tabs', [])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('tabs', tabsComponent);
