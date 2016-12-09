'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateViewFormatDirective = {
  require: 'ngModel',
  restrict: 'A',
  link: function link(scope, element, attrs, ngModelCtrl) {
    var format = scope.$eval(attrs.dateViewFormat);
    if (!format) {
      return;
    }
    var modelFormat = scope.$eval(attrs.dateModelFormat);
    ngModelCtrl.$formatters.push(function (value) {
      if (value) {
        /*console.log(format);
         console.log(value);
         console.log('format 前', value);
         console.log('format 后', moment(value).format(format));*/
        return modelFormat == 'X' || modelFormat == 'x' ? (0, _moment2.default)(parseInt(value)).format(format) : (0, _moment2.default)(value).format(format);
      }
    });
  }
};

exports.default = dateViewFormatDirective;