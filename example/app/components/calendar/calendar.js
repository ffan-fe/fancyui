import calendarComponent from './calendar.component.js';
import Calendar from '../../../../lib/Calendar/index.js';

export default angular.module('calendar', [
		Calendar.name
	])
	/**
	 * 轻在routerConfig.js里定义路由
	 */
	.component('calendar', calendarComponent);
