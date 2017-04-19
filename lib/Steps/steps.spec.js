import angular from 'angular';
import mocks from 'angular-mocks';

import StepsModule from './index.js';

describe('Steps', () => {
  let $rootScope, $compile, $controller;

  beforeEach(window.module(StepsModule.name));
  beforeEach(inject((_$rootScope_,_$compile_,$componentController) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    $controller = $componentController;
  }));
  describe('Controller', () => {
    // controller specs
    it('测试getStepWidth', () => {
      let vm = {};

      vm.stepsData = [
        {
          title: '总览',
          iconContent: '1'
        },
        {
          title: '设计',
          iconContent: '2'
        },
        {
          title: '施工',
          iconContent: '3'
        },
        {
          title: '验收',
          iconContent: '4'
        },
        {
          title: '发布',
          icon: `<span class="glyphicon glyphicon-play-circle"></span>`
        }
      ];
      $rootScope.vm = vm;
      $compile(`<f-steps current="1"
             steps-data="vm.stepsData"
             on-click="vm.onClick"></f-steps>`)($rootScope);
      $rootScope.$digest();

      let controller = $controller('fSteps', {'this': vm}, vm);

      expect(controller.getStepWidth(vm.stepsData, false)).to.equal('25%');
      expect(controller.getStepWidth(vm.stepsData, true)).to.equal('auto');
    });
    it('测试默认current', () => {
      let vm = {};

      vm.stepsData = [
        {
          title: '总览',
          iconContent: '1'
        },
        {
          title: '设计',
          iconContent: '2'
        },
        {
          title: '施工',
          iconContent: '3'
        },
        {
          title: '验收',
          iconContent: '4'
        },
        {
          title: '发布',
          icon: `<span class="glyphicon glyphicon-play-circle"></span>`
        }
      ];

      let controller = $controller('fSteps', {'this': vm}, vm);
      expect(controller.current).to.equal(0);
    });

    it('如果没有传入stepsData应该报错', () => {
      let vm = {};

      vm.stepsData = '';

      expect(() => $controller('fSteps', {'this': vm}, vm)).to.throw(Error);
    });

    it('测试getStepWidth', () => {
      let vm = {};

      vm.stepsData = [];
      let controller = $controller('fSteps', {'this': vm}, vm);

      expect(controller.getStepWidth(vm.stepsData, false)).to.equal('auto');

    });
  });
});
