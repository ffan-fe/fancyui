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
			minuteStep: 1,
			modelType: 'YYYY-MM-DD HH:mm:ss',
			minView: 'minute'
		}
	}

	onSetTime(newDate, oldDate) {
		console.log('newDate', newDate);
		console.log('oldDate', oldDate);
	}
}