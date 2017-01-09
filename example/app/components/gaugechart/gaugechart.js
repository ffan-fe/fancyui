import gaugechartComponent from './gaugechart.component.js';
import Charts from '../../../../lib/charts/index.js';

export default angular.module('gaugeChart', [
	Charts.name
])
.component('gaugeChart', gaugechartComponent);
