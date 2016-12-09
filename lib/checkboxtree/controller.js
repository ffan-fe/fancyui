'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = require('./default.config.js');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckboxtreeController = function () {
  function CheckboxtreeController() {
    var _this = this;

    _classCallCheck(this, CheckboxtreeController);

    this.name = 'checkboxtree';
    this.config = Object.assign({}, _defaultConfig2.default, this.config);
    this.listPromise.then(function (responce) {
      _this.list = responce;
      _this.formatList(_this.list, _this.ngModel);
    });
    this.ngModel ? '' : this.ngModel = [];
  }

  /**
   * 节点点击处理：
   * 1. 如果点击的是叶节点：
   *   1.1如果所有兄弟节点都已选中：
   *      1.1.1 如果此节点是checked状态
   *          1.1.1.1 把父节点的状态置为checked
   *          1.1.1.2 重复步骤1.1
   *      1.1.2 如果此节点是unchecked的状态
   *          1.1.2.1 把父节点的状态置为unchecked
   *          1.1.2.1 重复执行1.1
   * 2. 如果点击的是父节点：
   *    2.1 执行1的逻辑；
   *    2.2 toggle所有子节点的check状态:
   * 3. 更新保存已选中节点的数组;
   */


  _createClass(CheckboxtreeController, [{
    key: 'nodeClickHandler',
    value: function nodeClickHandler(node) {
      if (!node[this.config.fieldOfChildren]) {
        this.toggleUpNode(node);
      } else {
        this.toggleUpNode(node);
        this.toggleDownNode(node);
      }
      this.updateModel(node);
    }

    /**
     * 根据当前节点的checked状态来向上改变父级节点的状态
     */

  }, {
    key: 'toggleUpNode',
    value: function toggleUpNode(node) {
      var flag = true,
          //标记父级状态是否由当前节点决定
      siblings = this.getSiblings(node);
      if (siblings && siblings) {
        siblings.forEach(function (item) {
          if (!item.checked) {
            flag = false;
          }
        });
      }
      if (flag && node.parent) {
        //只有此情况下父节点的check状态才和当前节点有关，且和当前节点的checked状态一致
        var parent = this.getNode(node.parent, this.list);
        parent.checked = node.checked;
        this.updateModel(parent);
        this.toggleUpNode(parent);
      }
    }

    /**
     * 根据当前节点的checked状态来向下改变子级节点的状态
     */

  }, {
    key: 'toggleDownNode',
    value: function toggleDownNode(node) {
      var _this2 = this;

      if (node[this.config.fieldOfChildren]) {
        node[this.config.fieldOfChildren].forEach(function (item) {
          item.checked = node.checked;
          _this2.updateModel(item);
          _this2.toggleDownNode(item);
        });
      }
    }

    /**
     * 监听点击事件，更新保存已选中节点
     * @param node
     */

  }, {
    key: 'updateModel',
    value: function updateModel(node) {
      var _this3 = this;

      if (node.checked) {
        this.ngModel.push(node);
      } else {
        var position = void 0;
        this.ngModel.forEach(function (item, index) {
          if (item[_this3.config.fieldOfId] == node[_this3.config.fieldOfId]) {
            position = index;
            return;
          }
        });
        this.ngModel.splice(position, 1);
      }
      this.ngModel = angular.copy(this.ngModel);
    }

    /**
     * 根据ng-model传进来的checkedItems，来处理list，设置节点checked属性
     * @param list
     * @param checkedItems
     */

  }, {
    key: 'formatList',
    value: function formatList(list, checkedItems) {
      var _this4 = this;

      checkedItems.forEach(function (item) {
        var targetNode = _this4.getNode(item[_this4.config.fieldOfId], list);
        if (targetNode) {
          targetNode.checked = true;
        }
      });
    }

    /**
     * 以下都是工具函数
     */
    /**
     * 根据节点来获取兄弟节点（不包含当前节点）
     * @param node
     */

  }, {
    key: 'getSiblings',
    value: function getSiblings(node) {
      var _this5 = this;

      if (node.parent) {
        var _ret = function () {
          var parent = _this5.getNode(node.parent, _this5.list);
          var copy = angular.copy(parent[_this5.config.fieldOfChildren]);
          copy.forEach(function (item, index) {
            if (item[_this5.config.fieldOfId] == node[_this5.config.fieldOfId]) {
              copy.splice(index, 1);
            }
          });
          return {
            v: copy
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }

    /**
     * 根据节点id来获取节点
     * @param id
     */

  }, {
    key: 'getNode',
    value: function getNode(id, list) {
      var _this6 = this;

      var targetNode = void 0;
      var walkList = function walkList(id, list) {
        list.forEach(function (item) {
          if (item[_this6.config.fieldOfId] == id) {
            targetNode = item;
            return false;
          }
          if (item[_this6.config.fieldOfChildren]) {
            walkList(id, item[_this6.config.fieldOfChildren]);
          }
        });
      };
      walkList(id, list);
      return targetNode;
    }
  }]);

  return CheckboxtreeController;
}();

exports.default = CheckboxtreeController;