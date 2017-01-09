import piechartComponent from './piechart.component.js';
import Charts from '../../../../lib/charts/index.js';

export default angular.module('pieChart', [
	Charts.name
])
.component('pieChart', piechartComponent);
