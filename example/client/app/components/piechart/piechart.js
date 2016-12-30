import piechartComponent from './piechart.component';
import {Charts} from 'fancyui';

export default angular.module('pieChart', [
	Charts.name
])
.component('pieChart', piechartComponent);
