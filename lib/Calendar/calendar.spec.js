/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/calendar
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import CalendarModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  find(selector) {
    return angular.element(this.element.querySelectorAll(selector));
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }

  input(){
    return this.find('a.dropdown-toggle input');
  }
  
}

describe('Calendar', () => {
  let $rootScope, $compile, element, finder;

  beforeEach(window.module(CalendarModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {

    describe('测试基本用法', () => {

      beforeEach(() => {
        $rootScope.model = '2016-10-30 12:02:00';
        $rootScope.dataConfig = {
          startView: 'day',
          minuteStep: 20,
          modelType: 'YYYY-MM-DD HH:mm:ss',
          minView: 'minute'
        };

        $rootScope.onSetTime = function (newDate, oldDate) {
          $rootScope.newDate = newDate;
          $rootScope.oldDate = oldDate;
        }

        element = $compile('<f-calendar ng-model="model" on-time-set="onSetTime(newDate,oldDate)" config="dataConfig"></f-calendar>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      });

      it('应该渲染出设置的model值', () => {
         expect(finder.input().val()).to.be.equal($rootScope.model);
      });

      it('测试toogle',()=>{
        expect(finder.find('.calendar').hasClass('open')).to.be.false;
        finder.find('.calendar').triggerHandler('click');
        expect(finder.find('.calendar').hasClass('open')).to.be.true;
        angular.element(document).triggerHandler('click');
        expect(finder.find('.calendar').hasClass('open')).to.be.false;
      })

      it('当打开日历时，测试默认定位到startview ',()=>{
        finder.find('.calendar').triggerHandler('click');
        expect(finder.find('table.table-condensed').hasClass($rootScope.dataConfig.startView+'-view')).to.be.true;
        expect(finder.find('table.table-condensed td.active').text()).to.be.equal('30');
      })

    });
  });

});
