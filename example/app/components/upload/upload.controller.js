/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Tue Jan 10 2017 13:59:30 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/upload
 */

export default class UploadController {
  constructor($state, Message) {
    'ngInject'
    this.$state = $state;
    this.Message = Message;
    this.name = 'upload';

    this.accept = {
      size: {min: 10, max: '20MB'},
      width: {min: 1000, max: 10000},
      height: {min: 100, max: 300},
      pattern: 'image/*'
    };

    this.defaultFileList = [{
      url: 'http://www.fancyui.org/img-a04b6a41f26906e5c8732586d2d1261b.png',
      name: 'test.png'
    }];
    this.onRemove = () => {
      this.Message.info('remove called');
    };
    this.fileList1 = [];
    this.fileList2 = [];
    this.fileList3 = [];
    this.fileList4 = [];
  }
}
