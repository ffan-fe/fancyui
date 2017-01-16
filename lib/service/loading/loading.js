/**
 * @description loading
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/loading
 */

import template from './loading.html'
import './loading.less'

export default class LoadingService {
  constructor($document, $q, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;
  }

  /**
   * 从参数中提取target
   */
  extractTarget(param) {
    let defaultTarget = this.$document.find("body");
    if (!param) {
      return defaultTarget;
    }
    if (!param.target) {
      return defaultTarget;
    }
    if (typeof param.target === 'string') {
      return this.$document[0].querySelector(param.target);
    }

    return param.target;
  }

  loading(param) {
    /**
     * destroy last element's scope if not closed. 
     */
    if (this.childScope) {
      this.close();
    }

    this.childScope = this.$rootScope.$new();
    let data = Object.assign(this.childScope.$new(), param);
    this.container = this.$compile(template)(data);
    let target = this.extractTarget(param);

    this.container.css('display', 'block');
    this.container.css('width', target.offsetWidth+'px');
    this.container.css('height', target.offsetHeight+'px');
    this.container.css('top', target.offsetTop+'px');
    this.container.css('left', target.offsetLeft+'px');
    
    angular.element(target).append(this.container);

    return this;
  }

  close() {
    this.childScope.$destroy();
    this.container.remove();
  }
}
