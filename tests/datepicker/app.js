import 'angular-ui-bootstrap';
import  bpDatepicker from '../../src/components/datepicker/index.js';
import appComponent from './app.component.js';
import './angular-locale_zh-cn.js';
import moment from 'moment';
import 'bp-utils'

console.log(bpDatepicker);
export default angular.module('datepickertest', [
  bpDatepicker.name,
  'ui.bootstrap',
  'bp.utils'
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('datepicker', {
      url: '/datepicker',
      template: '<bp-datepicker-test></bp-datepicker-test>'
    });
  })
  .component('bpDatepickerTest', appComponent);
