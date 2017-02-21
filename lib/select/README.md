#选择器 select

## Intro

FancyUI select component

## Usage

```
import {select} from 'fancyui';
export default angular.module('selectDemo', [
  select.name
])
```

```
<f-select data="vm.data" ng-model="vm.city" on-item-selected="vm.onSelect($item)"></f-select>
```

```
export default class SelectController {
  constructor() {
    this.city = {};
    this.data = [
      { id: '1001', name: '上海' },
      { id: '1002', name: '北京' },
      { id: '1003', name: '广州' },
      { id: '1004', name: '杭州' },
      { id: '1005', name: '深圳' }
    ]
  }
  onSelect($item) {
    console.log($item)
  }
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/select
