'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateModelFormatDirective = {
  require: 'ngModel',
  restrict: 'A',
  link: function link(scope, element, attrs, ngModelCtrl) {
    var format = scope.$eval(attrs.dateModelFormat);
    if (!format) {
      return;
    }
    ngModelCtrl.$parsers.push(function (value) {
      if (value) {
        /*console.log(format);
         console.log(value);
         console.log('$parsers 前', value);
         console.log('$parsers 后', moment(value).format(format));*/
        return (0, _moment2.default)(value).format(format);
      }
    });
  }
}; /**
    * Created by fjywan on 16/6/12.
    */
exports.default = dateModelFormatDirective;