import calendarComponent from './calendar.component.js';
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import Datetimepicker from '../../../../lib/datepicker/index.js';

export default angular.module('calendar', [
		Datetimepicker.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('calendar', calendarComponent);
