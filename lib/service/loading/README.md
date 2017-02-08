#服务器 loading

## Intro

FancyUI loading component

## Usage

```
import {Service} from 'fancyui';

export default angular.module('loading', [
  Service.name
])
```
```
<bp-button icon="ok" click="vm.show()">loading</bp-button>
<bp-button click="vm.close()">close</bp-button>
```

```
export default class LoadingController {
  constructor(LoadingService) {
    'ngInject'
    this.LoadingService = LoadingService;
  }

  show(e) {
    this.loading = this.LoadingService.loading({
      target: '#table-container',
      text: 'loading...'
    }); 
  }

  close() {
    this.loading.close();
  }
}
  
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/loading
