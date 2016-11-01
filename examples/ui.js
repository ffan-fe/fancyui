import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'ffan-ng-table';
import 'restangular'
import 'textangular'
import 'textAngular/dist/textAngular-sanitize'
import 'textAngular/dist/textAngular.css'
import 'ui-select';
import 'ui-select/dist/select.css'

import component from './ui.component';
import ButtonShow from './button/'
import CheckboxShow from './checkbox';
import RadioboxShow from './radiobox';
import TransferShow from './transfer';
import CitySelector from './cityselector';
import Datetimepicker from './datetimepicker';
import GetStarted from './get-started/get-started';

import 'bp-admin-skin'

import nav from './nav/nav'

import fancyui from '../src/index.js'

import './ui.less';

import form from './template/form/index.js'
import list from './template/list/index.js'
import datepicker from './components/datepicker/index.js'
import checkboxtree from './components/checkboxtree/index.js'
import multiselect from './components/multiselect/index.js'
import alert from './service/alert/index.js'
import hint from './service/hint/index.js'
import generateConfig from './generateconfig/index.js'

import requestHandleFunc from './request.js'
import responseHandleFunc from './response.js'

'use strict';

angular.module('exampleapp', [
  'ngTable',
  'restangular',
  'textAngular',
  'ui.select',
  uiRouter,
  ButtonShow.name,
  CheckboxShow.name,
  RadioboxShow.name,
  TransferShow.name,
  CitySelector.name,
  Datetimepicker.name,
  GetStarted.name,
  nav.name,
  form.name,
  list.name,
  datepicker.name,
  checkboxtree.name,
  multiselect.name,
  alert.name,
  hint.name,
  generateConfig.name,
  fancyui.name
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
      });

    $urlRouterProvider.otherwise('/getstarted');
  }).config(function (RestangularProvider) {
    'ngInject'
    // add a response interceptor
    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
      let extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        console.log(data);
        // .. and handle the data and meta data
        extractedData = data.data;
      } else {
        extractedData = data;
      }
      return extractedData;
    });

  }).config(function ($httpProvider) {
    "ngInject";
    $httpProvider.interceptors.push('urlInterceptor');
  })
  .factory('urlInterceptor', function () {
    return {
      'request': requestHandleFunc,
      'response': responseHandleFunc,
      'responseError': responseHandleFunc
    };
  })
  .constant('$env', process.env);
