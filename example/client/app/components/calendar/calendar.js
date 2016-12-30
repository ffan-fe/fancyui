import calendarComponent from './calendar.component';
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import {Datetimepicker} from 'fancyui';

export default angular.module('calendar', [
		Datetimepicker.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('calendar', calendarComponent);
