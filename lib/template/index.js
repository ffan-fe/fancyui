'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./form/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./list/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateModule = angular.module('template', [_index2.default.name, _index4.default.name]);

exports.default = templateModule;