'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./datepicker/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./rangepicker/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./checkboxtree/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./multiselect/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentModule = angular.module('bp.components', [_index2.default.name, _index4.default.name, _index6.default.name, _index8.default.name]);
exports.default = componentModule;