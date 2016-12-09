'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localData = require('./localData.js');

var _localData2 = _interopRequireDefault(_localData);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _fixurl = require('../tool/fixurl');

var _fixurl2 = _interopRequireDefault(_fixurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

/**
 * 几个区域枚举
 */
var regionType = {
  REGION: "region",
  PROVINCE: 'province',
  CITY: 'city'
};

var CitySelectorController = function () {
  /**
   * Creates an instance of CitySelectorController.
   * 
   * @param {$uib} $uibModalInstance
   * @param {$http} $http
   * @param {Boolean} isReadOnly
   * @param {Array} checkedList
   * @param {Object} database 有了这个数据集就不再发请求了
   */
  function CitySelectorController($uibModalInstance, $http, isReadOnly, checkedList, database) {
    'ngInject';

    _classCallCheck(this, CitySelectorController);

    this.$uibModalInstance = $uibModalInstance;
    this.$http = $http;
    this.isReadOnly = isReadOnly;
    this.checkedList = checkedList;
    this.database = database;
    // 做回填的时候, 也需要回填各种状态, 这里记录好有变化的省份, 然后上下检查, 比较方便
    this.fillProvinceList = [];
  }

  _createClass(CitySelectorController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      var fixDomainUrl = (0, _fixurl2.default)('/Database/coupon_component/selectCity');
      // 如果外部提供了数据集, 那么就不再发请求了
      if (this.database) {
        this.regionList = _angular2.default.copy(this.database);
        this.formatData(this.regionList);
        return;
      }
      this.loadPromise = this.$http.get(fixDomainUrl).then(function (response) {
        if (response && response.data && response.data.status == 200) {
          _this.regionList = response.data.data;
        } else {
          _this.regionList = _localData2.default.data;
        }
      },
      // 请求败了使用本地数据
      function () {
        _this.regionList = _localData2.default.data;
      }).finally(function () {
        _this.formatData(_this.regionList);
      });
    }
    /**
     * 开始对数据做一遍处理, 为子节点添加父节点ID, 这样方便查找
     * 
     * @param dataList {Array}
     */

  }, {
    key: 'formatData',
    value: function formatData(dataList) {
      var _this2 = this;

      if (dataList && _angular2.default.isArray(dataList)) {
        dataList.forEach(function (item) {
          if (item.child) {
            _this2.formatNodeData(item, item.child);
          }
        });
      }
    }
    /**
     * 为子节点设置父节点ID, 回填数据
     * 
     * @param {Object} parentNode
     * @param {Array} childList 子节点列表, 省或是市
     */

  }, {
    key: 'formatNodeData',
    value: function formatNodeData(parentNode, childList) {
      var _this3 = this;

      if (!_angular2.default.isArray(childList)) return;
      // 获取父节点的信息
      var getParentInfo = function getParentInfo(node) {
        // 大区域
        if (node.hasOwnProperty('regionId')) {
          return { parentNodeID: node.regionId, parentNodeType: regionType.REGION };
        }
        // 省
        if (node.hasOwnProperty('provinceId')) {
          return { parentNodeID: node.provinceId, parentNodeType: regionType.provinceId };
        }
        // 都不是
        return { parentNodeID: '', parentNodeType: '' };
      };
      //
      childList.forEach(function (childItem) {
        var _getParentInfo = getParentInfo(parentNode),
            parentNodeID = _getParentInfo.parentNodeID,
            parentNodeType = _getParentInfo.parentNodeType;

        childItem.parentID = parentNodeID;
        childItem.parentType = parentNodeType;
        // 给节点添加类型属性, 并检测回填数据
        (function (targetData) {
          // 大区
          if (targetData.hasOwnProperty('regionId')) {
            targetData.type = regionType.REGION;
            return;
          }
          // 省
          if (targetData.hasOwnProperty('provinceId')) {
            targetData.type = regionType.PROVINCE;
            return;
          }
          // 市
          if (targetData.hasOwnProperty('cityId')) {
            targetData.type = regionType.CITY;
            if (_this3.checkedList && _this3.checkedList.indexOf(targetData['cityId']) > -1) {
              targetData.checked = true;
              _this3.checkUp(targetData);
              _this3.checkUp(parentNode);
            }
          };
        })(childItem);
        // 是否还存在子节点, 递归
        if (childItem.child && _angular2.default.isArray(childItem.child)) {
          _this3.formatNodeData(childItem, childItem.child);
        }
      });
    }
    /**
     * checkbox click handler 在每个区域和省checkbox点击时的处理器
     * 这里主要是做全选子节点的和取消全选子节点的操作
     * 注意
     *  1. 这里是递归操作
     *  2. 这里只针对省和区域, 城市的有专门的处理方式
     * 
     * @param dataSource {Object} 区域或省的数据集.
     * @param {String} type 用来区分到底是哪个级别被点了
     */

  }, {
    key: 'checkboxClickHandler',
    value: function checkboxClickHandler(dataSource, type) {
      var _this4 = this;

      if (dataSource && dataSource.child && _angular2.default.isArray(dataSource.child)) {
        (function () {
          //checked {Boolean} 这是view里在checkbox上用ng-model绑定得来的
          var answer = dataSource.checked;
          dataSource.child.forEach(function (item) {
            item.checked = answer;
            if (item.child && _angular2.default.isArray(item.child)) {
              _this4.checkboxClickHandler(item, item.type);
            }
          });
          if (type === regionType.PROVINCE) {
            _this4.checkUp(dataSource);
          }
        })();
      }
    }
    /**
     * 城市checkbox click handler
     * 
     * @param cityData {Object} 城市的数据
     */

  }, {
    key: 'cityCheckHandler',
    value: function cityCheckHandler(cityData) {
      this.checkUp(cityData);
      // 这里肯定是市, 往上找区域再检测一次
      var province = this.findParentNodeByID(cityData.parentID, regionType.PROVINCE);
      this.checkUp(province);
    }
    /**
     * 向上检查
     */

  }, {
    key: 'checkUp',
    value: function checkUp(node) {
      var type = node.type === regionType.CITY ? regionType.PROVINCE : regionType.REGION;
      var parentNode = this.findParentNodeByID(node.parentID, type);
      var isAllChecked = this.isChildAllChecked(parentNode);
      parentNode.checked = isAllChecked;
      if (!isAllChecked) {
        // 不是全选了, 那么有可能是半选, 查询之
        parentNode.halfChecked = this.isHalfChecked(parentNode);
      } else {
        parentNode.halfChecked = false;
      }
    }
    /**
     * 检查子节点是不是都被选择了. 如果是检查的节点是省级单位, 那么往上找一层.
     * 因为如果是区域级单是没有上级的, 市一级单位实际上就是检查的省, 所以只判断是不是省就可以了, 以后有了更多级别则需要修改
     * 
     * @param nodeData {Object} 要检查的节点
     * @returns {Boolean} 节点第一级内是否全选
     */

  }, {
    key: 'isChildAllChecked',
    value: function isChildAllChecked(nodeData) {
      if (nodeData && nodeData.child && _angular2.default.isArray(nodeData.child)) {
        return nodeData.child.every(function (item) {
          return item.checked;
        });
      }
      return false;
    }
    /**
     * 是否半选, 即是检查所有一级子节点, 是否有一个被选中
     * 
     * @param {any} nodeData
     */

  }, {
    key: 'isHalfChecked',
    value: function isHalfChecked(nodeData) {
      if (nodeData && nodeData.child && _angular2.default.isArray(nodeData.child)) {
        return nodeData.child.some(function (item) {
          return item.checked;
        });
      }
      return false;
    }
    /**
     * 查找父节点
     * 
     * @param id          {int}     某个区域的id
     * @param parentType  {String}  标识现在需要在哪一个级别查询
     * @return {Object} 某一个级别的数据
     */

  }, {
    key: 'findParentNodeByID',
    value: function findParentNodeByID(id, parentType) {
      var key = parentType + 'Id';
      var find = function find(childList) {
        if (childList && _angular2.default.isArray(childList)) {
          return childList.find(function (item) {
            return item[key] == id;
          });
        }
      };
      var result = null;
      // 如果是区域一级别的就查一级就行
      if (parentType === regionType.REGION) {
        result = find(this.regionList);
      }
      // 如果要在省级别查询就要挨个循环省级数据
      if (parentType === regionType.PROVINCE) {
        var province = null;
        for (var i = 0; i < this.regionList.length; i++) {
          province = find(this.regionList[i].child);
          if (province) {
            result = province;
            break;
          }
        }
      }
      return result;
    }
    /**
     * 多给箭头一个开关的功能
     * 
     * @param provinceData {Object} 省一级的数据对象
     */

  }, {
    key: 'showCityList',
    value: function showCityList(provinceData) {
      provinceData.isShowCityList = !provinceData.isShowCityList;
      if (this.currentShowCityListData != provinceData) {
        this.currentShowCityListData && (this.currentShowCityListData.isShowCityList = false);
      }
      this.currentShowCityListData = provinceData;
    }
    /**
     * 关闭城市列表按钮
     * 
     * @param provinceData {Object} 省一级的数据对象
     */

  }, {
    key: 'closeCityList',
    value: function closeCityList(provinceData) {
      provinceData.isShowCityList = false;
      this.currentShowCityListData = null;
    }
    /**
     * 收集选中的城市
     * 
     * @returns {Set} for city id list
     */

  }, {
    key: 'collectCheckedInformation',
    value: function collectCheckedInformation() {
      var checkedCityIDList = [];
      var find = function find(dataList) {
        if (dataList && _angular2.default.isArray(dataList)) {
          dataList.forEach(function (item) {
            if (item.checked && item.hasOwnProperty('cityId')) {
              checkedCityIDList.push(item['cityId']);
            }
            if (item.hasOwnProperty('child')) {
              find(item.child);
            }
          });
        }
      };
      find(this.regionList);
      return checkedCityIDList;
    }
    /**
     * 确认, 返回结果, 且关闭
     */

  }, {
    key: 'confirmHandler',
    value: function confirmHandler() {
      this.$uibModalInstance.close(this.collectCheckedInformation());
    }
    /**
     * 直接关闭
     */

  }, {
    key: 'cancelHandler',
    value: function cancelHandler() {
      this.$uibModalInstance.dismiss();
    }
  }]);

  return CitySelectorController;
}();

exports.default = CitySelectorController;