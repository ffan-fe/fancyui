'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @ngdoc service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name HintService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 消息通知类的alert可以用这个
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * **Methods**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - `hint(config)` - 此方法会在右上角浮出一个弹窗.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    参数`config`是可选的, 可用值是
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - title:   String   - 弹窗的标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - content:  String     - 弹窗的内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   HintService.hint({title: "我操作成功了", content: "结果是：" + $scope.hintContent})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _hint = require('./hint.html');

var _hint2 = _interopRequireDefault(_hint);

require('./hint.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HintService = function () {
  function HintService($document, $q, $rootScope, $compile) {
    'ngInject';

    _classCallCheck(this, HintService);

    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.container = angular.element("<div class='bp-hint-container'>");
    this.$document.find("body").append(this.container);
  }

  _createClass(HintService, [{
    key: 'hint',
    value: function hint(param) {
      var data = Object.assign(this.$rootScope.$new(), param);

      var hint = this.$compile(_hint2.default)(data);

      hint.css('display', 'block');

      this.container.prepend(hint);

      setTimeout(function () {
        return hint.addClass('in');
      }, 10);

      setTimeout(function () {
        hint.removeClass('in');

        setTimeout(function () {
          return hint.remove();
        }, 500);
      }, 5000);
    }
  }]);

  return HintService;
}();

exports.default = HintService;