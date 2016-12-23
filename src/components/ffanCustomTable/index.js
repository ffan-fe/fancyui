import ffanCustomTableComponent from './ffanCustomTable.component';
import {ngTableModule} from 'ng-table';

export default angular.module('ffanCustomTable', [
		ngTableModule.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('ffanCustomTable', ffanCustomTableComponent);
