#表格 ffanTable

## Intro

FancyUI ffanTable component

## Usage

```
import {ffanTable} from 'fancyui';
export default angular.module('ffanTableDemo', [
  ffanTable.name
])
```

```
<div class="table-container">
  <div class="table-wrapper ng-scope ng-table">
	<table class="table table-bordered table-hover" ng-table="vm.tableParams">
	  <thead>
		<tr>
		  <th style="width: 25%;">名称</th>
		  <th style="width: 15%;">视图名称</th>
		  <th style="width: 20%;">上一次编译结果的状态</th>
		  <th style="width: 20%;">上一次编译结果的序号</th>
		  <th style="width: 20%;">上一次编译失败的序号</th>
		</tr>
	  </thead>
	  <tbody ng-if="vm.tableParams.data.length != 0">
	    <tr ng-repeat="row in $data">
		  <td>{{row.name}}</td>
		  <td>{{row.viewName}}</td>
		  <td>{{row.lastStatus}}</td>
		  <td>{{row.lastNO}}</td>
		  <td>{{row.lastFailNO}}</td>
	    </tr>
	  </tbody>
	</table>
	<div class="prompt" ng-if="vm.tableParams.data.length != 0">
	  <p class="text-warning">点击存储卷名称可对其进行文件导入，导出操作.</p>
	</div>
	<div class="no-result" ng-if="vm.tableParams.data.length == 0">结果为空</div>
  </div>
</div>
```

```
constructor(NgTableParams) {
  "ngInject";
  this.NgTableParams = NgTableParams;
  this.data = {
      "total": 85,
      "datas": [
        {
          "name": 'fix_web',
          "viewName": "tool-wd",
          "lastStatus": "SUCCESS",
          "lastNO": "#10",
          "lastFailNO": "#4"
         },
         {
           "name": 'fix_web',
           "viewName": "tool-wd",
           "lastStatus": "SUCCESS",
           "lastNO": "#10",
           "lastFailNO": "#4"
         }
       ]
    };
  this.init();
}

init(){
  var self = this;
    self.tableParams = new this.NgTableParams({
      page: 1,
      count: 5
    }, {
    counts: [],
      getData: function (params) {
      params.total(self.data.total);
      return self.data.datas;
    }
  });
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/ffanTable
