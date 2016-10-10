/**
 * ui tests entry
 */
import './testapp.less';
import 'bp-admin-skin';
import angular from 'angular';
import ButtonTest from './button';
import CheckboxTest from './checkbox';
import RadioTest from './radio';
import Transfer from './transfer';
import Datetimepicker from './datetimepicker';
import alertTest from './alert/index.js';
import hintTest from './hint';
angular.module('app', [
  ButtonTest.name,
  CheckboxTest.name,
  RadioTest.name,
  Transfer.name,
  Datetimepicker.name,
  alertTest.name,
  hintTest.name
])
  .controller('testApp',($scope)=>{
    $scope.menus = [
      'button',
      'checkbox',
      'radio',
      'transfer',
      'datetimepicker',
      'hint',
      'alert'
    ];
  });

