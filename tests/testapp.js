/**
 * ui tests entry
 */

import angular from 'angular';
import './testapp.less';
import 'bp-admin-skin';

import ButtonTest from './button';
import CheckboxTest from './checkbox';

  
angular.module('app', [
  ButtonTest.name, 
  CheckboxTest.name
]);