/**
 * ui tests entry
 */

import angular from 'angular';
import './testapp.less';
import 'bp-admin-skin';

import ButtonTest from './button';
import CheckboxTest from './checkbox';
import RadioTest from './radio';


angular.module('app', [
  ButtonTest.name, 
  CheckboxTest.name,
  RadioTest.name
]);