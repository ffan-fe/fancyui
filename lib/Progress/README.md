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
<f-progress percent="0" type="line"></f-progress>
<f-progress percent="80" stroke-width="8"></f-progress>
<f-progress percent="100" status="success"></f-progress>
<f-progress percent="60" status="exception"></f-progress>
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/progress
