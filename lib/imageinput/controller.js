import config from './default.config.js'

export default class Datepicker {
  constructor(Upload) {
    this.Upload = Upload;
  }

  /**
   * 上传图片
   */
  uploadFile(file, errFile) {
    let errInfo = this.catchErrFileError(errFile);
    if (errInfo && errInfo['data']) {
      alert(errInfo && errInfo['msg']);
      return;
    }

    if (!!file) {
      let options = {
        fileName: file,
        fileSize: 5242880,
        fileType: angular.toJson(['jpg', 'jpeg', 'png']),
        width: file && file.$ngfWidth,
        height: file && file.$ngfHeight,
        minWidth: 640,
        minHeight: 640
      };

      this.commonSvc
        .upload(options)
        .then(response=> {
          if (response) {
            this.pics.push({
              src: response && response.data && response.data.url
            });
          }
        });
    }
  }
}
