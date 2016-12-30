import InputNumberModule from './index'
import InputNumberController from './inputnumber.controller';

describe('InputNumber', () => {
  let $rootScope, controller, $compile;

  beforeEach(window.module(InputNumberModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    controller = new InputNumberController();
  }));

  describe('测试组件', () => {

    it('测试基础用法', () => {
      var elementBase = $compile('<input-number value="1" min="1" max="10" on-change="vm.onChange"></input-number>')($rootScope);
      $rootScope.$digest()
      expect(elementBase.html()).to.contain('bp-btn-danger');
    });

  })

});
