/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Jan 23 2017 14:40:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/message
 */

import './message.less'
import tpl from './message.html'
import ZINDEX from '../zindex.js'

export default class MessageService {
  constructor($document, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.count = 0;

    this.container = angular.element("<div class='f-message'><div>");
    this.$document.find("body").append(this.container);
  }

  success(content, duration) {
    this.messageFactory(content, duration, 'success')
  }

  info(content, duration) {
    this.messageFactory(content, duration, 'info')
  }

  error(content, duration) {
    this.messageFactory(content, duration, 'error')
  }

  warning(content, duration) {
    this.messageFactory(content, duration, 'warning')
  }

  loading(content, duration) {
    this.messageFactory(content, duration, 'loading')
  }

  messageFactory(content, duration, type) {
    this.count ++;
    this.childScope = this.$rootScope.$new();
    let data = Object.assign(this.childScope.$new(), {content, type});
    data.iconType = {
      info: 'info-circle',
      success: 'check-circle',
      error: 'cross-circle',
      warning: 'exclamation-circle',
      loading: 'loading'
    };

    let message = this.$compile(tpl)(data);

    message.css('z-index', ZINDEX.message + this.count);
    this.container.prepend(message);
    message.addClass('move-up-enter move-up-enter-active');

    setTimeout(() => message.removeClass('move-up-enter-active move-up-enter'), 1000);

    setTimeout(() => {
      message.addClass('move-up-leave move-up-leave-active');

      setTimeout(() => message.remove(), 500);
      this.count ++;
    }, duration || 3000);
  }
}

