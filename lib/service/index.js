'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = require('./alert/alert.js');

var _alert2 = _interopRequireDefault(_alert);

var _hint = require('./hint/hint.js');

var _hint2 = _interopRequireDefault(_hint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('bp.services', []).config(function ($httpProvider) {
  'ngInject';

  $httpProvider.defaults.withCredentials = true;
}).service({
  AlertService: _alert2.default
}).service({
  HintService: _hint2.default
});