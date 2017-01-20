import angular from 'angular';
import mocks from 'angular-mocks';

import ProgressModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  find(selector) {
    return angular.element(this.element.querySelector(selector));
  }

  querySelector(selector) {
    return this.element.querySelector(selector);
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}
describe('Progress', () => {
  let $rootScope, $compile, element, finder, q;

  beforeEach(window.module(ProgressModule.name));
  beforeEach(inject((_$rootScope_, _$compile_, $q) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    q = $q;
  }));

  describe('测试组件', () => {

    describe('测试类型为line', () => {
      beforeEach(() => {
        $rootScope.percent = 0;
        element = $compile('<bp-progress percent="percent" type="line"></bp-progress>')($rootScope);
        $rootScope.$digest();
        finder = new ElementFinder(element);
      })

      it('默认的stokeWidth 应该是8', () => {
        expect(finder.querySelector('.ffan-progress-outer').style.height).to.equal('8px');
        expect(finder.querySelector('.ffan-progress-inner').style.width).to.equal('0%');
      });

      it('设置percent', () => {
        $rootScope.percent = 50
        $rootScope.$digest();

        expect(finder.querySelector('.ffan-progress-outer').style.height).to.equal('8px');
        expect(finder.querySelector('.ffan-progress-inner').style.width).to.equal('50%');
      })
    });

    describe('测试类型为circle', () => {
      beforeEach(() => {
        $rootScope.percent = 0;
        element = $compile('<bp-progress percent="percent" type="circle"></bp-progress>')($rootScope);
        $rootScope.$digest();
        finder = new ElementFinder(element);
      })

      it('渲染的类型应该是circle', () => {
        expect(finder.querySelector('.ffan-progress-circle')).to.not.be.null;
      });

      it('默认的stokeWidth 应该是5', () => {
        expect(finder.querySelector('path').getAttribute('stroke-width')).to.be.equal('5');
      });
    })
  });
});
