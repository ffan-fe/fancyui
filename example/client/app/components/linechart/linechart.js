import linechartComponent from './linechart.component';
import {Charts} from 'fancyui';

export default angular.module('lineChart', [
		Charts.name
	])
.component('lineChart', linechartComponent);
