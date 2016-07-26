/**
 * ui tests entry
 */
// console.log('ui tests entry');
import './testapp.less';
import 'bp-admin-skin';
import angular from 'angular';
import ButtonTest from './button';
import CheckboxTest from './checkbox';
import RadioTest from './radio';
import Transfer from './transfer';
angular.module('app', [
  ButtonTest.name,
  CheckboxTest.name,
  RadioTest.name,
  Transfer.name,
  RadioTest.name
]);

