#服务器 hint

## Intro

FancyUI hint component

## Usage

```
import hintComponent from './hint.component';
import {Service} from 'fancyui';

export default angular.module('hint', [
  Service.name
])
.component('hint', hintComponent);
```


```
export default class HintController {
  constructor(HintService) {
    'ngInject';
    this.HintService = HintService;
  }

  myHint() {
    this.HintService.hint({
      title: "我操作成功了",
      content: "结果是：" + (this.hintContent ? this.hintContent:'请输入要提示的内容')
    });
  }
}
  
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/hint
