import config from './default.config.js'
class MultiselectController {
  constructor($http, NgTableParams) {
    'ngInject'
    this.name = 'multiselect';
    this.checkedItems = this.checkedItems ? this.checkedItems : []; //保存选中条目的数组
    this.config = Object.assign({}, config, this.config);
    this.idField = this.config.uniqueField;
    //标识是否返回整条信息，默认返回uniqueField值的数组
    this.flag = this.config.returnModel && this.config.returnModel == 'all';
    this.listConfig = {
      url: this.config.url,
      //生成表格的字段
      fields: this.config.tableFields
    };
    this.tableParams = new NgTableParams({
      count: this.config.tableConfig.limit || 10  //每页几条
    }, {
      counts: [],
      getData: params => {
        let paramData = angular.extend({
          [this.config.tableConfig.pageName]: params.url().page,
          limit: this.config.tableConfig.limit
          }, this.form);
        this.loading = true;
        return $http({
          url: this.listConfig.url,
          method: "GET",
          params: paramData
        }).then(response => {
          params.total(response.data.totalCount); //帮你分几页
          this.loading = false;
          this.responseFormat(response.data.items);
          return response.data && response.data.items;
        })
      }
    });

    this.config.initContrl ? this.config.initContrl(this) : '';


    this.search = function(){
      this.tableParams.parameters({page: 1}).reload();
    };
  }

  /**
   * 重置查询表单
   * 注意：select的model要重置为"";
   */
  resetForm() {
    this.form = {};
    if (this.config.queryFields.length) {
      this.config.queryFields.forEach(item => {
        item.type === 'select' ? this.form[item.name] = '' : '';
      });
    }
  }

  /**
   * 单条数据checked字段改变处理函数：
   * 更新保存选中条目的数组
   * @param row
   */
  checkedChangeHandler(row, data) {
    if (row.checked) {
      let count = 0;
      if(this.flag){
        this.checkedItems.push(row);
      }else{
        this.checkedItems.push(row[this.idField]);
      }
      data.forEach(item => {
        item.checked ? count++ : '';
      });
      if(count == data.length){
        this.isAllChecked = true;
      }
      this.checkedItems = angular.copy(this.checkedItems);
    } else {
      this.isAllChecked = false;
      if(this.flag){
        this.remove(this.checkedItems, row[this.idField], true, this.idField);
      }else{
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
  allCheckedChangeHandler(isAllChecked, data) {
    if (isAllChecked) {
      data.forEach(item => {
        item.checked = true;
        let isInclude = false; //标识是否checkedItems中包含指定的item
        if(this.flag){
          this.checkedItems.forEach(ele => {
            if(item[this.idField] == ele[this.idField]){
              isInclude = true;
            }
          });
        }else{
          isInclude = this.checkedItems.includes(item[this.idField])
        }
        if (!isInclude) {
          this.checkedChangeHandler(item, data);
        }
      });
    } else {
      data.forEach(item => {
        item.checked = false;
        this.checkedChangeHandler(item);
      });
    }
  }

  /**
   * 返回单页数据后，根据已有的checkedItems添加checked属性
   * @param response
   */
  responseFormat(response) {
    let count = 0;
    if(!response){
      response = [];
    }
    if(response.length && angular.isFunction(response.forEach)){
      response.forEach(item => {
        let isInclude = false; //标识是否checkedItems中包含指定的item
        if(this.flag){
          this.checkedItems.forEach(ele => {
            if(item[this.idField] == ele[this.idField]){
              isInclude = true;
            }
          });
        }else{
          isInclude = this.checkedItems.includes(item[this.idField])
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
  remove(array, element, isObject, idFeild) {
    let index;
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
}

export default MultiselectController;
