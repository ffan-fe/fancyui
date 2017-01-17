/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 17 2017 17:11:29 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/calendar
 */

import calendarComponent from './calendar.component';
import dateTimePicker from '../datetimepicker/';

let calendarModule = angular.module('f-calendar', [
  dateTimePicker.name
])

.component('fCalendar', calendarComponent);

export default calendarModule;
