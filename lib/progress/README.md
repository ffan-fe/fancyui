#按钮 progress

## Intro

FancyUI progress component

## Usage

```
import progressdemoComponent from './progressdemo.component';
import {Progress} from 'fancyui';
export default angular.module('progressDemo', [
  Progress.name
])
.component('progressDemo', progressdemoComponent);
```

```
<bp-progress percent="0" type="line"></bp-progress>
<bp-progress percent="80" stroke-width="8"></bp-progress>
<bp-progress percent="100" status="success"></bp-progress>
<bp-progress percent="60" status="exception"></bp-progress>
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/progress
