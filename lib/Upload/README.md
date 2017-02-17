#上传 upload

## Intro

FancyUI upload component

## Usage

```
import {upload} from 'fancyui';
export default angular.module('uploadDemo', [
  upload.name
])
```

```
<f-upload action="/action.do" accept="vm.accept" default-file-list="vm.defaultFileList" file-list="vm.fileList">
<span class="btn btn-default">
  <span class="glyphicon glyphicon-upload"></span>
  upload
</span>
</f-upload>

<f-dragger action="/action.do" file-list="vm.fileList">
  <div style="width: 150px;height: 150px;vertical-align: middle;font-size: 28px;color: #999;line-height: 150px;font-weight: lighter">
    drop
  </div>
</f-dragger>
  
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/upload
