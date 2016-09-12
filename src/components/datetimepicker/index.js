/**
 * Datetimepicker component entry
 * @author name
 */
import 'bootstrap';
import 'angular-bootstrap-datetimepicker';
import 'angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
import 'angular-bootstrap-datetimepicker/src/js/datetimepicker.templates';
import component from './datetimepicker.component';
import moment from 'moment';
moment.locale('zh-cn'); 
moment.locale('zh-cn', {
  meridiem: (hour, minute, isLowercase) => {
    return '';
  }, longDateFormat : {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "MM/DD/YYYY",
    LL: "MMMM Do YYYY",
    LLL: "MMMM Do YYYY LT",
    LLLL: "dddd, MMMM Do YYYY LT"
  }
});

'use strict';

export default angular.module('Datetimepicker', [
  'ui.bootstrap.datetimepicker'
])
  .component('bpDatetimepicker', component);
