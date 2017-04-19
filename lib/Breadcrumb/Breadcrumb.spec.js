/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/Breadcrumb
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import BreadcrumbModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controllerInstance() {
    return angular.element(this.element).scope().$$childHead.vm;
  }
}

describe('Breadcrumb', () => {
  let $rootScope,$compile;

  beforeEach(window.module(BreadcrumbModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      it('测试选项默认值', () => {
        let vm = {
          datasource: []
        };
        $rootScope.vm = vm;

        let element = $compile('<f-breadcrumb datasource="vm.datasource" on-click="vm.onClick"></f-breadcrumb>')($rootScope);
        let controller = new ElementFinder(element).controllerInstance();
        assert.equal(controller.datasource, null);
        assert.equal(typeof controller.onClick, 'function');
        assert.equal(controller.separator, '/');
      });
    });
  });

});
