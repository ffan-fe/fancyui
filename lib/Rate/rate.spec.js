//@TODO 测试覆盖率低于50%
import angular from 'angular';
import mocks from 'angular-mocks';

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
      let instance ; 

      beforeEach(()=>{
        /**
         * 初始化controller
         */

        instance = Object.create(RateController.prototype || null);
        instance.value = 3;
        RateController.call(instance);
      })

      it('controller 默认状态', () => {
        expect(controller.rateCount).to.equal(5);
        expect(controller.rateCount).to.equal(controller.rateArr.length);
        expect(controller.rateColors.length).to.equal(3);
        expect(controller.lowColor).to.equal('#99A9BF')
        expect(controller.midColor).to.equal('#f7ba2a')
        expect(controller.highColor).to.equal('#FF9900')

        expect(controller.lowFlag).to.equal(2);
        expect(controller.highFlag).to.equal(4);
      });

      it('设置当前rate数为3，rateArr前三个on 应该为true', () => {
    
        expect(instance.rateArr[0].on).to.be.true;
        expect(instance.rateArr[1].on).to.be.true;
        expect(instance.rateArr[2].on).to.be.true;
        expect(instance.rateArr[3].on).to.be.false;
        expect(instance.rateArr[4].on).to.be.false;
      })

      it('测试hover:当鼠标hover到index 3并且click时，index为3之前的都应该点亮', () => {
        controller.rateHover(3);
        controller.rateClick(3);
        expect(controller.rateArr[0].on).to.be.true;
        expect(controller.rateArr[1].on).to.be.true;
        expect(controller.rateArr[2].on).to.be.true;
        expect(controller.rateArr[3].on).to.be.true;
        expect(controller.rateArr[4].on).to.be.false;
      })

      it('测试默认颜色高，中，低', () => {
        controller.colors =['#99A9BF', '#f7ba2a', '#FF9900'];
        controller.rateHover(1);
        expect(controller.rateArr[0].color).to.be.equal('#99A9BF');
        expect(controller.rateArr[1].color).to.be.equal('#99A9BF');


        controller.rateHover(2);
        expect(controller.rateArr[0].color).to.be.equal('#f7ba2a');
        expect(controller.rateArr[1].color).to.be.equal('#f7ba2a');
        expect(controller.rateArr[1].color).to.be.equal('#f7ba2a');

        controller.rateHover(4);
        expect(controller.rateArr[0].color).to.be.equal('#FF9900');
        expect(controller.rateArr[1].color).to.be.equal('#FF9900');
        expect(controller.rateArr[2].color).to.be.equal('#FF9900');
        expect(controller.rateArr[3].color).to.be.equal('#FF9900');
        expect(controller.rateArr[4].color).to.be.equal('#FF9900');
      })

      it('测试rateLeave:当鼠标leave到index 2 时，index 2之前的hover应该为false',()=>{
        instance.rateLeave(2)
        expect(instance.rateArr[0].hover).to.equal(false);
        expect(instance.rateArr[1].hover).to.equal(false); 
      })
      
      it('测试restore, 设置默认index为3，然后hover到index 2，最终restore时 和默认一致',()=>{
        expect(instance.rateArr[2].on).to.be.true;
        instance.rateHover(1);
        expect(instance.rateArr[2].on).to.be.false;
        instance.restore();
        expect(instance.rateArr[2].on).to.be.true;
      })

      it('测试辅助文字，输入textArray，在点击星星时显示相应的文字',()=>{
        /**
         * new 一个实例
         */
        instance = Object.create(RateController.prototype || null);
        instance.textArray = ['极差', '失望', '一般', '满意', '惊喜'];
        RateController.call(instance);

        instance.rateHover(3);
        instance.rateClick(3);

        expect(instance.rateText).to.be.equal(instance.textArray[3]);

      })

    });

  })

});
