import alertComponent from './alert.component.js';
import Service from '../../../../lib/service/index.js';

export default angular.module('alert', [
		Service.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('alert', alertComponent);
