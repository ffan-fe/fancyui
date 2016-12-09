'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by fjywan on 16/8/11.
                                                                                                                                                           */


var BpFieldError = function BpFieldError($compile) {
  _classCallCheck(this, BpFieldError);

  this.restrict = "A";
  this.require = 'ngModel';

  this.link = function (scope, element, attrs, ngModel) {
    var subScope = scope.$new(true);

    subScope.hasError = function () {
      return ngModel.$invalid && ngModel.$dirty;
    };
    subScope.errors = function () {
      return ngModel.$error;
    };
    subScope.customMessages = attrs.bpFieldError;

    var customSelector = attrs.bpFieldErrorSelector;

    var hint = $compile('<ul class="bp-field-error" ng-if="hasError()"><li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name|error:customMessages}}</li></ul>')(subScope);

    if (customSelector) {
      console.warn(customSelector);
      console.warn((0, _jquery2.default)(customSelector));
      (0, _jquery2.default)(customSelector).html(hint);
    } else {
      element.after(hint);
    }
  };
};

exports.default = BpFieldError;