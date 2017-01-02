import RateModule from './index'
import RateController from './rate.controller';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Rate', () => {
  let $rootScope, $compile, controller;

  beforeEach(window.module(RateModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    controller = new RateController();
  }));

  describe('测试组件', () => {

    describe('测试Controller', () => {

      it('controller 默认状态', () => {
        expect(controller.rateCount).to.equal(5);
        expect(controller.rateCount).to.equal(controller.rateArr.length);
        expect(controller.rateColors.length).to.equal(3);
        expect(controller.lowColor).to.equal('#99A9BF')
        expect(controller.midColor).to.equal('#f7ba2a')
        expect(controller.highColor).to.equal('#FF9900')

        expect(controller.lowFlag).to.equal(2);
        expect(controller.highFlag).to.equal(4);
      })
      /**
      it('输入超过max的值，plus按钮应该disabled', () => {
        var element = $compile('<input-number value="11" min="1" max="10" ></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $plusButton = finder.plusButton();

        expect($plusButton.hasClass('disabled')).to.be.true;

        var $inputValue = finder.inputValue();
        expect($inputValue.val()).to.equal('11');
        $plusButton.triggerHandler('click');
        expect($inputValue.val()).to.equal('11');
      });
 */
    });

  })

});
