import gaugechartComponent from './gaugechart.component';
import {Charts} from 'fancyui';

export default angular.module('gaugeChart', [
	Charts.name
])
.component('gaugeChart', gaugechartComponent);
