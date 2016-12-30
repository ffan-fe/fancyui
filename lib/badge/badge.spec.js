import BadgeModule from './index'
import BadgeController from './badge.controller';

describe('Badge', () => {
  let $rootScope,controller;

  beforeEach(window.module(BadgeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    controller =  new BadgeController();
  }));

  describe('Controller', () => {
    it('如果dot true, countValue不计算值', () => { 
      controller.dot = true;
      controller.init();
      expect(controller.countValue).to.equal('');
    });

    
  });

});
