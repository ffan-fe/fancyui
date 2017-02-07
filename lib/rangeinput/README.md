#滑动输入条 rangeinput

## Intro

FancyUI rangeinput component

## Usage

```
import sliderinputComponent from './sliderinput.component';
import {RangeInput} from 'fancyui';
export default angular.module('sliderInput', [
  RangeInput.name
])
.component('sliderInput', sliderinputComponent);
```

```
<div class="range-container">
  <div class="range-controller">
    <div class="ffan-range ffan-range--default" min="0" max="1024" step="1">
    <div class="ffan-range__range" end="{{_c}}"></div>
    <div class="ffan-range__thumb" ng-model="_c" name="input"></div>
  </div>
  </div>
  <div class="range-input">
    <input type="number" class="form-control" ng-model="_c" min="0" max="1024" step="1"> M
  </div>
</div>
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/sliderinput
