/**
 * bp admin entry
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';
import 'angular-ui-bootstrap';
import './skin/theme.less';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import ffanRouter from './router/router';

import './demo.css';
import requestHandleFunc from './request.js'
import responseHandleFunc from './response.js'
import translate from 'angular-translate';
import ResourceManager from './resource/index';

import routeConfig from './router/routerConfig';

angular.module('app', [
  'ngAnimate',
  uiRouter,
  'ui.bootstrap',
  ffanRouter.name,
  Common.name,
  Components.name,
/** 翻译模块 */
  translate
])
  .constant('$menuConstant', {
    DEBUG: process.env.DEBUG
  })
  .component('app', AppComponent)
/**
 * config 默认首页
 */
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/zh-cn/component/introduction');
  })
  .config(function ($httpProvider) {
    "ngInject";
    $httpProvider.interceptors.push('urlInterceptor');
  })
  .config(function ($translateProvider) {
    "ngInject";
    //console.log(new ResourceManager('en-us').extract())
    //console.log(new ResourceManager('zh-cn').extract())
    $translateProvider
      .translations('en-us', new ResourceManager('en-us').extract())
      .translations('zh-cn', new ResourceManager('zh-cn').extract());
  })
  .factory('urlInterceptor', function () {
    return {
      'request': requestHandleFunc,
      'response': responseHandleFunc,
      'responseError': responseHandleFunc
    };
  })

  .constant('$env', process.env);

console.log('process.env.DEBUG', process.env.DEBUG);
