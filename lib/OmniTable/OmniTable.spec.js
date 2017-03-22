/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/OmniTable
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import OmniTableModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('OmniTable', () => {
  let $rootScope,$compile;

  beforeEach(window.module(OmniTableModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {});
  });

});
