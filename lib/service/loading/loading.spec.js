import angular from 'angular';
import mocks from 'angular-mocks';

import LoadingController from './loading';

describe('LoadingService', () => {
  let $rootScope, $compile, controller ;

  beforeEach(inject((_$rootScope_, _$compile_, $document) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    controller = new LoadingController($document,_$rootScope_,_$compile_);
  }));
  
  describe('测试Controller',()=>{
    it('应该有[loading,close]方法',()=>{
      expect(controller.loading).to.not.be.undefined;
      expect(controller.loading).to.not.be.undefined;
    });

    it('extractTarget 应该支持object, string',()=>{
      
    })
  })
});