import tableComponent from './table.component';
import { ffanTable } from 'fancyui';

export default angular.module('tableDemo', [
		ffanTable.name
	])
	.component('tableDemo', tableComponent);
