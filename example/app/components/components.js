/**
 * components
 * @author name emailAddress
 */

import 'angular-highlightjs';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import popup from './popup/popup';

import 'angular-ui-tree';

let componentModule = angular.module('app.components', [
	uiRouter,
	popup.name,
	'hljs'
])
.filter('html',function($sce){
    "ngInject";
    return function(text){
        if(text){
        return $sce.trustAsHtml(text);
        }
        return '';
    }
    });

export default componentModule;

