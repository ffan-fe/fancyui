import listComponent from './list.component';
import bpAjax from 'bp-ajax';
import {Template} from 'fancyui';

export default angular.module('list', [
		bpAjax.name,
		Template.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('list', listComponent);
