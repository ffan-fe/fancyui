'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by fjywan on 16/8/11.
 */

var BpLargeThan = function BpLargeThan() {
  _classCallCheck(this, BpLargeThan);

  this.restrict = "A";
  this.require = 'ngModel';

  this.link = function (scope, element, attrs, ngModel) {
    var theOther = scope.$eval(attrs.bpLargeThan);
    var theForm = scope.$eval(attrs.bpLargeThanForm);
    console.warn('theOther!!!!!!', theForm);

    if (!theOther || !theForm) {
      return;
    }

    var isLargeThan = function isLargeThan(value) {
      switch (theOther.type) {
        case 'date':
          return theForm[theOther.which] ? moment(theForm[theOther.which]).format('X') < moment(value).format('X') : true;
          break;
        default:
          return theForm[theOther.which] < value;
      }
    };

    ngModel.$parsers.push(function (value) {
      ngModel.$setValidity('large', isLargeThan(value));
      return isLargeThan(value) ? value : undefined;
    });

    scope.$watch(function () {
      return theForm[theOther.which];
    }, function () {
      ngModel.$setValidity('large', isLargeThan(ngModel.$modelValue));
    });
  };
};

exports.default = BpLargeThan;