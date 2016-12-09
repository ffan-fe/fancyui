import loaclData from './localData.js';
import angular from 'angular';
import fixDomain from '../tool/fixurl';


'use strict';

/**
 * 几个区域枚举
 */
const regionType = {
  REGION: "region",
  PROVINCE: 'province',
  CITY: 'city'
};

export default class CitySelectorController {
  /**
   * Creates an instance of CitySelectorController.
   * 
   * @param {$uib} $uibModalInstance
   * @param {$http} $http
   * @param {Boolean} isReadOnly
   * @param {Array} checkedList
   * @param {Object} database 有了这个数据集就不再发请求了
   */
  constructor($uibModalInstance, $http, isReadOnly, checkedList, database) {
    'ngInject';
    this.$uibModalInstance = $uibModalInstance;
    this.$http = $http;
    this.isReadOnly = isReadOnly;
    this.checkedList = checkedList;
    this.database = database;
    // 做回填的时候, 也需要回填各种状态, 这里记录好有变化的省份, 然后上下检查, 比较方便
    this.fillProvinceList = [];
  }
  $onInit() {
    let fixDomainUrl = fixDomain('/Database/coupon_component/selectCity');
    // 如果外部提供了数据集, 那么就不再发请求了
    if (this.database) {
      this.regionList = angular.copy(this.database);
      this.formatData(this.regionList);
      return;
    }
    this.loadPromise = this.$http.get(fixDomainUrl)
      .then(
        response => {
          if (response && response.data && response.data.status == 200) {
            this.regionList = response.data.data;
          } else {
            this.regionList = loaclData.data;
          }
        },
        // 请求败了使用本地数据
        () => {
          this.regionList = loaclData.data;
        }
      )
      .finally(
        () => {
          this.formatData(this.regionList);
        }
      );
  }
  /**
   * 开始对数据做一遍处理, 为子节点添加父节点ID, 这样方便查找
   * 
   * @param dataList {Array}
   */
  formatData(dataList) {
    if (dataList && angular.isArray(dataList)) {
      dataList.forEach(item => {
        if (item.child) {
          this.formatNodeData(item, item.child);
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
  formatNodeData(parentNode, childList) {
    if (!angular.isArray(childList)) return;
    // 获取父节点的信息
    const getParentInfo = node => {
      // 大区域
      if (node.hasOwnProperty('regionId')) {
        return {parentNodeID: node.regionId, parentNodeType: regionType.REGION};
      }
      // 省
      if (node.hasOwnProperty('provinceId')) {
        return {parentNodeID: node.provinceId, parentNodeType: regionType.provinceId};
      }
      // 都不是
      return {parentNodeID: '', parentNodeType: ''};
    };
    //
    childList.forEach(childItem => {
      const {parentNodeID, parentNodeType} = getParentInfo(parentNode);
      childItem.parentID = parentNodeID;
      childItem.parentType = parentNodeType;
      // 给节点添加类型属性, 并检测回填数据
      (targetData => {
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
          if (this.checkedList && this.checkedList.indexOf(targetData['cityId']) > -1) {
            targetData.checked = true;
            this.checkUp(targetData);
            this.checkUp(parentNode);
          }
        };
      })(childItem);
      // 是否还存在子节点, 递归
      if (childItem.child && angular.isArray(childItem.child)) {
        this.formatNodeData(childItem, childItem.child);
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
  checkboxClickHandler(dataSource, type) {
    if (dataSource && dataSource.child && angular.isArray(dataSource.child)) {
      //checked {Boolean} 这是view里在checkbox上用ng-model绑定得来的
      const answer = dataSource.checked;
      dataSource.child.forEach(item => {
        item.checked = answer;
        if (item.child && angular.isArray(item.child)) {
          this.checkboxClickHandler(item, item.type);
        }
      });
      if (type === regionType.PROVINCE) {
        this.checkUp(dataSource);
      }
    }
  }
  /**
   * 城市checkbox click handler
   * 
   * @param cityData {Object} 城市的数据
   */
  cityCheckHandler(cityData) {
    this.checkUp(cityData);
    // 这里肯定是市, 往上找区域再检测一次
    const province = this.findParentNodeByID(cityData.parentID, regionType.PROVINCE);
    this.checkUp(province);
  }
  /**
   * 向上检查
   */
  checkUp(node) {
    const type = node.type === regionType.CITY ? regionType.PROVINCE : regionType.REGION;
    const parentNode = this.findParentNodeByID(node.parentID, type);
    const isAllChecked = this.isChildAllChecked(parentNode);
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
  isChildAllChecked(nodeData) {
    if (nodeData && nodeData.child && angular.isArray(nodeData.child)) {
      return nodeData.child.every(item => {
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
  isHalfChecked(nodeData) {
    if (nodeData && nodeData.child && angular.isArray(nodeData.child)) {
      return nodeData.child.some(item => {
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
  findParentNodeByID(id, parentType) {
    const key = `${parentType}Id`;
    const find = childList => {
      if (childList && angular.isArray(childList)) {
        return childList.find(item => {
          return (item[key] == id);
        });
      }    
    };
    let result = null;
    // 如果是区域一级别的就查一级就行
    if (parentType === regionType.REGION) {
        result = find(this.regionList);
    }
    // 如果要在省级别查询就要挨个循环省级数据
    if (parentType === regionType.PROVINCE) {
      let province = null;
      for (let i = 0; i < this.regionList.length; i++) {
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
  showCityList(provinceData) {
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
  closeCityList(provinceData) {
    provinceData.isShowCityList = false;
    this.currentShowCityListData = null;
  }
  /**
   * 收集选中的城市
   * 
   * @returns {Set} for city id list
   */
  collectCheckedInformation() {
    let checkedCityIDList = [];
    const find = dataList => {
      if (dataList && angular.isArray(dataList)) {
        dataList.forEach(item => {
          if (item.checked && item.hasOwnProperty('cityId')) {
            checkedCityIDList.push(item['cityId']);
          }
          if (item.hasOwnProperty('child')) {
            find(item.child);
          }
        })
      }
    };
    find(this.regionList);
    return checkedCityIDList;
  }
  /**
   * 确认, 返回结果, 且关闭
   */
  confirmHandler() {
    this.$uibModalInstance.close(this.collectCheckedInformation());
  }
  /**
   * 直接关闭
   */
  cancelHandler() {
    this.$uibModalInstance.dismiss();
  }
}