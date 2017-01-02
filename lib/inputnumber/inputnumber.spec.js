import InputNumberModule from './index'
import InputNumberController from './inputnumber.controller';

function getDOM(element, selector) {
  var $element = angular.element(element);
  return angular.element($element[0].querySelectorAll(selector));
}

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  plusButton() {
    return angular.element(this.element.querySelectorAll('span.input-number-plus'));
  }

  minusButton() {
    return angular.element(this.element.querySelectorAll('span.input-number-minus'));

  }

  inputValue() {
    return angular.element(this.element.querySelectorAll('div.input-number-input-wrap input'));
  }

  inputValueDiv() {
    return angular.element(this.element.querySelectorAll('div.input-number'));
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('InputNumber', () => {
  let $rootScope, controller, $compile;

  beforeEach(window.module(InputNumberModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    controller = new InputNumberController();
  }));

  describe('测试组件', () => {

    describe('测试基本用法', () => {

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

      it('输入小于min的值，minus按钮应该disabled', () => {
        var element = $compile('<input-number value="1" min="5" max="10" ></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $minusButton = finder.minusButton();
        expect($minusButton.hasClass('disabled')).to.be.true;
      });

      it('默认min值0，max值无', () => {
        var element = $compile('<input-number value="0" ></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);

        var $buttonMinus = finder.minusButton();
        var $inputValue = finder.inputValue();

        expect($buttonMinus.hasClass('disabled')).to.be.true;
        expect($inputValue.val()).to.equal('0');
      })

      it('plus和minus功能应该生效', () => {
        var element = $compile('<input-number value="10" ></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);

        var $buttonMinus = finder.minusButton();
        var $buttonPlus = finder.plusButton();
        var $inputValue = finder.inputValue();

        expect($inputValue.val()).to.equal('10');

        $buttonMinus.triggerHandler('click');
        expect($inputValue.val()).to.equal('9');
        $buttonPlus.triggerHandler('click');
        expect($inputValue.val()).to.equal('10');
      })

      it('测试disabled', () => {
        var element = $compile('<input-number value="1" min="1" max="10" disabled="true"></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);

        var $buttonMinus = finder.minusButton();
        var $buttonPlus = finder.plusButton();
        var $inputValue = finder.inputValue();
        var $inputValueDiv = finder.inputValueDiv();

        expect($inputValueDiv.hasClass('disabled')).to.be.true;

        $buttonPlus.triggerHandler('click');
        expect($inputValue.val()).to.equal('1')
      })

      it('测试设置步数', () => {
        var element = $compile('<input-number value="1" min="1" max="100" step="5" on-change="vm.onChange"></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);

        var $buttonMinus = finder.minusButton();
        var $buttonPlus = finder.plusButton();
        var $inputValue = finder.inputValue();

        $buttonPlus.triggerHandler('click');
        expect($inputValue.val()).to.equal('6');

        $buttonMinus.triggerHandler('click');
        expect($inputValue.val()).to.equal('1');

      })

      it('测试浏览器事件：blur and change', () => {
        var element = $compile('<input-number value="1" min="1" max="100" ></input-number>')($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);

        var $buttonMinus = finder.minusButton();
        var $buttonPlus = finder.plusButton();
        var $inputValue = finder.inputValue();

        $inputValue.val('20');
        $inputValue.triggerHandler('change');
        $inputValue.triggerHandler('blur');
        expect($inputValue.val()).to.equal('20');
        expect(finder.controller().vm.value).to.equal('20');

        /**
         * 最大值设了100
         */
        $inputValue.val('200');
        $inputValue.triggerHandler('change');
        $inputValue.triggerHandler('blur');
        expect($inputValue.val()).to.equal('100');
        expect($inputValue.val()).to.equal('100');


      })
    });

  })

});
