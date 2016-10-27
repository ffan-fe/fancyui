import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './ui.component';
import ButtonShow from './button/'
import CheckboxShow from './checkbox';
import RadioboxShow from './radiobox';
import TransferShow from './transfer';
import CitySelector from './cityselector';
import Datetimepicker from './datetimepicker';
import alertTest from './alert/index.js';
import hintTest from './hint/index.js';
import GetStarted from './get-started/get-started';
import popConfirm from './popconfirm';

import 'bp-admin-skin'

import nav from './nav/nav'

import './ui.less';

'use strict';

angular.module('exampleapp', [
  uiRouter,
  ButtonShow.name,
  CheckboxShow.name,
  RadioboxShow.name,
  TransferShow.name,
  CitySelector.name,
  Datetimepicker.name,
  alertTest.name,
  hintTest.name,
  GetStarted.name,
  nav.name,
  popConfirm.name
])
  //.component('ui', component)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('button', {
        url: '/button',
        template: '<button-show></button-show>'
      })
      .state('checkbox', {
        url: '/checkbox',
        template: '<checkbox-show></checkbox-show>'
      })
      .state('radiobox', {
        url: '/radiobox',
        template: '<radiobox-show></radiobox-show>'
      })
      .state('transfer', {
        url: '/transfer',
        template: '<transfer-show></transfer-show>'
      })
      .state('cityselector', {
        url: '/cityselector',
        template: '<city-selector-show></city-selector-show>'
      })
      .state('datetimepicker', {
        url: '/datetimepicker',
        template: '<datetimepicker-show></datetimepicker-show>'
      })
      .state('getstarted', {
        url: '/getstarted',
        template: '<ui-get-started></ui-get-started>'
      })
      .state('popconfirm', {
        url: '/popconfirm',
        template: '<pop-confirm-show></pop-confirm-show>'
      });

    $urlRouterProvider.otherwise('/button');
  });
