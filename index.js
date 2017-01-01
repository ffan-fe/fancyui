/**
 * fancyui 的使用方式 是 
 * import {ComponentName} from fancyui;
 */
console.log('you should use fancyui by specify component name; "import {ComponentName} from fancyui;"');

var angular = require('angular');
var angularMocks = require('angular-mocks');

var testModule = angular.module('testModule',[])
.component('testModule',{
  template:'<button>testModule</button>',
  controller:function(){
    console.log('controller init');
  },
  bindings:{
    type:'@'
  }
});


