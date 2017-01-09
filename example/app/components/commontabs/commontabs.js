import commontabsComponent from './commontabs.component.js';
import service from './commontabs.controller.js';

export default angular.module('commonTabs', [])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('commonTabs', commontabsComponent)
	.service('TabsService', service);
