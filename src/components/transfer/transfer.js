/**
 * Transfer
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

  constructor($filter,$scope) {
    'ngInject';
    super();
    this.$filter = $filter;
    /**
     * todo...
     * 用户直接对  sourceData targetData赋值
     * 过滤一遍
     */
    $scope.$watch(() => {
      return this.targetData;
    }, (newValue, oldValue) => {
    });
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
