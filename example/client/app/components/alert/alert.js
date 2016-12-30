import alertComponent from './alert.component';
import {Service} from 'fancyui';

export default angular.module('alert', [
		Service.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('alert', alertComponent);
