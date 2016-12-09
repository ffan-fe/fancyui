'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('../common/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @ngdoc directive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name transfer.directive:bpTransfer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chuxin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @restrict E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 双栏穿梭选择框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 用直观的方式在两栏中移动元素，完成选择行为
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array}      sourceData       - binding symbol is =?, 数据源
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array}      targetData       - binding symbol is =?, 右侧选中目标值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array}      titles           - binding symbol is <, 左右侧标题,默认为`请选择`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array}      placeholders     - binding symbol is <, 左右placeholders值 默认为`请输入检索条件`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Array}      operations       - binding symbol is <, 操作按钮的文案 默认依次为 `添加` `添加全部` `删除` `全部删除`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    showLeftSearch   - binding symbol is <, 是否启用左侧检索框 默认为 `true` 启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    showRightSearch  - binding symbol is <, 是否启用右侧检索框 默认为 `true` 启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    addBtn           - binding symbol is <, 是否展示增加按钮 默认为 `true` 展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    addAllBtn        - binding symbol is <, 是否展示全部增加按钮 默认为 `true` 展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    delBtn           - binding symbol is <, 是否展示删除按钮 默认为 `true` 展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Boolean}    delAllBtn        - binding symbol is <, 是否展示全部删除按钮 默认为 `true` 展示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function}   serverSearch     - binding symbol is &?, 是否启用服务端检索 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <bp-transfer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                source-data="vm.dataSource"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                titles="vm.titles"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                placeholders="vm.placeholders"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                operations="vm.operations"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                showLeft-search="vm.showLeftSearch"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                showRight-search="vm.showRightSearch"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                add-btn="vm.addBtn"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                add-all-btn="vm.addAllBtn"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                del-btn="vm.delBtn"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                del-all-btn="vm.delAllBtn"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ></bp-transfer>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.titles = ['门店列表', '已选择门店'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.placeholders = ['输入门店进行检索', '对已经出来的结果进行检索'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.operations = ['增加', '增加全部', '删除', '全部删除'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.showLeftSearch = true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.showRightSearch = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.addBtn = true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.addAllBtn = true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.delBtn = true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.delAllBtn = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.dataSource = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 'NNN',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "沈阳分门店测试1（商圈dx测试店）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103705,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "TESTing（TEST店）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103384,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103381,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "性能测试商圈01_勿动（性能测试商圈01_勿动店棒啊帮帮哒00100101010）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103347,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "测试专用叶（勿动）（沈阳奥体店）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103346,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   storeName: "	测试专用勿动111111111111",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "	测试专用勿动（沈阳北一路店）333333333333333333"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103345,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "测试专用勿动（沈阳太原街店）11111111111111111"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   key: 9103344,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   value: "测试专用叶（勿动）（沈阳奥体店1155555555）"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/transfer)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


'use strict';

/**
 * Transfer component
 *
 * @export
 * @class Transfer
 * @extends {Component}
 */

var Transfer = function (_Component) {
  _inherits(Transfer, _Component);

  function Transfer($filter) {
    'ngInject';

    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this));

    _this.$filter = $filter;
    return _this;
  }

  /**
   * @override
   */


  _createClass(Transfer, [{
    key: '_initDefaultValue',
    value: function _initDefaultValue() {
      this.docInfo = {
        leftTitle: '请选择',
        rightTitle: '请选择',
        leftPlaceholder: '请输入检索条件',
        rightPlaceholder: '请输入检索条件',
        addOperation: '添加',
        addAllOperation: '添加全部',
        delOperation: '删除',
        delAllOperation: '全部删除'
      };
      /**
       *是否需要服务端检索
       * @type {boolean}
       */
      this.isNeedServerSearch = typeof this.serverSearch === 'function';
      this.showLeftSearch = angular.isUndefined(this.showLeftSearch) ? true : this.showLeftSearch;
      this.showRightSearch = angular.isUndefined(this.showRightSearch) ? true : this.showRightSearch;
      this.addBtn = angular.isUndefined(this.addBtn) ? true : this.addBtn;
      this.addAllBtn = angular.isUndefined(this.addAllBtn) ? true : this.addAllBtn;
      this.delBtn = angular.isUndefined(this.delBtn) ? true : this.delBtn;
      this.delAllBtn = angular.isUndefined(this.delAllBtn) ? true : this.delAllBtn;
      this.sourceData = angular.isArray(this.sourceData) ? this.sourceData : [];
      this.targetData = angular.isArray(this.targetData) ? this.targetData : [];
      this.leftValue = angular.isArray(this.leftValue) ? this.leftValue : [];
      this.rightValue = angular.isArray(this.rightValue) ? this.rightValue : [];
      this.setDoc();
    }
  }, {
    key: 'buildDoc',
    value: function buildDoc(source, defArr) {
      var _this2 = this;

      source = angular.isArray(source) ? source : [];
      angular.forEach(defArr, function (item, index) {
        _this2.docInfo[item] = source[index] ? source[index] : _this2.docInfo[item];
      });
    }
  }, {
    key: 'setDoc',
    value: function setDoc() {
      this.buildDoc(this.titles, ['leftTitle', 'rightTitle']);
      this.buildDoc(this.placeholders, ['leftPlaceholder', 'rightPlaceholder']);
      this.buildDoc(this.operations, ['addOperation', 'addAllOperation', 'delOperation', 'delAllOperation']);
    }

    /**
     *双击 增
     */

  }, {
    key: 'optionSourceClick',
    value: function optionSourceClick(option) {
      this.rightValue = [];
      this.targetData = this.pushData(this.targetData, option, this.sourceData);
      this.sourceData = this.reduceData(this.sourceData, option);
      this.leftValue = [];
    }

    /**
     *双击 删
     */

  }, {
    key: 'optionTargetClick',
    value: function optionTargetClick(option) {
      this.leftValue = [];
      this.sourceData = this.pushData(this.sourceData, option, this.targetData);
      this.targetData = this.reduceData(this.targetData, option);
      this.rightValue = [];
    }

    /**
     * reduce
     */

  }, {
    key: 'reduceData',
    value: function reduceData(target, data) {
      var _this3 = this;

      var target = target,
          data = data;
      angular.forEach(data, function (item) {
        var index = _this3.getIndex(target, item);
        if (index >= 0) {
          target.splice(index, 1);
        }
      });
      return target;
    }

    /**
     * push
     */

  }, {
    key: 'pushData',
    value: function pushData(target, data, sourceData) {
      var _this4 = this;

      var target = angular.copy(target),
          data = angular.copy(data),
          sourceData = angular.copy(sourceData);
      angular.forEach(data, function (item) {
        if (_this4.getIndex(target, item) < 0) {
          _this4.getIndex(sourceData, item) > -1 ? target.push(sourceData[_this4.getIndex(sourceData, item)]) : '';
        }
      });
      return target;
    }

    /**
     * get  index
     */

  }, {
    key: 'getIndex',
    value: function getIndex(target, item) {
      var item = angular.isNumber(item) ? parseInt(item) : item;
      return target.findIndex(function (element) {
        return element && element.key == item;
      });
    }

    /**
     * getKeys
     */

  }, {
    key: 'getKeys',
    value: function getKeys(data) {
      var target = [];
      angular.forEach(data, function (item) {
        target.push(item.key);
      });
      return target;
    }

    /**
     * add
     */

  }, {
    key: 'add',
    value: function add() {
      this.rightValue = [];
      this.targetData = this.pushData(this.targetData, this.leftValue, this.sourceData);
      this.sourceData = this.reduceData(this.sourceData, this.leftValue);
      this.leftValue = [];
    }

    /**
     * addAll
     */

  }, {
    key: 'addAll',
    value: function addAll() {
      this.rightValue = [];
      this.leftValue = [];
      this.targetData = this.pushData(this.targetData, this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue)), this.sourceData);
      this.leftSearchValue ? this.sourceData = this.reduceData(this.sourceData, this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue))) : this.sourceData = [];
    }

    /**
     * del
     */

  }, {
    key: 'del',
    value: function del() {
      this.leftValue = [];
      this.sourceData = this.pushData(this.sourceData, this.rightValue, this.targetData);
      this.targetData = this.reduceData(this.targetData, this.rightValue);
      this.rightValue = [];
    }

    /**
     * delAll
     */

  }, {
    key: 'delAll',
    value: function delAll() {
      this.rightValue = [];
      this.leftValue = [];
      this.sourceData = this.pushData(this.sourceData, this.getKeys(this.$filter('filter')(this.targetData, this.rightSearchValue)), this.targetData);
      this.rightSearchValue ? this.targetData = this.reduceData(this.targetData, this.getKeys(angular.copy(this.$filter('filter')(this.targetData, this.rightSearchValue)))) : this.targetData = [];
    }

    /**
     * 点击事件
     */

  }, {
    key: 'innerClick',
    value: function innerClick() {
      this.serverSearch && typeof this.serverSearch === 'function' && this.serverSearch({ $value: this.searchValue });
    }

    /**
     * 包装一个change处理器, 在模板里面用change, 然后调用传进来的处理器
     * @private
     */

  }, {
    key: 'innerChange',
    value: function innerChange() {}

    /**
     * @override
     */

  }, {
    key: '_createClassName',
    value: function _createClassName() {}
    /**
     * @override
     */

  }, {
    key: '_launch',
    value: function _launch() {}
  }]);

  return Transfer;
}(_component2.default);

exports.default = Transfer;