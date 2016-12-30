import popconfirmComponent from './popconfirm.component';
import {PopConfirm} from 'fancyui';

export default angular.module('popConfirm', [
		PopConfirm.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('popConfirm', popconfirmComponent);
