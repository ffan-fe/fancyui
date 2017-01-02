import listComponent from './list.component';
import {Template} from 'fancyui';

export default angular.module('list', [
		Template.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('list', listComponent);
