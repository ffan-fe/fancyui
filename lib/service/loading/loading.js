/**
 * @description loading
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/loading
 */
import isDom from '../../tool/isDom';
import template from './loading.html';
import './loading.less';

export default class LoadingService {
  constructor($document, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$rootScope = $rootScope;
    this.$compile = $compile;
    this.isRunning = false;
  }

  /**
   * 从参数中提取target
   */
  extractTarget(target) {
    let defaultTarget = this.$document.find("body");
    if(!target){
      return defaultTarget;
    }

    if(typeof target ==='string'){
      return this.$document[0].querySelector(target);
    }

    if(angular.isElement(target) && !isDom(target)){
      return target[0];
    }
    
    return target ;
  }

  loading(param) {
    /**
     * destroy last element's scope if not closed. 
     */
    console.log('isloading')
    if (this.isRunning) {
      return this;
    }

    this.childScope = this.$rootScope.$new();
    let data = Object.assign(this.childScope.$new(), param);
    this.container = this.$compile(template)(data);
    let target = this.extractTarget(param.target);

    this.container.css('width', target.offsetWidth + 'px');
    this.container.css('height', target.offsetHeight + 'px');
    this.container.css('top', target.offsetTop + 'px');
    this.container.css('left', target.offsetLeft + 'px');
    this.container.css('display', 'block');

    angular.element(target).append(this.container);
    this.isRunning = true;
    return this;
  }

  close() {
    this.container.remove();
    this.isRunning = false;
    this.childScope.$destroy();
    
  }
}
