/**
 * (description)
 *
 * @author yourname
 */

export default class CalendarController {
	constructor($state) {
		'ngInject';
		this.$state = $state;
		this.model = '2016-10-30 12:02:00';                        //默认时间

		this.dataConfig = {
			startView:'day',
			minuteStep: 20,
			modelType: 'YYYY-MM-DD HH:mm:ss',
			minView: 'minute'
		}
	}

	beforeRender($view, $dates, $leftDate, $upDate, $rightDate){
		console.log(arguments);
	}

	onSetTime(newDate, oldDate) {
		console.log('newDate', newDate);
		console.log('oldDate', oldDate);
	}
}