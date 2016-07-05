/**
 * ui tests entry
 */
console.log('ui tests entry');
import angular from 'angular';
import './testapp.less';
import 'bp-admin-skin';
import ButtonTest from './button';
import CheckboxTest from './checkbox';
import RadioTest from './radio';
import RangepickerTest from './rangepicker';
import Datepicker from './datepicker/app.js'

angular.module('app', [
  ButtonTest.name,
  CheckboxTest.name,
  RadioTest.name,
  Datepicker.name,
  RangepickerTest.name
]);
