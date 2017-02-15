#自定义表格 customTable

## Intro

FancyUI customTable component

## Usage

```
import {customTable} from 'fancyui';
export default angular.module('customTableDemo', [
  customTable.name
])
```

```
<ffan-custom-table
    is-custom-table="true"
    custom-column="vm.customColumn"
    table-data="vm.data"
    operations="vm.operations"
    page-change="vm.pageChange">
</ffan-custom-table>
```

```
export default class CustomtableController {
  constructor() {
    "ngInject";
    this.customColumn = [
      {
        key: 'storeId',
        name: '门店编号',
        checked: true
      },
      {
        key: 'storeName',
        name: '门店名称',
        checked: true
      },
      {
        key: 'isPhysicalStoreName',
        name: '门店分类',
        checked: true
      },
      {
        key: 'businessType',
        name: '门店类型',
        checked: true
      },
      {
        key: 'storePhone',
        name: '门店电话',
        checked: true
      },
      {
        key: 'plazaName',
        name: '所属广场',
        checked: false
      },
      {
        key: 'merchantName',
        name: '所属商户',
        checked: false
      }
    ];
    this.operations = [
      {
        name: '查看',
        action: (row) => {
          console.log(row);
          alert('点击了查看按钮, 门店id为:' + row.storeId);
        }
      },
      {
        name: '修改',
        action: (row) => {
          console.log(row);
          alert('点击了修改按钮, 门店id为:' + row.storeId);
        }
      }
    ];
    this.data = {
      "totalCount": 23842,
      "items": [{
        "storeId": 1123,
        "storeName": "DO it",
        "storePhone": "0123-45678910",
        "businessType": "电影",
        "isPhysicalStoreName": '虚拟门店',
        "plazaName": "超级广场",
        "merchantName": "宇宙商户"
      }]
    };
  }

  pageChange(pageNo) {
    console.log(pageNo)
  }
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/customtable
