'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listModule = angular.module('listTpl', []).component('listTpl', _component2.default);

exports.default = listModule;