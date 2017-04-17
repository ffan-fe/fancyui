/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import PaginationModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controllerInstance() {
    return angular.element(this.element).scope().$$childHead.vm;
  }

}

describe('Pagination', () => {
  let $rootScope,$compile;

  beforeEach(window.module(PaginationModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $rootScope.onChange = () => {

    };
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      it('测试 calculateViewPageRange', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        let expectResult = [1,2,3,4,5, 'next5', 10];
        let result = controllerInstance.calculateViewPageRange(1, [1,2,3,4,5,6,7,8,9,10]);
        assert.deepEqual(result, expectResult)
      });
      it('测试 calculateViewPageRange', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        let expectResult = [1,'pre5',45,46,47,48,49,50];
        let result = controllerInstance.calculateViewPageRange(47, [...Array(50).keys()].map(x => ++x));
        assert.deepEqual(result, expectResult)
      });

      it('测试 calculateViewPageRange', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        let expectResult = [1,'pre5',43,44,45,46,47, 'next5', 50];
        let result = controllerInstance.calculateViewPageRange(45, [...Array(50).keys()].map(x => ++x));
        assert.deepEqual(result, expectResult)
      });

      it('测试 calculateModelPageRange', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        let expectResult = [...Array(10).keys()].map(x => ++x);
        let result = controllerInstance.calculateModelPageRange();

        assert.deepEqual(result, expectResult)
      });
      it('测试 onPageClick', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        controllerInstance.onPageClick({
          target: {
            className: 'f-pagination-prev'
          }
        });

        assert.equal(controllerInstance.defaultCurrent, 1);

        controllerInstance.onPageClick({
          target: {
            className: 'f-pagination-next'
          }
        });
        assert.equal(controllerInstance.defaultCurrent, 2);
        controllerInstance.onPageClick({
          target: {
            className: 'f-pagination-jump-prev'
          }
        });
        assert.equal(controllerInstance.defaultCurrent, 1);
        controllerInstance.onPageClick({
          target: {
            className: 'f-pagination-jump-next'
          }
        });
        assert.equal(controllerInstance.defaultCurrent, 6);
      });
      it('测试 onGoTo', () => {
        let element = $compile('<f-pagination on-change="onChange" show-total="false" total="100" show-size-changer="true" show-quick-jumper="true"></f-pagination>')($rootScope);
        let controllerInstance = new ElementFinder(element).controllerInstance();
        controllerInstance.onGoTo('5');
        assert.equal(controllerInstance.defaultCurrent, 5);
      });
    });
  });

});
