import linechartComponent from './linechart.component.js';
import Charts from '../../../../lib/charts/index.js';

export default angular.module('lineChart', [
		Charts.name
	])
.component('lineChart', linechartComponent);
