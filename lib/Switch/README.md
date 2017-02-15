#开关 switch

## Intro

FancyUI switch component

## Usage

```
import switchdemoComponent from './switchdemo.component';
import {Switch} from 'fancyui';

export default angular.module('switchDemo', [
  Switch.name
])
.component('switchDemo', switchdemoComponent);
```

```
<f-switch
  disabled="vm.disabled"
  on-text="vm.onText"
  off-text="vm.offText"
  default-checked="vm.defaultChecked"
  on-change="vm.onChange">
</f-switch>
```

```
export default class SwitchdemoController {
  constructor() {
  'ngInject';
  this.onText = '开';
  this.offText = '关';
  this.disabled = false;
  this.defaultChecked = true;
}

  onChange(checked) {
    console.log(checked);
  }
}
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/switch
