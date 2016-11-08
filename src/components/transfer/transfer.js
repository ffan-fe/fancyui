/**
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
import Component from '../common/component';

'use strict';

/**
 * Transfer component
 *
 * @export
 * @class Transfer
 * @extends {Component}
 */
export default class Transfer extends Component {

  constructor($filter) {
    'ngInject';
    super();
    this.$filter = $filter;
  }

  /**
   * @override
   */
  _initDefaultValue() {
    this.docInfo = {
      leftTitle:'请选择',
      rightTitle:'请选择',
      leftPlaceholder:'请输入检索条件',
      rightPlaceholder:'请输入检索条件',
      addOperation:'添加',
      addAllOperation:'添加全部',
      delOperation:'删除',
      delAllOperation:'全部删除'
    };
    /**
     *是否需要服务端检索
     * @type {boolean}
     */
    this.isNeedServerSearch = typeof this.serverSearch === 'function';
    this.showLeftSearch = angular.isUndefined(this.showLeftSearch) ? true : this.showLeftSearch ;
    this.showRightSearch = angular.isUndefined(this.showRightSearch) ? true :  this.showRightSearch ;
    this.addBtn = angular.isUndefined(this.addBtn) ? true : this.addBtn;
    this.addAllBtn = angular.isUndefined(this.addAllBtn) ? true : this.addAllBtn;
    this.delBtn = angular.isUndefined(this.delBtn) ? true : this.delBtn;
    this.delAllBtn = angular.isUndefined(this.delAllBtn) ? true : this.delAllBtn;
    this.sourceData = angular.isArray(this.sourceData) ? this.sourceData : [];
    this.targetData = angular.isArray(this.targetData) ? this.targetData : [];
    this.leftValue  = angular.isArray(this.leftValue) ? this.leftValue : [];
    this.rightValue = angular.isArray(this.rightValue) ? this.rightValue : [];
    this.setDoc();
  }

  buildDoc(source, defArr) {
    source = angular.isArray(source) ? source : [];
    angular.forEach(defArr,(item, index)=>{
      this.docInfo[item] = source[index]? source[index]: this.docInfo[item]
    })
  }

  setDoc(){
    this.buildDoc(this.titles,['leftTitle', 'rightTitle']);
    this.buildDoc(this.placeholders,['leftPlaceholder', 'rightPlaceholder']);
    this.buildDoc(this.operations,['addOperation', 'addAllOperation', 'delOperation', 'delAllOperation']);
  }

  /**
   *双击 增
   */
  optionSourceClick(option){
    this.rightValue = [];
    this.targetData = this.pushData(this.targetData, option, this.sourceData);
    this.sourceData = this.reduceData(this.sourceData, option);
    this.leftValue = [];
  }

  /**
   *双击 删
   */
  optionTargetClick(option){
    this.leftValue = [];
    this.sourceData = this.pushData(this.sourceData, option, this.targetData);
    this.targetData = this.reduceData(this.targetData, option);
    this.rightValue = [];
  }

  /**
   * reduce
   */
  reduceData(target, data){
    var target = target,
        data = data;
    angular.forEach(data,(item)=>{
      let index = this.getIndex(target, item);
      if(index >=0 ){
        target.splice(index, 1);
      }
    });
    return target;
  }

  /**
   * push
   */
  pushData(target, data, sourceData){
    var target = angular.copy(target),
        data = angular.copy(data),
        sourceData = angular.copy(sourceData);
    angular.forEach(data, (item)=> {
      if (this.getIndex(target, item) < 0) {
         this.getIndex(sourceData, item) > -1 ? target.push(sourceData[this.getIndex(sourceData, item)]): '';
      }
    });
    return target;
  }

  /**
   * get  index
   */
  getIndex(target, item){
    var item  = angular.isNumber(item) ? parseInt(item): item;
    return target.findIndex((element)=>{
       return element && element.key == item;
      }
    );
  }

  /**
   * getKeys
   */
  getKeys(data){
    let target = [];
    angular.forEach(data,(item)=>{
      target.push(item.key);
    });
    return target;
  }

  /**
   * add
   */
  add(){
    this.rightValue = [];
    this.targetData = this.pushData(this.targetData, this.leftValue, this.sourceData);
    this.sourceData = this.reduceData(this.sourceData, this.leftValue);
    this.leftValue = [];
  }

  /**
   * addAll
   */
  addAll() {
    this.rightValue = [];
    this.leftValue = [];
    this.targetData = this.pushData(
      this.targetData,
      this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue)),
      this.sourceData
    );
    this.leftSearchValue ?
      this.sourceData = this.reduceData(
        this.sourceData,
        this.getKeys(this.$filter('filter')(this.sourceData, this.leftSearchValue))
      ) :
      this.sourceData = [];
  }

  /**
   * del
   */
  del(){
    this.leftValue = [];
    this.sourceData = this.pushData(this.sourceData, this.rightValue,this.targetData);
    this.targetData = this.reduceData(this.targetData, this.rightValue);
    this.rightValue = [];
  }

  /**
   * delAll
   */
  delAll(){
    this.rightValue = [];
    this.leftValue = [];
    this.sourceData = this.pushData(
      this.sourceData,
      this.getKeys(this.$filter('filter')(this.targetData,this.rightSearchValue)),
      this.targetData
    );
    this.rightSearchValue ?
      this.targetData = this.reduceData(
        this.targetData,
        this.getKeys(angular.copy(this.$filter('filter')(this.targetData,this.rightSearchValue)))
      ) :
      this.targetData = [];
  }

  /**
   * 点击事件
   */
  innerClick(){
    this.serverSearch && typeof this.serverSearch === 'function' && this.serverSearch({$value:this.searchValue});
  }

  /**
   * 包装一个change处理器, 在模板里面用change, 然后调用传进来的处理器
   * @private
   */
  innerChange() {
  }

  /**
   * @override
   */
  _createClassName() {}
  /**
   * @override
   */
  _launch() {}
}
