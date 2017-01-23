/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Jan 23 2017 14:40:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/message
 */

import Base from '../../base';
export default class MessageController extends Base{
  constructor($state,$translate, Message) {
    'ngInject';
    super($state,$translate)

    this.Message = Message;

  }

  success() {
    this.Message.success('success', 5000);
  }
  info() {
    this.Message.info('info');
  }
  error() {
    this.Message.error('error');
  }
  warning() {
    this.Message.warning('warning');
  }
  loading() {
    this.Message.loading('loading');
  }
}
