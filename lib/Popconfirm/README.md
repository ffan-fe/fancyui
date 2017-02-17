#气泡确认框 popconfirm

## Intro

FancyUI popconfirm component

## Usage

```
import popconfirmComponent from './popconfirm.component';
import {PopConfirm} from 'fancyui';

export default angular.module('popConfirm', [
  PopConfirm.name,
.component('popConfirm', popconfirmComponent);
```

```
<button type="button" class="btn btn-default" ng-click="vm.topPop($event)"><span>Top</span></button>
```

```
constructor($scope, Popconfirm) {
  'ngInject';
  this.$scope = $scope;
  this.Popconfirm = Popconfirm;
}

topPop(e) {
  this.Popconfirm.pop({
    title: '确定要删除top吗?',
    placement: 'top',
    okText: '确定',
    cancelText: '取消'
  }, e).then(function () {
    alert('点了确定');
  }, function () {
    alert('点了取消');
  });
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/popconfirm
