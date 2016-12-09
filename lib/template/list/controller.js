'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = require('./default.config.js');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListController = function () {
  function ListController(NgTableParams, $http) {
    'ngInject';

    var _this = this;

    _classCallCheck(this, ListController);

    this.name = 'list';
    this.$http = $http;
    this.config = Object.assign({}, _defaultConfig2.default, this.config);
    this.datepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'YYYY-MM-DD HH:mm:ss'
    };

    this.tableParams = new NgTableParams({
      count: 10 //每页几条
    }, {
      counts: [],
      getData: function getData(params) {
        var paramData = angular.extend({
          p: params.url().page
        }, _this.form);
        _this.loading = true;
        return $http({
          url: _this.config.url,
          method: "GET",
          params: paramData
        }).then(function (response) {
          params.total(response.data.data.totalCount); //帮你分几页
          _this.loading = false;
          return response.data && response.data.data.list;
        });
      }
    });
  }

  _createClass(ListController, [{
    key: 'hasType',
    value: function hasType(field) {
      return field.type;
    }
  }, {
    key: 'refreshOptions',
    value: function refreshOptions(url, paramField, name, keyWord) {
      var _this2 = this;

      var param = _defineProperty({}, paramField, keyWord);
      this.$http({
        url: url,
        method: "GET",
        params: param
      }).then(function (data) {
        _this2[name + 'List'] = data && data.data && data.data.data;
        return data && data.data && data.data.data;
      });
    }
  }, {
    key: 'search',
    value: function search() {
      this.tableParams.parameters({ page: 1 }).reload();
    }
  }]);

  return ListController;
}();

exports.default = ListController;