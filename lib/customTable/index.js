import ffanCustomTableComponent from './ffanCustomTable.component';
import ffanTable from '../ffanTable/';
import deprecated from '../tool/deprecated';

let app= angular.module('ffanCustomTable', [
		ffanTable.name
	])
	.component('fCustomTable', ffanCustomTableComponent)
	.component('ffanCustomTable',
		deprecated(ffanCustomTableComponent, 'ffan-custom-table','f-custom-table'));
		
export default app;
