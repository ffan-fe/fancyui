/**
 * Timepicker component entry
 * @author name
 */

import angular from 'angular';
import 'jquery';
import 'bootstrap';
import 'angular-bootstrap-datetimepicker';
import 'angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
import 'angular-bootstrap-datetimepicker/src/js/datetimepicker.templates';
import component from './timepicker.component';

'use strict';

export default angular.module('Timepicker', ['ui.bootstrap.datetimepicker'])
  .component('bpTimepicker', component);
