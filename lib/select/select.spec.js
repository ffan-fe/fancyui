
import SelectModule from './index';

class MockData {
  constructor(){
    this.item1 = {id: '1001',label: 'bjtz',name: '北京通州万达广场'};
    this.item2 = {id: '1002',label: 'shjq',name: '上海江桥万达广场'};
    this.item3 = {id: '1003',label: 'shzp',name: '上海周浦万达广场'};
    this.item4 = {id: '1004',label: 'hf',name: '合肥万达广场'};
    this.item5 = {id: '1005',label: 'hf',name: '武汉万达广场'};
  }

  getData(isGroup){
    let returnArray = [];
    if(isGroup){
      returnArray.push({
        title:"热门广场",
        options:[this.item1,this.item2,this.item3]
      });

      returnArray.push({
        title:'其他广场',
        options:[this.item4,this.item5]
      });

      return returnArray;
    }
    else{
      
    }
  }
}

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Select', () => {
  let $rootScope,$compile;

  beforeEach(window.module(SelectModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      
      it('输入的数组值应该被渲染在页面上',()=>{
        $rootScope.data = {

        }

        $rootScope.city = {

        }
        var element = $compile('<f-select is-group="true" is-remote="false" data="data" ng-model="city"></f-select>')($rootScope);
        $rootScope.$digest()


      });
    });
  });

});
