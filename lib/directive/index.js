'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dateModelFormat = require('./dateModelFormat.js');

var _dateModelFormat2 = _interopRequireDefault(_dateModelFormat);

var _dateViewFormat = require('./dateViewFormat.js');

var _dateViewFormat2 = _interopRequireDefault(_dateViewFormat);

var _bpFieldError = require('./bpFieldError.js');

var _bpFieldError2 = _interopRequireDefault(_bpFieldError);

var _bpLargeThan = require('./bpLargeThan.js');

var _bpLargeThan2 = _interopRequireDefault(_bpLargeThan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpDirectives = angular.module('bp.directives', []).directive('dateModelFormat', function () {
  return _dateModelFormat2.default;
}).directive('dateViewFormat', function () {
  return _dateViewFormat2.default;
}).directive('bpFieldError', function ($compile) {
  'ngInject';

  return new _bpFieldError2.default($compile);
}).directive('bpLargeThan', function () {
  return new _bpLargeThan2.default();
}).filter('error', function (Errors) {
  return function (name, customMessages) {
    if (customMessages) {
      customMessages = JSON.parse(customMessages);
    }

    var errors = angular.extend({}, Errors, customMessages);
    console.info('extended errors', errors);

    return errors[name] || name;
  };
}).constant('Errors', {
  email: '不是有效格式的邮件地址',
  url: '不是有效格式的url',
  required: '此项不能为空',
  same: '此项必须与密码相同',
  max: '超过上限',
  min: '低于下限',
  number: '必须为数字',
  parse: '根据验证规则，已重置无效值'
});

exports.default = bpDirectives;