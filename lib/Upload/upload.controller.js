/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 10 2017 13:59:30 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/upload
 */

class UploadController {
  constructor(Upload, $timeout) {
    'ngInject'
    let listTypeRange = ['text', 'picture'];
    this.Upload = Upload;

    this.name = this.name || 'file';
    this.showUploadList = this.showUploadList === undefined || true;
    this.multiple = !!this.multiple;
    this.withCredentials = !!this.withCredentials;

    this.listType = this.listType && listTypeRange.includes(this.listType) ? this.listType : 'text';

    if (!this.action) {
      throw new Error('f-upload: `action` field is required');
    }

    this.onChange =this.upload;

    this.defaultFileList = this.defaultFileList || [];

    this.fileList = this.fileList || [];
    this.defaultFileList.forEach(v => {
      this.fileList.push(fileToObject(v));
    });
  }

  upload($files, $file, files, $duplicateFiles, $invalidFiles, $event) {
    if (files && files.length) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var data = {};
        var dataToPost = {};
        var config = {};

        if (file.$error) {
          alert(this.parseError(file));
          return false;
        }

        if (!file.$error) {

          if (this.beforeUpload && typeof this.beforeUpload == 'function') {
            if (!this.beforeUpload(files, this.fileList)) {
              return false;
            }
          }

          if (this.data) {
            switch (typeof this.data) {
              case 'object':
                dataToPost = this.data;
                break;
              case 'function':
                data = this.data(file);
                if (typeof data == 'object') {
                  dataToPost = data
                }
                break;
            }
          }

          config.url = this.action;
          config.data = Object.assign({}, dataToPost, {
            [this.name]: file
          });
          if (this.headers) {
            config.headers = this.headers
          }
          config.withCredentials = this.withCredentials;

          var uploadPromise;

          if (this.customRequest && typeof this.customRequest == 'function') {
            uploadPromise = this.customRequest(config);
          } else {
            uploadPromise = this.Upload.upload(config)
          }

          uploadPromise.then(response => {
            if (this.onSuccess) {
              this.onSuccess(response);
            }
          }, error => {
            if (this.onFail) {
              this.onFail(error);
            }
          }, evt => {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
        }
      }
    }
  }

  parseError(file) {
    switch (file.$error) {
      case 'minWidth':
        return `文件最小宽度为${file.$errorParam}`;
      case 'maxWidth':
        return `文件最大宽度为${file.$errorParam}`;
      case 'minHeight':
        return `文件最小高度为${file.$errorParam}`;
      case 'maxHeight':
        return `文件最大高度为${file.$errorParam}`;
      case 'minSize':
        return `文件最小为${file.$errorParam}`;
      case 'maxSize':
        return `文件最大为${file.$errorParam}`;
      case 'pattern':
        return `文件格式不符 ${file.$errorParam}`;
    }
  }
}

function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid || generateUid(),
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file,
    status: null,
    url: file.url
  };
}

function generateUid() {
  return parseInt(Math.random() * 100000);
}

export default UploadController;
