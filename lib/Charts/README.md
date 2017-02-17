#图表 charts

## Intro

FancyUI charts component

## Usage

```
import piechartComponent from './piechart.component';
import {Charts} from 'fancyui';

export default angular.module('pieChart', [
  Charts.name
])
.component('pieChart', piechartComponent);
```

```
<ng-echarts class="echarts" ec-config="vm.pieConfig" ec-option="vm.pieOption"></ng-echarts>
```

```
let self = this;
self.pieConfig = {
  theme: 'default',
  dataLoaded: true
};

self.pieOption = {
  tooltip: {
  trigger: 'item',
  formatter: "{a} <br>{b} : {c} ({d}%)"
},
legend: {
  orient: 'vertical',
  x: '65%',
  top: '25%',
  data: ['正常', '断开', '等待'],
  formatter: function (name) {
    var oa = self.pieOption.series[0].data;
    for (var i = 0; i &lt; self.pieOption.series[0].data.length; i++) {
      if (name == oa[i].name) {
        return name + ':' + oa[i].value + '个';
      }
    }
  }
},
color: ['#bdea75', '#fe5454', '#faba3c'],
series: [
  {
    name: '比例分析',
    type: 'pie',
    radius: '55%',
    center: ['35%', '50%'],
    data: [
    {
      value: '2',
      name: '正常'
    },
    {
      value: '2',
      name: '断开'
    },
    {
      value: '2',
      name: '等待'
    }],
    itemStyle: {
      normal: {
        label: {
          show: false,
          formatter: '{b} : {c} ({d}%)'
        }
      },
      labelLine: {
        show: true
      }
    }
}]
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/piechart

http://www.fancyui.org/#/zh-cn/component/linechart

http://www.fancyui.org/#/zh-cn/component/gaugechart