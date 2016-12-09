'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formModule = angular.module('formTpl', []).component('formTpl', _component2.default);

exports.default = formModule;