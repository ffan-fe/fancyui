'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @ngdoc service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name AlertService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * alert, confirm的替代
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * **Methods**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - `alert(config)` - 此方法会弹出一个alert弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    参数`config`是可选的, 可用值是
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - title:   String   - 弹窗的标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - content:  String     - 弹窗的内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - hint: Array    -更多的内容，以列表的形式展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * - `confirm(config)` - 此方法会弹出一个alert弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮, `reject`表示用户点击了取消按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    参数`config`是可选的, 可用值是
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - title:   String   - 弹窗的标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      - contents:  Array     - 弹窗的内容,以列表的形式展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   AlertService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.alert({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           title: "测试",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           content: "你好，我是警告"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.then(function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           alert("你刚才点了确定");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *AlertService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.alert({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          title: "测试",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          content: "你好，我是警告",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          hint: ["操作提示1", "如果想要在操作的时候给点提示，那就写在这里"]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.then(function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *          alert("你刚才点了确定");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *        });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *AlertService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.confirm({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           title: "测试",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           contents: ["你好，确定要删除以下内容吗？", "aaa, bbb"]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *.then(function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           alert("你刚才点了确定");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         }, function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *           alert("你刚才点了取消");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _alert = require('./alert.html');

var _alert2 = _interopRequireDefault(_alert);

var _zindex = require('../zindex.js');

var _zindex2 = _interopRequireDefault(_zindex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var remove = function remove(array, element) {
  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

var AlertService = function () {
  function AlertService($document, $q, $rootScope, $compile) {
    'ngInject';

    _classCallCheck(this, AlertService);

    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.dialogArr = [];

    this.dialogCounter = 0;
    this.zIndex = _zindex2.default.Alert;

    this.mask = angular.element('<div class="modal-backdrop fade in"></div>');
    this.mask.css("z-index", this.zIndex);
  }

  _createClass(AlertService, [{
    key: 'alert',
    value: function alert(param) {
      var _this = this;

      var defer = this.$q.defer();

      var dialog = void 0;
      this.dialogCounter++;

      if (this.dialogCounter == 1) {
        this.$document.find('body').append(this.mask);
      }

      var data = Object.assign(this.$rootScope.$new(), param);

      data.ok = function () {
        _this.dismiss(dialog);
        defer.resolve('ok');
      };

      dialog = this.$compile(angular.element(_alert2.default))(data);

      this.$document.find('body').append(dialog);
      dialog.css('display', 'block');
      dialog.css('z-index', this.zIndex + this.dialogCounter);

      this.dialogArr.push(dialog);

      return defer.promise;
    }
  }, {
    key: 'confirm',
    value: function confirm(param) {
      var _this2 = this;

      var defer = this.$q.defer();

      var dialog = void 0;
      this.dialogCounter++;

      if (this.dialogCounter == 1) {
        this.$document.find('body').append(this.mask);
      }

      var data = Object.assign(this.$rootScope.$new(), param);

      data.ok = function () {
        _this2.dismiss(dialog);
        defer.resolve('ok');
      };

      data.cancel = function () {
        _this2.dismiss(dialog);
        defer.reject('cancel');
      };

      dialog = this.$compile(angular.element(_alert2.default))(data);

      this.$document.find('body').append(dialog);
      dialog.css('display', 'block');
      dialog.css('z-index', this.zIndex + this.dialogCounter);

      this.dialogArr.push(dialog);

      return defer.promise;
    }
  }, {
    key: 'dismiss',
    value: function dismiss(dialog) {
      this.dialogCounter--;
      dialog.remove();

      if (this.dialogCounter == 0) {
        this.mask.remove();
      }

      remove(this.dialogArr, dialog);
    }
  }, {
    key: 'dismissAll',
    value: function dismissAll() {
      while (this.dialogArr.length > 0) {
        this.dismiss(this.dialogArr[0]);
      }
    }
  }]);

  return AlertService;
}();

exports.default = AlertService;