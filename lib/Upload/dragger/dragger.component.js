import template from './dragger.html';
import controller from './../upload.controller.js';

let uploadComponent = {
  restrict: 'E',
  bindings: {
    name: '@',
    defaultFileList: '<',
    fileList: '=',
    action: '@',
    data: '<',
    headers: '<',
    showUploadList: '<',
    multiple: '<',
    accept: '@',
    beforeUpload: '<',
    customRequest: '<',
    onChange: '<',
    listType: '@',
    onPreview: '<',
    onRemove: '<',
    disabled: '<',
    withCredentials: '<'
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadComponent;
