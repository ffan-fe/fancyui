'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _button = require('./button.component');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
               * @ngdoc overview
               * @name button
               * @description
               * 
               * # Button component module
               * 
               * module name is **Button**
               * 
               * <pre>
               * import {Button} from 'anaheim';
               * angular.module('myApp', [Button.name]);
               * </pre>
               */

exports.default = _angular2.default.module('Button', [_icon2.default.name]).component('bpButton', _button2.default);