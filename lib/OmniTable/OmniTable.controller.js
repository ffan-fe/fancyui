/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Mar 20 2017 16:54:25 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/OmniTable
 */

class OmniTableController {
  constructor() {
    if (this.datasource && this.columns) {

    }
    // search是空数组时重置为null
    if (this.search && Array.isArray(this.search) && !this.search.length) {
      this.search = null
    }

    if (this.rowSelection && (!this.rowSelection.onSelect || typeof this.rowSelection.onSelect != 'function')) {
      this.rowSelection.onSelect = () => {
      }
    }

    this.viewSearch = this.search;


    this.query = {};

    if (!this.onChange || typeof this.onChange != 'function') {
      this.onChange = () => {
      }
    }

    this.selectedRowKeys = [];
    this.selectedRows = [];

    if (!this.dataconfig || this.dataconfig && !this.dataconfig.keyField) {
      this.keyField = 'key'
    } else {
      this.keyField = this.dataconfig.keyField;
    }

    if (this.rowSelection) {
      this.defaultSelectedRowKeys = this.rowSelection.defaultSelectedRowKeys
    }

    this.validDataLength = 0;

    this.onPageNumChange = this.onPageNumChange.bind(this);

    this.render();
  }

  render() {
    this.formatColumns(this.columns);
    this.calculateValidDataLength(this.datasource);
    this.formatData(this.datasource);
  }
  /**
   * 单条数据checked字段改变处理函数：
   * 更新保存选中条目的数组
   * @param row
   */
  checkedChangeHandler(row) {
    if (row.disabled) {
      row.checked = false;
      return
    }

    if (row.checked) {
      this.selectedRows.push(row);
      this.selectedRowKeys.push(row[this.keyField]);

      if (this.selectedRowKeys.length == this.validDataLength) {
        this.isAllChecked = true;
      }
    } else {
      this.isAllChecked = false;
      this.remove(this.selectedRows, row[this.keyField], true, this.keyField);
      this.remove(this.selectedRowKeys, row[this.keyField]);
    }

    this.rowSelection.onSelect(row, row.checked, this.selectedRowKeys, this.selectedRows);
  }

  /**
   * 全选处理函数：
   * 只负责改变当前页每条数据的checked状态,
   * @param isAllChecked
   * @param data
   */
  allCheckedChangeHandler(isAllChecked, data) {
    let changedRecord = [];
    if (isAllChecked) {
      data.forEach(item => {
        if (item.disabled || item.checked) {
          return
        }

        this.selectedRows.push(item);
        this.selectedRowKeys.push(item[this.keyField]);
        changedRecord.push(item);
        item.checked = true;
      });

    } else {
      data.forEach(item => {
        if (item.disabled || !item.checked) {
          return
        }
        this.remove(this.selectedRows, item[this.keyField], true, this.keyField);
        this.remove(this.selectedRowKeys, item[this.keyField]);
        changedRecord.push(item);
        item.checked = false;
      });
    }

    this.rowSelection.onSelect(changedRecord, isAllChecked, this.selectedRowKeys, this.selectedRows);
  }

  /**
   * 计算出了disable外的数据长度
   * @param data
   */
  calculateValidDataLength(data) {
    //没有开启选择功能 不要计算
    if (!this.rowSelection) {
      return;
    }

    let validDataLength = 0;

    data.forEach(item => {
      let disabled = this.rowSelection.getCheckboxProps(item).disabled;
      if (!disabled) {
        validDataLength++
      }
    });

    return this.validDataLength = validDataLength;
  }

  /**
   * 处理单页数据，干了三件事：
   * 1.根据defaultSelectedRowKeys添加checked属性
   * 2.根据getCheckboxProps添加disabled
   *
   * @param data
   */
  formatData(data) {
    if (!data || !Array.isArray(data)) {
      return;
    }

    //没有开启选择功能 也不要format
    if (!this.rowSelection) {
      return;
    }

    //如果没有默认选中的，不需要format
    if (!this.defaultSelectedRowKeys || (this.defaultSelectedRowKeys && !this.defaultSelectedRowKeys.length)) {
      return;
    }

    let count = 0;
    this.selectedRowKeys = this.defaultSelectedRowKeys;
    data.forEach(item => {
      let disabled = this.rowSelection.getCheckboxProps(item).disabled;
      let isInclude = this.defaultSelectedRowKeys.includes(item[this.keyField]);

      item.disabled = disabled;
      if (isInclude && !disabled) {
        count++;
        item.checked = true;
        this.selectedRows.push(item);
      } else {
        item.checked = false;
      }
    });

    count == this.validDataLength && this.validDataLength ? this.isAllChecked = true : this.isAllChecked = false;
  }

  /**
   * 为没有render的column添加一个默认的render
   * @param columns
   */
  formatColumns(columns) {
    if (!columns || !Array.isArray(columns)) {
      return;
    }

    columns.forEach(column => {
      if (!column.render) {
        column.render = text => text
      }
    });
  }

  searchHandler() {
    this.pagination.defaultCurrent = 1;
    this.onChange(1, this.pagination.pageSize, this.query);
  }

  onPageNumChange(page) {
    this.onChange(page, this.pagination.pageSize, this.query);
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
  remove(array, element, isObject, keyFeild) {
    let index;
    if (isObject) {
      array.forEach(function (item, indx) {
        if (item[keyFeild] == element) {
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

export default OmniTableController;
