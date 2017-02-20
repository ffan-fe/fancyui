/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 10 2017 13:59:30 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/upload
 */
import 'ng-file-upload'

import uploadComponent from './upload.component';
import draggerComponent from './dragger/dragger.component.js';

let uploadModule = angular.module('f-upload', [
  'ngFileUpload'
])

.component('fUpload', uploadComponent)
.component('fDragger', draggerComponent);

export default uploadModule;
