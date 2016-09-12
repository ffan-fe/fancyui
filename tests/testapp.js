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
angular.module('app', [
  ButtonTest.name,
  CheckboxTest.name,
  RadioTest.name,
  Transfer.name,
  Datetimepicker.name
])
  .controller('testApp',($scope)=>{
    $scope.menus = [
      'button',
      'checkbox',
      'radio',
      'transfer',
      'datetimepicker'
    ];
  });

