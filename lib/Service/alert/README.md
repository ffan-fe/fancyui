#服务器 alert

## Intro

FancyUI alert component

## Usage

```
import alertComponent from './alert.component';
import {Service} from 'fancyui';

export default angular.module('alert', [
  Service.name
])
.component('alert', alertComponent);
```

```
<button class="btn btn-default" ng-click="myAlert()">Alert</button>
<button class="btn btn-default" ng-click="myAlertWithHint()">Alert with hint</button>
<button class="btn btn-default" ng-click="myConfirm()">Confirm</button>
```

```
export default class AlertController {
  constructor($scope, AlertService) {
    'ngInject'
    this.AlertService = AlertService;
    $scope.myAlert = this.myAlert.bind(this);
    $scope.myAlertWithHint = this.myAlertWithHint.bind(this);
    $scope.myConfirm = this.myConfirm.bind(this);
  }

  myAlert() {
    this.AlertService
      .alert({
        title: "测试",
        content: "你好，我是警告"
    })
    .then(function () {
      alert("你刚才点了确定");
    });
  }

  myAlertWithHint() {
    this.AlertService
      .alert({
        title: "测试",
        content: "你好，我是警告",
        hint: ["操作提示1", "如果想要在操作的时候给点提示，那就写在这里"]
    })
    .then(function () {
      alert("你刚才点了确定");
    });
  }


  myConfirm() {
    this.AlertService
      .confirm({
        title: "测试",
        contents: ["你好，确定要删除以下内容吗？", "aaa, bbb"]
      })
      .then(function () {
        alert("你刚才点了确定");
      }, function () {
        alert("你刚才点了取消");
    });
  }
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/alert
