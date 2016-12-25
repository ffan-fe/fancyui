import ffanCustomTableComponent from './ffanCustomTable.component';
import ffanTable from '../ffanTable/';

export default angular.module('ffanCustomTable', [
		ffanTable.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('ffanCustomTable', ffanCustomTableComponent);
