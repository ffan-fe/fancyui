'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = require('./default.config.js');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _fixurl = require('../tool/fixurl');

var _fixurl2 = _interopRequireDefault(_fixurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiselectController = function () {
  function MultiselectController($http, NgTableParams) {
    'ngInject';

    var _this = this;

    _classCallCheck(this, MultiselectController);

    this.name = 'multiselect';
    this.checkedItems = this.checkedItems ? this.checkedItems : []; //保存选中条目的数组
    this.config = Object.assign({}, _defaultConfig2.default, this.config);
    this.idField = this.config.uniqueField;
    //标识是否返回整条信息，默认返回uniqueField值的数组
    this.flag = this.config.returnModel && this.config.returnModel == 'all';
    this.listConfig = {
      url: (0, _fixurl2.default)(this.config.url),
      //生成表格的字段
      fields: this.config.tableFields
    };
    this.tableParams = new NgTableParams({
      count: this.config.tableConfig.limit || 10 //每页几条
    }, {
      counts: [],
      getData: function getData(params) {
        var _angular$extend;

        var paramData = angular.extend((_angular$extend = {}, _defineProperty(_angular$extend, _this.config.tableConfig.pageName, params.url().page), _defineProperty(_angular$extend, 'limit', _this.config.tableConfig.limit), _angular$extend), _this.form);
        _this.loading = true;
        return $http({
          url: _this.listConfig.url,
          method: "GET",
          params: paramData
        }).then(function (response) {
          params.total(response.data.totalCount); //帮你分几页
          _this.loading = false;
          _this.responseFormat(response.data.items);
          return response.data && response.data.items;
        });
      }
    });

    this.config.initContrl ? this.config.initContrl(this) : '';

    this.search = function () {
      this.tableParams.parameters({ page: 1 }).reload();
    };
  }

  /**
   * 重置查询表单
   * 注意：select的model要重置为"";
   */


  _createClass(MultiselectController, [{
    key: 'resetForm',
    value: function resetForm() {
      var _this2 = this;

      this.form = {};
      if (this.config.queryFields.length) {
        this.config.queryFields.forEach(function (item) {
          item.type === 'select' ? _this2.form[item.name] = '' : '';
        });
      }
    }

    /**
     * 单条数据checked字段改变处理函数：
     * 更新保存选中条目的数组
     * @param row
     */

  }, {
    key: 'checkedChangeHandler',
    value: function checkedChangeHandler(row, data) {
      var _this3 = this;

      if (row.checked) {
        (function () {
          var count = 0;
          if (_this3.flag) {
            _this3.checkedItems.push(row);
          } else {
            _this3.checkedItems.push(row[_this3.idField]);
          }
          data.forEach(function (item) {
            item.checked ? count++ : '';
          });
          if (count == data.length) {
            _this3.isAllChecked = true;
          }
          _this3.checkedItems = angular.copy(_this3.checkedItems);
        })();
      } else {
        this.isAllChecked = false;
        if (this.flag) {
          this.remove(this.checkedItems, row[this.idField], true, this.idField);
        } else {
          this.remove(this.checkedItems, row[this.idField]);
        }
        this.checkedItems = angular.copy(this.checkedItems);
      }
    }

    /**
     * 全选处理函数：
     * 只负责改变当前页每条数据的checked状态,
     * 更新保存选中条目的数组交给checkedChangeHandler
     * @param isAllChecked
     * @param data
     */

  }, {
    key: 'allCheckedChangeHandler',
    value: function allCheckedChangeHandler(isAllChecked, data) {
      var _this4 = this;

      if (isAllChecked) {
        data.forEach(function (item) {
          item.checked = true;
          var isInclude = false; //标识是否checkedItems中包含指定的item
          if (_this4.flag) {
            _this4.checkedItems.forEach(function (ele) {
              if (item[_this4.idField] == ele[_this4.idField]) {
                isInclude = true;
              }
            });
          } else {
            isInclude = _this4.checkedItems.includes(item[_this4.idField]);
          }
          if (!isInclude) {
            _this4.checkedChangeHandler(item, data);
          }
        });
      } else {
        data.forEach(function (item) {
          item.checked = false;
          _this4.checkedChangeHandler(item);
        });
      }
    }

    /**
     * 返回单页数据后，根据已有的checkedItems添加checked属性
     * @param response
     */

  }, {
    key: 'responseFormat',
    value: function responseFormat(response) {
      var _this5 = this;

      var count = 0;
      if (!response) {
        response = [];
      }
      if (response.length && angular.isFunction(response.forEach)) {
        response.forEach(function (item) {
          var isInclude = false; //标识是否checkedItems中包含指定的item
          if (_this5.flag) {
            _this5.checkedItems.forEach(function (ele) {
              if (item[_this5.idField] == ele[_this5.idField]) {
                isInclude = true;
              }
            });
          } else {
            isInclude = _this5.checkedItems.includes(item[_this5.idField]);
          }
          if (isInclude) {
            count++;
            item.checked = true;
          } else {
            item.checked = false;
          }
        });
      }
      //修复数据条数为零全选的bug
      count == response.length && response.length ? this.isAllChecked = true : this.isAllChecked = false;
    }

    /**
     * 以下是工具函数
     */
    /**
     * 从array中移除element
     * @param array
     * @param element
     * @param isObject 指示element是否为object
     * @param idFeild 唯一标识每一行的字段
     */

  }, {
    key: 'remove',
    value: function remove(array, element, isObject, idFeild) {
      var index = void 0;
      if (isObject) {
        array.forEach(function (item, indx) {
          if (item[idFeild] == element) {
            index = indx;
          }
        });
      } else {
        index = array.indexOf(element);
      }
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }]);

  return MultiselectController;
}();

exports.default = MultiselectController;