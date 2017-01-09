import listComponent from './list.component.js';
import Template from '../../../../lib/template/index.js';

export default angular.module('list', [
		Template.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('list', listComponent);
