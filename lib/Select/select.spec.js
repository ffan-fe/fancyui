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

  describe('[1]测试ngModel', () => {

    beforeEach(() => {
      $rootScope.city = { name: 'beijing', id: 1 };
      element = $compile('<f-select ng-model="city"></f-select>')($rootScope)
      $rootScope.$digest();
      finder = new ElementFinder(element);
    })

    it('[1.1]如果没有输入ngModel,会抛出异常', () => {
      let error = 0;
      try {
        let element = $compile('<f-select></f-select>')($rootScope);
        $rootScope.$digest();
      }
      catch (ex) {
        error++;
      }
      expect(error).to.equal(1)
    })

    it('[1.2]组件初始化后，input会显示ngModel的相应内容', () => {
      expect(finder.find('input')[0].value).to.be.equal('beijing');
    })

  })

  describe('[2]测试组件', () => {
    describe('[2.1]组件无数据时展示', () => {

      it('[2.1.1]dropdown里内容应该为无数据', () => {
        $rootScope.model = {};

        element = $compile('<f-select ng-model="model"></f-select>')($rootScope);
        $rootScope.$digest();
        let dropDownEmpty = new ElementFinder(element).dropDownEmpty();
        expect(dropDownEmpty.html()).to.be.equal('无数据');
      });

    });

    describe('[2.2]测试组件默认数据渲染', () => {

      beforeEach(() => {
        $rootScope.city = {};
        $rootScope.data = mockData.getData(false);
        element = $compile('<f-select data="data" ng-model="city"></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      })

      it('[2.2.1]测试readonly属性', () => {
        expect(finder.find('input')[0].getAttribute('readonly')).to.equal('readonly');
        var elementRemote = $compile('<f-select is-remote="true" ng-model="city" remote-method="getData($value)"></f-select>')($rootScope);
        expect(new ElementFinder(elementRemote).find('input')[0].getAttribute('readonly')).to.equal(null)
      })

      it('[2.2.2]传入的data的长度，等于页面渲染出来的items 长度', () => {
        let items = finder.items();
        expect(items.length).to.equal($rootScope.data.length);
      });

      it('[2.2.3]默认状态之下（点击之前），dropdown是关闭着的（非打开状态）', () => {
        expect(finder.find('.f-select').hasClass('active')).to.be.false;
      });

      it('[2.2.4]点击input框时，dropdown打开，点击空白处，dropdown关闭', () => {
        finder.find('.f-input').triggerHandler('click');

        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        angular.element(document).triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.false;
      })

      it('[2.2.5]点击input框时，dropdown打开，选择item，高亮item', () => {
        let index = 2;
        let items = finder.items();
        finder.find('.f-input').triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        let activeItem = angular.element(items[index]);
        activeItem.triggerHandler('click');
        //高亮item
        expect(activeItem.hasClass('active')).to.be.true;
      })

      it('[2.2.6]可以设置ngModel的值，来改变view', () => {
        /**
         * 模拟打开，并且选中一个选项
         */
        let index = 2;
        let items = finder.items();
        finder.find('.f-input').triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        let activeItem = angular.element(items[index]);
        activeItem.triggerHandler('click');

        /**
         * 选中一个“上海周浦万达广场”
         */
        expect(finder.find('.f-input_inner').val()).to.equal($rootScope.data[index].name);

        /**
         * 设置city.id =1001, name=北京通州万达广场;
         */
        $rootScope.city = $rootScope.data[0];
        $rootScope.$digest()
        expect(finder.find('.f-input_inner').val()).to.equal($rootScope.data[0].name);
      })

    })

    describe('[2.3]测试group组件', () => {

      beforeEach(inject(() => {
        $rootScope.city = {};
        $rootScope.groupData = mockData.getData(true);
        element = $compile('<f-select data="groupData" is-group="true" ng-model="city"></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      }))

      it('[2.3.1]测试组件is-group属性，应该生成group-title', () => {
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

    describe('[2.4]测试远程异步获取数据的方式,', () => {
      beforeEach(inject(($timeout) => {
        $rootScope.city = {};
        $rootScope.getData = ($value) => {
          let data = mockData.getData(false);
          let deferred = q.defer();
          let returnData = data.filter((d) => {
            return d.name.indexOf($value) > -1;
          })
          /**
           * 远程请求，延迟100ms
           */
          $timeout(function () {
            deferred.resolve(returnData);
          }, 100)

          return deferred.promise;
        }

        element = $compile('<f-select is-remote="true" ng-model="city" remote-method="getData($value)"></f-select>')($rootScope);
        $rootScope.$digest();
        finder = new ElementFinder(element);
      }))

      it('[2.4.1]点击的数据是从remoteMethod获取', inject(($timeout) => {
        finder.find('.f-input').triggerHandler('click');
        $timeout.flush();
        let items = finder.items();
        expect(items.length).to.equal(mockData.getData(false).length);
      }))

      it('[2.4.2]输入值，并触发onChange, 结果值回根据输入值filter', inject(($timeout) => {
        finder.find('.f-input_inner').val('上海');
        finder.find('.f-input_inner').triggerHandler('change');
        $timeout.flush();
        let items = finder.items();
        expect(items.length).to.equal(2);
      }))

      /**
       * https://github.com/ffan-fe/fancyui/issues/43
       */
      it('[2.4.3]输入无结果并且失焦时，input应该显示的是ngModel的值，而并非输入的值', inject(($timeout) => {
        finder.find('.f-input').triggerHandler('click');
        finder.find('.f-input_inner').val('test');
        finder.find('.f-input_inner').triggerHandler('change');
        $timeout.flush();
        angular.element(document).triggerHandler('click');
        expect(finder.find('input')[0].value).not.to.be.equal('test');
      }))

      /**
       * 解决issue：远程数据异步时，会先展示empty状态
       */
      it('[2.4.4]点击获取数据时，直到remoteMethod数据返回时，才打开dropdown', inject(($timeout) => {
        finder.find('.f-input').triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.false;

        let dropDown = finder.dropDown();
        expect(dropDown).be.empty;
        expect(finder.items().length).to.be.equal(0);
        $timeout.flush()
        expect(finder.items().length).to.be.equal(5);
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
      }))

      it('[2.4.5]每次change值的时候，都重新打开drowDown', inject(($timeout) => {
        let selectElement = finder.find('.f-select');
        /**
         * 随便输入一个值，期望的结果是打开菜单.
         */
        finder.find('.f-input_inner').val('希望结果是空的');
        finder.find('.f-input_inner').triggerHandler('change');
        /**
         * 因为是异步数据，所以在flush之前，菜单依然是关闭着的（数据还没回来）
         */
        expect(selectElement.hasClass('active')).to.be.false;
        $timeout.flush();
        /**
         * 异步数据回来之后，应该打开菜单
         */
        expect(selectElement.hasClass('active')).to.be.true;

        /**
         * 点击组件，会再次关闭菜单
         */
        finder.find('.f-input').triggerHandler('click');
        expect(selectElement.hasClass('active')).to.be.false;

        /**
         * 此时再改变输入值，获取结果的时候应该自动打开菜单
         */
        finder.find('.f-input_inner').val('上海');
        finder.find('.f-input_inner').triggerHandler('change');
        $timeout.flush();
        expect(selectElement.hasClass('active')).to.be.true;
      }))

      it('[2.4.6]选中items不应该被高亮', inject(($timeout) => {
        finder.find('.f-input_inner').val('上海');
        finder.find('.f-input_inner').triggerHandler('change');
        $timeout.flush();
        let items = finder.items();
        let activeItem = angular.element(items[0]);
        activeItem.triggerHandler('click');
        expect(activeItem.hasClass('active')).to.be.false;
      }));

      /**
       * dissMissHanlder行为要在remoteMethod数据返回之后绑定
       */
      it('[2.4.7]快速点击两次click，等数据返回之后点击document click，仍然可以顺利关闭', inject(($timeout) => {
        finder.find('.f-input').triggerHandler('click');
        finder.find('.f-input').triggerHandler('click');
        $timeout.flush();
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
        angular.element(document).triggerHandler('click');
        expect(finder.find('.f-select').hasClass('active')).to.be.false;
      }))

    })

    describe('[2.5]测试 is-multiple', () => {
      let finder;
      beforeEach((inject($document => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = {};
        element = $compile('<f-select data="data" ng-models="city" is-multiple="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        angular.element($document[0].body).append(element);
        $rootScope.$digest();
      })))

      it('[2.5.1]页面上应该有f-select_tags元素', () => {
        expect(finder.find('.f-select_tags').length > 0).to.be.true;
      })

      it('[2.5.2]f-select元素应该有class multiple', () => {
        expect(finder.find('.f-select').hasClass('multiple')).to.be.true;
      })

      it('[2.5.3]当点击标签区域（f-select_tags）时，聚焦输入框，并且打开菜单', () => {
        finder.find('.f-select_tags').triggerHandler('click');
        expect(angular.element(document.activeElement).hasClass('f-select_input')).to.be.true;
        expect(finder.find('.f-select').hasClass('active')).to.be.true;
      })

    })

    describe('[2.6]测试 allow-create', () => {
      let finder;
      beforeEach(() => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = {};
        element = $compile('<f-select data="data" ng-models="city" allow-create="true" is-multiple="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      })

      it('[2.6.1]输入不存在的值，列表长度应为1，并且可添加', inject(($timeout) => {
        let inputValue = '2222222';
        finder.find('.f-input').triggerHandler('click');
        finder.find('.f-select_input').val(inputValue);
        finder.find('.f-select_input').triggerHandler('change');
        expect(finder.find('.f-select-dropdown_item').length).to.equal(1);
        angular.element(finder.find('.f-select-dropdown_item')[0]).triggerHandler('click');
        $timeout.flush();
        expect($rootScope.city[0].name).to.be.equal(inputValue);
      }))

    })

    describe ('[2.7]测试 is-disabled',()=>{
      let finder;
      beforeEach(() => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = $rootScope.data[0];
        element = $compile('<f-select data="data" ng-model="city" is-disabled="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        $rootScope.$digest();
      })

      it('禁用不可点击',()=>{
        finder.find('.f-input').triggerHandler('click');
        console.log(finder.find('.f-select'));
        ///TODO
      })
    })

  });

  describe('[3]测试directive', () => {

    describe('[3.1]测试calculate-style', () => {
      let finder;
      beforeEach(inject(($timeout, $document) => {
        $rootScope.data = new MockData().getData(false);
        $rootScope.city = {};
        element = $compile('<f-select data="data"  ng-models="city" is-multiple="true" ></f-select>')($rootScope);
        finder = new ElementFinder(element);
        angular.element($document[0].body).append(element);
        $rootScope.$digest();
        $timeout.flush();
        $rootScope.$digest();
      }))

      it('[3.1.1]当is-multiple时，自动计算input框的max-width', () => {
        expect(finder.find('.f-select_tags')[0].style.maxWidth).to.not.be.empty;
      });

      it('[3.1.2]当选中多个item时，高度在增加', inject($timeout => {
        finder.find('.f-input').triggerHandler('click');
        let height = finder.find('.f-input input')[0].clientHeight;
        angular.element(finder.find('.f-select-dropdown_item')[0]).triggerHandler('click');
        $timeout.flush();
        angular.element(finder.find('.f-select-dropdown_item')[1]).triggerHandler('click');
        $timeout.flush();
        angular.element(finder.find('.f-select-dropdown_item')[2]).triggerHandler('click');
        $timeout.flush();
        expect(finder.find('.f-input input')[0].clientHeight > height).to.be.true;
      }))
    })

  })

});
