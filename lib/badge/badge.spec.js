import angular from 'angular';
import mocks from 'angular-mocks';

import BadgeModule from './index'
import BadgeController from './badge.controller';

describe('Badge', () => {
  let $rootScope, controller, $compile;

  beforeEach(window.module(BadgeModule.name));

  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    controller = new BadgeController();
  }));

  describe('Controller', () => {
    it('如果dot true, countValue不计算值', () => {
      controller.dot = true;
      controller.init();
      expect(controller.countValue).to.equal('');
    });

    it('max and count logic', () => {
      controller.count = 99;
      controller.max = 98;
      controller.init();
      expect(controller.countValue).to.equal('98+');

      controller.count = 1;
      controller.init();
      expect(controller.countValue).to.equal(1);
    });
  });

  describe('测试组件', () => {
    it('没有dot的情况，传入count，显示count', () => {
      var element = $compile('<bp-badge count="99"></bp-badge>')($rootScope);
      $rootScope.$digest()
      expect(element.html()).to.contain(99);
    });

    it('没有dot的情况，传入count和max值，取大的', () => {
      var element = $compile('<bp-badge count="99" max="98"></bp-badge>')($rootScope);
      $rootScope.$digest()
      expect(element.html()).to.contain('98+');
    });

    it('传了dot，不再计算count；并且显示class ffan-badge-dot', () => {
      var element = $compile('<bp-badge dot="true" count="99"></bp-badge>')($rootScope);
      $rootScope.$digest()
      expect(element.html()).not.to.contain(99);
    });

    it('支持内嵌HTML',()=>{
      var element = $compile('<bp-badge dot="true" count="99"><a href="#" id="content"></a></bp-badge>')($rootScope);
      $rootScope.$digest();

      expect(element[0].querySelector('#content')).to.not.be.null;
    })

  })

});
