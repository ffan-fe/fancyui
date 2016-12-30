import commontabsComponent from './commontabs.component';
import service from './commontabs.controller';

export default angular.module('commonTabs', [])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('commonTabs', commontabsComponent)
	.service('TabsService', service);
