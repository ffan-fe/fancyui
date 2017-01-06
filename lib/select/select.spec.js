
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
  let $rootScope, $compile, mockData, element,finder ;

  beforeEach(window.module(SelectModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    mockData = new MockData();
  }));

  describe('测试组件', () => {
    describe('组件无数据时展示', () => {

      it('dropdown里内容应该为无数据', () => {
        let element = $compile('<f-select></f-select>')($rootScope);
        $rootScope.$digest();
        let dropDownEmpty = new ElementFinder(element).dropDownEmpty();
        expect(dropDownEmpty.html()).to.be.equal('无数据');
      });

    });

    describe('测试组件默认数据渲染', () => {
      
      beforeEach(()=>{
        $rootScope.city = {};
        $rootScope.data = mockData.getData(false);
        element = $compile('<f-select data="data" ng-model="city"></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
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
      
      it('点击input框时，dropdown打开，选择item，高亮item,设置ng-model',()=>{
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

    describe('测试group组件',()=>{
       it('测试组件is-group属性，并且groupTitle点击无效', () => {
        $rootScope.city = {};
        $rootScope.groupData = mockData.getData(true);

        let element = $compile('<f-select data="groupData" is-group="true" ng-model="city"></f-select>')($rootScope);
        $rootScope.$digest();
        let groupTitle = new ElementFinder(element).groupTitle();
        expect(groupTitle.length).to.equal($rootScope.groupData.length);
      });
    })

  });

});
