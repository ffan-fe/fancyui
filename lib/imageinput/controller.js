'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = require('./default.config.js');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Datepicker = function () {
  function Datepicker(Upload) {
    _classCallCheck(this, Datepicker);

    this.Upload = Upload;
  }

  /**
   * 上传图片
   */


  _createClass(Datepicker, [{
    key: 'uploadFile',
    value: function uploadFile(file, errFile) {
      var _this = this;

      var errInfo = this.catchErrFileError(errFile);
      if (errInfo && errInfo['data']) {
        alert(errInfo && errInfo['msg']);
        return;
      }

      if (!!file) {
        var options = {
          fileName: file,
          fileSize: 5242880,
          fileType: angular.toJson(['jpg', 'jpeg', 'png']),
          width: file && file.$ngfWidth,
          height: file && file.$ngfHeight,
          minWidth: 640,
          minHeight: 640
        };

        this.commonSvc.upload(options).then(function (response) {
          if (response) {
            _this.pics.push({
              src: response && response.data && response.data.url
            });
          }
        });
      }
    }
  }]);

  return Datepicker;
}();

exports.default = Datepicker;