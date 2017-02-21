#穿梭框 transfer

## Intro

FancyUI transfer component

## Usage

```
import transferComponent from './transfer.component';
import { Transfer } from 'fancyui';

export default angular.module('transfer', [
  Transfer.name
])
.component('transfer', transferComponent);
```

```
<f-transfer
  source-data='vm.dataSource'
  titles='vm.transferOptions.titles'
  placeholders='vm.transferOptions.placeholders'
  operations='vm.transferOptions.operations'
  show-left-search='vm.transferOptions.showLeftSearch'
  show-right-search='vm.transferOptions.showRightSearch'
  add-btn='vm.transferOptions.addBtn'
  add-all-btn='vm.transferOptions.addAllBtn'
  del-btn='vm.transferOptions.delBtn'
  del-all-btn='vm.transferOptions.delAllBtn'>
</f-transfer>
```

```
export default class TransferController {
  constructor() {
    this.name = 'transfer';
    this.dataSource = [
      { key: 9103700, value: "沈阳分门店测试1（商圈dx测试店）" },
      { key: 9103705, value: "TESTing（TEST店）" },
      { key: 9103384, value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）" },
      { key: 9103381, value: "性能测试商圈01_勿动（性能测试商圈01_勿动店棒啊帮帮哒00100101010）" },
      { key: 9103347, value: "测试专用叶（勿动）（沈阳奥体店）" },
      { key: 9103346, storeName: "测试专用勿动111111111111", value: "测试专用勿动（沈阳北一路店）333333333333333333" },
      { key: 9103345, value: "测试专用勿动（沈阳太原街店）11111111111111111" },
      { key: 9103344, value: "测试专用叶（勿动）（沈阳奥体店1155555555）" }
    ]

    this.transferOptions = this.transferOptions || {
      titles:['门店列表', '已选择门店'],
      placeholders:['输入门店进行检索', '对已经出来的结果进行检索'],
      operations:['增加', '增加全部', '删除', '全部删除'],
      showLeftSearch:true,
      showRightSearch:false,
      addBtn:true,
      addAllBtn:true,
      delBtn:true,
      delAllBtn:false
    }
  }
}
```

### See what happened && get all config options

http://www.fancyui.org/#/zh-cn/component/transfer
