/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/<%= name %>
 */


import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Component from './<%= name %>.component';
import <%= upCaseName %>Template from './<%= name %>.html';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }
}

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController,$compile;

  beforeEach(window.module(<%= upCaseName %>Module.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    makeController = () => {
      return new <%= upCaseName %>Controller();
    };
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {});
  });

});
