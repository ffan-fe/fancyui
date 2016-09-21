/**
 * Datetimepicker component entry
 * @author name
 */
import 'bp-datetimepicker';
import 'bp-datetimepicker/src/css/datetimepicker.css';
import 'bp-datetimepicker/src/js/datetimepicker.templates';
import component from './datetimepicker.component';
import moment from 'moment';
moment.locale('zh-cn');
moment.defineLocale('bp-datetimepicker-zh-cn', {
  parentLocale: 'zh-cn',
  meridiem :  () =>{
    return ''
  },
  longDateFormat : {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'MM/DD/YYYY',
    LL: 'MMMM Do YYYY',
    LLL: 'MMMM Do YYYY LT',
    LLLL: 'dddd, MMMM Do YYYY LT'
  }
});

'use strict';

export default angular.module('Datetimepicker', [
  'ui.bootstrap.datetimepicker'
])
  .component('bpDatetimepicker', component);
