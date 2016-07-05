/**
 * ui tests entry
 */

import angular from 'angular';
import './testapp.less';
import 'bp-admin-skin';

import ButtonTest from './button';
import CheckboxTest from './checkbox';
import RadioTest from './radio';
import Transfer from './transfer';

angular.module('app', [
  ButtonTest.name, 
  CheckboxTest.name,
  RadioTest.name,
  Transfer.name
]);