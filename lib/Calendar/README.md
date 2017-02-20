#日历 calendar

## Intro

FancyUI calendar component

## Usage

```
import {calendar} from 'fancyui';
export default angular.module('calendarDemo', [
  calendar.name
])
```

```
<f-calendar
  ng-model="vm.model"
  on-time-set="vm.onSetTime(newDate,oldDate)"
  before-render="vm.beforeRender($view, $dates, $leftDate, $upDate, $rightDate)"
  config="vm.dataConfig">
</f-calendar>	
```

```
export default class CalendarController {
  constructor() {
    'ngInject';
    this.model = '2016-10-30 12:02:00';                        //默认时间
    this.dataConfig = {
      startView:'day',
      minuteStep: 20,
      modelType: 'YYYY-MM-DD HH:mm:ss',
      minView: 'minute'
    }
  }
  onSetTime(newDate, oldDate) {
    console.log('newDate', newDate);
    console.log('oldDate', oldDate);
  }
}
```


### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/calendar
