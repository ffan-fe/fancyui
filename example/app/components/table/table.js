import tableComponent from './table.component.js';
import ffanTable from '../../../../lib/ffanTable/index.js';

export default angular.module('tableDemo', [
		ffanTable.name
])
	.component('tableDemo', tableComponent);
