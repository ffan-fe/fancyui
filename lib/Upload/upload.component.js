import template from './upload.html';
import controller from './upload.controller';
import './upload.less';

let uploadComponent = {
  restrict: 'E',
  bindings: {
    name: '@',
    defaultFileList: '<',
    fileList: '=',
    action: '@',
    data: '<',
    headers: '<',
    //showUploadList: '<',
    multiple: '<',
    accept: '<',
    beforeUpload: '<',
    customRequest: '<',
    //onChange: '<',
    listType: '@',
    //onPreview: '<',
    onRemove: '<',
    onSuccess: '<',
    onFail: '<',
    disabled: '<',
    withCredentials: '<'
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadComponent;
