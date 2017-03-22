/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Mar 20 2017 16:54:25 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/OmniTable
 */

import Base from '../../base';
export default class OmniTableController extends Base {
  constructor($state, $translate) {
    'ngInject';
    super($state, $translate)

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => `<a href="#">${text}</a>`,
    },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => `
  <span>
    <a href="#">Action 一 ${record.name}</a>
  </span>`
      }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onSelect: (record, selected, selectedRowKeys, selectedRows) => {
        console.log(record, selected, selectedRowKeys, selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User'   // Column configuration not to be checked
      }),
      defaultSelectedRowKeys: ['1', '2']
    };

    const search = [
      {
        label: '门店名称',
        name: 'storeName'
      },
      {
        label: '商户名称',
        name: 'merchantName'
      },
      {
        type: 'text',
        label: '品牌名称',
        name: 'brandNames'
      },
      {
        type: 'text',
        label: '商圈名称',
        name: 'plazaName'
      },
      {
        label: '门店名称1',
        name: 'storeName1'
      },
      {
        label: '商户名称1',
        name: 'merchantName1'
      },
      {
        type: 'text',
        label: '品牌名称1',
        name: 'brandNames1'
      },
      {
        type: 'text',
        label: '商圈名称1',
        name: 'plazaName1'
      }
    ];
    const pagination = {
      total: 500,
      pageSize: 10,
      showQuickJumper: true,
      defaultCurrent: 45
    };

    this.columns = columns;
    this.data = data;
    this.rowSelection = rowSelection;
    this.search = search;

    this.dataconfig = {
      keyField: 'key'
    };

    this.pagination = pagination;

    this.onChange = (page, pageSize, query) => {
      console.log(page, pageSize, query);
    };

    this.loading = false;
  }
}
