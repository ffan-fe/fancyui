import angular from 'angular';
import mocks from 'angular-mocks';

import SelectModule from './index';

class MockData {
  constructor() {
    this.item1 = { id: '1001', label: 'bjtz', name: '北京通州万达广场' };
    this.item2 = { id: '1002', label: 'shjq', name: '上海江桥万达广场' };
    this.item3 = { id: '1003', label: 'shzp', name: '上海周浦万达广场' };
    this.item4 = { id: '1004', label: 'hf', name: '合肥万达广场' };
    this.item5 = { id: '1005', label: 'hf', name: '武汉万达广场' };
  }

  getData(isGroup) {
    let returnArray = [];
    if (isGroup) {
      returnArray.push({
        title: "热门广场",
        options: [this.item1, this.item2, this.item3]
      });

      returnArray.push({
        title: '其他广场',
        options: [this.item4, this.item5]
      });

      return returnArray;
    }
    else {
      returnArray.push(this.item1);
      returnArray.push(this.item2);
      returnArray.push(this.item3);
      returnArray.push(this.item4);
      returnArray.push(this.item5);
      return returnArray;
    }
  }
}

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  find(selector) {
    return angular.element(this.element.querySelectorAll(selector));
  }

  groupTitle() {
    return this.find('li.f-select-group_title');
  }

  items() {
    return this.find('li.f-select-dropdown_item');
  }

  dropDown() {
    return this.find('.f-select-dropdown');
  }

  dropDownEmpty() {
    return this.find('.f-select-dropdown .f-select-dropdown_empty');
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Select', () => {
  let $rootScope, $compile, mockData, element, finder, q;

  beforeEach(window.module(SelectModule.name));
  beforeEach(inject((_$rootScope_, _$compile_, $q) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    mockData = new MockData();
    q = $q;
  }));

  describe('测试组件', () => {
    describe('组件无数据时展示', () => {

      it('dropdown里内容应该为无数据', () => {
        $rootScope.model = {};

        let element = $compile('<f-select ng-model="model"></f-select>')($rootScope);
        $rootScope.$digest();
        let dropDownEmpty = new ElementFinder(element).dropDownEmpty();
        expect(dropDownEmpty.html()).to.be.equal('无数据');
      });

    });

    describe('测试组件默认数据渲染', () => {

      beforeEach(() => {
        $rootScope.city = {};
        $rootScope.data = mockData.getData(false);
        element = $compile('<f-select data="data" ng-model="city"></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      })

      it('测试readonly属性', () => {
        expect(finder.find('input')[0].getAttribute('readonly')).to.equal('readonly');
        var elementRemote = $compile('<f-select is-remote="true" ng-model="city" remote-method="getData($value)"></f-select>')($rootScope);
        expect(new ElementFinder(elementRemote).find('input')[0].getAttribute('readonly')).to.equal(null)
      })

      it('传入的data的长度，等于页面渲染出来的items 长度', () => {
        let items = finder.items();
        expect(items.length).to.equal($rootScope.data.length);
      });

      it('默认状态之下（点击之前），dropdown是关闭着的（非打开状态）', () => {
        expect(finder.find('.f-select').hasClass('active')).to.be.false;
      });

      it('点击input框时，dropdown打开，点击空白处，dropdown关闭', () => {
        finder.find('.f-input').triggerHandler('click');

        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        angular.element(document).triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.false;
      })

      it('点击input框时，dropdown打开，选择item，高亮item,设置ng-model', () => {
        let index = 2;
        let items = finder.items();
        finder.find('.f-input').triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        let activeItem = angular.element(items[index]);
        activeItem.triggerHandler('click');
        //高亮item
        expect(activeItem.hasClass('active')).to.be.true;
        //测试ngmodel
        expect($rootScope.city).to.equal($rootScope.data[index]);

      })

    })

    describe('测试group组件', () => {
      
      beforeEach(inject(()=>{
        $rootScope.city = {};
        $rootScope.groupData = mockData.getData(true);
        element = $compile('<f-select data="groupData" is-group="true" ng-model="city"></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      }))

      it('测试组件is-group属性，应该生成group-title', () => {
        let groupTitle = finder.groupTitle();
        expect(groupTitle.length).to.equal($rootScope.groupData.length);
      });

      /** angular 1.5.x browserTrigger 版本不支持浏览器 bubble，无法测试该功能。后议。 
      it('group组件，展开的时候点击group-title 不应该被关闭',inject(($document)=>{
        //加到document里
        angular.element($document[0].body).append(element);
        //点击input 展开
        finder.find('.f-input').triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
      })) */
    })

    describe('测试远程异步获取数据的方式,', () => {
      beforeEach(() => {
        $rootScope.city = {};
        $rootScope.getData = ($value) => {
          let data = mockData.getData(false);
          let deferred = q.defer();
          let returnData = data.filter((d) => {
            return d.name.indexOf($value) > -1;
          })
          deferred.resolve(returnData);
          return deferred.promise;
        }
      })

      it('点击的数据是从remoteMethod获取', (done) => {
        let element = $compile('<f-select is-remote="true" ng-model="city" remote-method="getData($value)"></f-select>')($rootScope);
        $rootScope.$digest();

        let finder = new ElementFinder(element);
        finder.find('.f-input').triggerHandler('click');

        let items = finder.items();
        setTimeout(function () {
          expect(items.length).to.equal(mockData.getData(false).length);
          done();
        }, 100);
      })

      it('输入值，并触发onChange, 结果值回根据输入值filter', (done) => {
        let element = $compile('<f-select is-remote="true" ng-model="city" remote-method="getData($value)"></f-select>')($rootScope);
        $rootScope.$digest();
        let finder = new ElementFinder(element);
        finder.find('.f-input_inner').val('上海');
        finder.find('.f-input_inner').triggerHandler('change');

        setTimeout(function () {
          let items = finder.items();
          expect(items.length).to.equal(2);
          done();
        }, 100);
      })
    })

    describe('测试标签(is-multiple)', () => {
      let finder;
      beforeEach(() => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = {};
        element = $compile('<f-select data="data" ng-model="city" is-multiple="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      })

      it('页面上应该有f-select_tags元素', () => {
        expect(finder.find('.f-select_tags').length > 0).to.be.true;
      })

      it('f-select元素应该有class multiple', () => {
        expect(finder.find('.f-select').hasClass('multiple')).to.be.true;
      })

    })
  });

  describe('测试directive', () => {

    describe('测试calculate-style', () => {
      let finder;
      beforeEach(inject(($timeout,$document) => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = {};
        element = $compile('<f-select data="data"  ng-model="city" is-multiple="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        angular.element($document[0].body).append(element);
        $rootScope.$digest();
        $timeout.flush();
        $rootScope.$digest();
      }))

      it('当is-multiple时，自动计算input框的max-width', ()=>{
        expect(finder.find('.f-select_tags')[0].style.maxWidth).to.not.be.empty;
      });

      it('选中多个item，高度发生变化',inject(($timeout)=>{
        /**
         * 展开menu
         */
        finder.find('.f-input').triggerHandler('click');
        //36
        let height = finder.find('.f-input input')[0].clientHeight;
        angular.element(finder.find('.f-select-dropdown_item')[0]).triggerHandler('click');
        /**
         * 选中item,高度发生变化
         */
        $timeout.flush();
        //66
        expect(height).to.not.equal(finder.find('.f-input input')[0].clientHeight);
        /**
         * 删除选中的item
         */
        //36
        finder.find('.f-tag_close').triggerHandler('click');
        $timeout.flush();
        expect(height).to.equal(finder.find('.f-input input')[0].clientHeight);
      }))
    })

  })

});
