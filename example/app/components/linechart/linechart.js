import linechartComponent from './linechart.component.js';
import Charts from '../../../../lib/Charts/index.js';

export default angular.module('lineChart', [
		Charts.name
	])
.component('lineChart', linechartComponent);
