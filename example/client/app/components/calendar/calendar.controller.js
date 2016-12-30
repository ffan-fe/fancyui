/**
 * (description)
 *
 * @author yourname
 */

export default class CalendarController {
	constructor($state) {
		'ngInject';
		this.$state = $state;
		this.type = 'range';                                       //展示范围时间
		this.model = '2016-10-30 12:02:00';                         //默认时间
		this.startModel = '2016-10-30 13:12:00';              //开始时间
		this.placeholders = ['活动开始时间', '活动结束时间'];          //placeholders
		this.separator = '至';                                      //分隔符
		this.startDisabled = true;                                 //开始时间不可选
		this.minTime = '2016-09-09 09:09:00';                                  //最小时间
		this.maxTime = '2018-09-09 09:09:00';                                 //最大时间
		this.startView = 'month';                                   //开始的时间
		this.minView = 'month';                                     //最小视图
		this.startDisabled = true;
		this.minuteStep = 10;
	}
}