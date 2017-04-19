/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/OmniTable
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import OmniTableModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controllerInstance() {
    return angular.element(this.element).scope().$$childHead.vm;
  }
}

describe('OmniTable', () => {
  let $rootScope,$compile;
  let grecord, gselected, gselectedRowKeys, gselectedRows;
  let vm = {
    columns: [{
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
      }],
    data: [{
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
    }],
    rowSelection: {
      onSelect: (record, selected, selectedRowKeys, selectedRows) => {
        grecord = record;
        gselected = selected;
        gselectedRowKeys = selectedRowKeys;
        gselectedRows = selectedRows;

      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User'   // Column configuration not to be checked
      }),
      defaultSelectedRowKeys: []
    },
    pagination: {
      total: 500,
      pageSize: 10,
      showQuickJumper: true,
      defaultCurrent: 45
    },
    dataconfig: {
      keyField: 'key'
    },
    onChange: (page, pageSize, query) => {
      console.log(page, pageSize, query);
    }
  };
  beforeEach(window.module(OmniTableModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $rootScope.vm = vm;
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      it('测试checkedChangeHandler', () => {
        let grecord, gselected, gselectedRowKeys, gselectedRows;
        let vm = {
          columns: [{
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
            }],
          data: [{
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
          }],
          rowSelection: {
            onSelect: (record, selected, selectedRowKeys, selectedRows) => {
              grecord = record;
              gselected = selected;
              gselectedRowKeys = selectedRowKeys;
              gselectedRows = selectedRows;

            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User'   // Column configuration not to be checked
            }),
            defaultSelectedRowKeys: []
          },
          pagination: {
            total: 500,
            pageSize: 10,
            showQuickJumper: true,
            defaultCurrent: 45
          },
          dataconfig: {
            keyField: 'key'
          },
          onChange: (page, pageSize, query) => {
            console.log(page, pageSize, query);
          }
        };
        $rootScope.vm = vm;
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        let mockRow = {
          disabled: true,
          checked: true
        };
        controller.checkedChangeHandler(mockRow);
        assert.equal(mockRow.checked, false);

        mockRow = {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          checked: true
        };

        controller.checkedChangeHandler(mockRow);

        assert.equal(grecord, mockRow);
        assert.equal(gselected, true);
        assert.equal(controller.selectedRows.includes(mockRow), true);
        assert.equal(controller.selectedRowKeys.includes(mockRow.key), true);
        mockRow = {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          checked: true,
          disabled: true
        };
        controller.checkedChangeHandler(mockRow);

        assert.equal(mockRow.checked, false);
      });

      it('测试allCheckedChangeHandler', () => {
        let grecord, gselected, gselectedRowKeys, gselectedRows;
        let vm = {
          columns: [{
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
            }],
          data: [{
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
          }],
          rowSelection: {
            onSelect: (record, selected, selectedRowKeys, selectedRows) => {
              grecord = record;
              gselected = selected;
              gselectedRowKeys = selectedRowKeys;
              gselectedRows = selectedRows;

            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User'   // Column configuration not to be checked
            }),
            defaultSelectedRowKeys: []
          },
          pagination: {
            total: 500,
            pageSize: 10,
            showQuickJumper: true,
            defaultCurrent: 45
          },
          dataconfig: {
            keyField: 'key'
          },
          onChange: (page, pageSize, query) => {
            console.log(page, pageSize, query);
          }
        };
        $rootScope.vm = vm;
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        controller.allCheckedChangeHandler(true, vm.data);
        assert.equal(controller.selectedRows.length, vm.data.length - 1);

        controller.allCheckedChangeHandler(false, vm.data);
        assert.equal(controller.selectedRows.length, 0);
        assert.equal(controller.selectedRowKeys.length, 0);
      });

      it('测试 defaultSelectedRowKeys', () => {
        let grecord, gselected, gselectedRowKeys, gselectedRows;
        let vm = {
          columns: [{
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
            }],
          data: [{
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
          }],
          rowSelection: {
            onSelect: (record, selected, selectedRowKeys, selectedRows) => {
              grecord = record;
              gselected = selected;
              gselectedRowKeys = selectedRowKeys;
              gselectedRows = selectedRows;

            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User'   // Column configuration not to be checked
            }),
            defaultSelectedRowKeys: ['1']
          },
          pagination: {
            total: 500,
            pageSize: 10,
            showQuickJumper: true,
            defaultCurrent: 45
          },
          dataconfig: {
            keyField: 'key'
          },
          onChange: (page, pageSize, query) => {
            console.log(page, pageSize, query);
          }
        };
        $rootScope.vm = vm;
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        assert.equal(controller.selectedRowKeys.includes('1'), true);
      });

      it('测试 calculateValidDataLength', () => {
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        assert.equal(controller.calculateValidDataLength($rootScope.vm.data), 3);
      });

      it('测试 formatData', () => {
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        controller.formatData(controller.datasource);
        console.log('controller.datasource[3]', controller.datasource[3]);
        assert.equal(controller.datasource[3].disabled, true);
      });

      it('测试 formatColumns', () => {
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        assert.equal(typeof controller.columns[0].render, 'function');
      });

      it('测试 formatRowSelection', () => {
        let vm = {
          columns: [{
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
            }],
          data: [{
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
          }],
          rowSelection: {
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User'   // Column configuration not to be checked
            }),
            defaultSelectedRowKeys: []
          },
          pagination: {
            total: 500,
            pageSize: 10,
            showQuickJumper: true,
            defaultCurrent: 45
          },
          dataconfig: {
            keyField: 'key'
          },
          onChange: (page, pageSize, query) => {
            console.log(page, pageSize, query);
          }
        };
        $rootScope.vm = vm;
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        controller.formatRowSelection(controller.rowSelection);
        assert.equal(typeof controller.rowSelection.onSelect, 'function');
        assert.equal(typeof controller.rowSelection.getCheckboxProps, 'function');
      });

      it('测试 remove', () => {
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        let arr = [1,2,3];
        controller.remove(arr, 1);
        assert.equal(arr.length, 2);
        let arrObj = [{
          id: 1,
          name: 'dd'
        }, {
          id: 2,
          name: 'ee'
        }];
        controller.remove(arrObj, 1, true, 'id');
        assert.equal(arrObj.length, 1);
      });

      it('测试默认search, onChange', () => {
        let vm = {
          columns: [{
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
            }],
          data: [{
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
          }],
          rowSelection: {
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User'   // Column configuration not to be checked
            }),
            defaultSelectedRowKeys: []
          },
          pagination: {
            total: 500,
            pageSize: 10,
            showQuickJumper: true,
            defaultCurrent: 45
          },
          dataconfig: {
            keyField: 'key'
          },
          search: []
        };
        $rootScope.vm = vm;
        let element = $compile(`<f-omni-table columns="vm.columns"
                  datasource="vm.data"
                  row-selection="vm.rowSelection"
                  search="vm.search"
                  pagination="vm.pagination"
                  loading="vm.loading"
                  on-change="vm.onChange"
                  dataconfig="vm.dataconfig"></f-omni-table>`)($rootScope);
        let controller = new ElementFinder(element).controllerInstance();

        assert.equal(controller.search, null);
        assert.equal(typeof controller.onChange, 'function');
      });
    });
  });

});
