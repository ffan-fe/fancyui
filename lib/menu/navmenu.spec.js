/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import NavmenuModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }
  getFirstLi() {
    return angular.element(this.element.querySelectorAll('.nav-menu-root > li'));
  }

  getLi() {
    return angular.element(this.element.querySelectorAll('li'));
  }
  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Navmenu', () => {
  let $rootScope,$compile,$controller;

  beforeEach(window.module(NavmenuModule.name));
  beforeEach(inject((_$rootScope_,_$compile_,$componentController) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    $controller = $componentController;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      it('根据location.href自动打开高亮对应menu', () => {
        let vm = {};
        vm.menuData = [
          {
            id: 1,
            text: '测试父menu1',
            href: 'test'
          },
          {
            id: 2,
            text: '测试父menu2',
            children: [
              {
                id: 21,
                text: '测试子menu21',
                parent: 2
              },
              {
                id: 22,
                text: '测试子menu12',
                parent: 2
              }
            ]
          },
          {
            id: 3,
            text: '测试父menu3',
            children: [
              {
                id: 31,
                text: '测试子menu31',
                parent: 3
              },
              {
                id: 32,
                text: '测试子menu32',
                hide: false,
                parent: 3,
                children: [
                  {
                    id: 321,
                    text: '测试子menu321',
                    parent: 32,
                    href: 'context'
                  },
                  {
                    id: 322,
                    text: '测试子menu322',
                    active: false,
                    parent: 32
                  }
                ]
              }
            ]
          }
        ];

        vm.config = {
          childrenAttr: 'children',
          idAttr: 'id',
          parentAttr: 'parent',
          matchCurrentUrl: node => {
            if(location.href.indexOf(node.href) > -1) {
              return true;
            }
            return false;
          }
        };

        vm.onSelect = node => {
          console.log('node clicked:' + node.text);
        };

        $rootScope.vm = vm;
        let element = $compile(`<f-navmenu menu-data="vm.menuData"
           config="vm.config"
           on-select="vm.onSelect"></f-navmenu>`)($rootScope);
        $rootScope.$digest();

        expect(vm.menuData[2].children[1].children[0].active).to.be.true;
      });

      it('渲染菜单数量正确', () => {
        let vm = {};
        vm.menuData = [
          {
            id: 1,
            text: '测试父menu1',
            href: 'test'
          },
          {
            id: 2,
            text: '测试父menu2',
            children: [
              {
                id: 21,
                text: '测试子menu21',
                parent: 2
              },
              {
                id: 22,
                text: '测试子menu12',
                parent: 2
              }
            ]
          },
          {
            id: 3,
            text: '测试父menu3',
            children: [
              {
                id: 31,
                text: '测试子menu31',
                parent: 3
              },
              {
                id: 32,
                text: '测试子menu32',
                hide: false,
                parent: 3,
                children: [
                  {
                    id: 321,
                    text: '测试子menu321',
                    parent: 32,
                    href: 'context'
                  },
                  {
                    id: 322,
                    text: '测试子menu322',
                    active: false,
                    parent: 32
                  }
                ]
              }
            ]
          }
        ];

        vm.config = {
          childrenAttr: 'children',
          idAttr: 'id',
          parentAttr: 'parent'
        };

        vm.onSelect = node => {
          console.log('node clicked:' + node.text);
        };

        $rootScope.vm = vm;
        let element = $compile(`<f-navmenu menu-data="vm.menuData"
           config="vm.config"
           on-select="vm.onSelect"></f-navmenu>`)($rootScope);
        $rootScope.$digest();
        let $li = new ElementFinder(element).getLi();
        expect($li.length).to.be.equal(9);
      });

      it('当点击菜单时会把高亮', () => {
        let vm = {};
        vm.menuData = [
          {
            id: 1,
            text: '测试父menu1',
            href: 'test'
          },
          {
            id: 2,
            text: '测试父menu2',
            children: [
              {
                id: 21,
                text: '测试子menu21',
                parent: 2
              },
              {
                id: 22,
                text: '测试子menu12',
                parent: 2
              }
            ]
          },
          {
            id: 3,
            text: '测试父menu3',
            children: [
              {
                id: 31,
                text: '测试子menu31',
                parent: 3
              },
              {
                id: 32,
                text: '测试子menu32',
                hide: false,
                parent: 3,
                children: [
                  {
                    id: 321,
                    text: '测试子menu321',
                    parent: 32,
                    href: 'context'
                  },
                  {
                    id: 322,
                    text: '测试子menu322',
                    active: false,
                    parent: 32
                  }
                ]
              }
            ]
          }
        ];

        vm.config = {
          childrenAttr: 'children',
          idAttr: 'id',
          parentAttr: 'parent'
        };

        vm.onSelect = node => {
          console.log('node clicked:' + node.text);
        };

        $rootScope.vm = vm;
        let element = $compile(`<f-navmenu menu-data="vm.menuData"
           config="vm.config"
           on-select="vm.onSelect"></f-navmenu>`)($rootScope);
        $rootScope.$digest();
        let e = {
          target: {
            attributes: {
              'data-id': {
                nodeValue: 1
              }
            }
          }
        };
        let controller = $controller('fNavmenu', {'this': vm}, vm);

        controller.clickHandler(e);
        expect(vm.menuData[0].active).to.be.true;
      });

      it('只会高亮一个菜单项', () => {
        let vm = {};
        vm.menuData = [
          {
            id: 1,
            text: '测试父menu1',
            href: 'test'
          },
          {
            id: 2,
            text: '测试父menu2',
            children: [
              {
                id: 21,
                text: '测试子menu21',
                parent: 2
              },
              {
                id: 22,
                text: '测试子menu12',
                parent: 2
              }
            ]
          },
          {
            id: 3,
            text: '测试父menu3',
            children: [
              {
                id: 31,
                text: '测试子menu31',
                parent: 3
              },
              {
                id: 32,
                text: '测试子menu32',
                hide: false,
                parent: 3,
                children: [
                  {
                    id: 321,
                    text: '测试子menu321',
                    parent: 32,
                    href: 'context'
                  },
                  {
                    id: 322,
                    text: '测试子menu322',
                    active: false,
                    parent: 32,
                    href: 'context'
                  }
                ]
              }
            ]
          }
        ];

        vm.config = {
          childrenAttr: 'children',
          idAttr: 'id',
          parentAttr: 'parent',
          matchCurrentUrl: node => {
            if(location.href.indexOf(node.href) > -1) {
              return true;
            }
            return false;
          }
        };

        vm.onSelect = node => {
          console.log('node clicked:' + node.text);
        };

        $rootScope.vm = vm;
        let element = $compile(`<f-navmenu menu-data="vm.menuData"
           config="vm.config"
           on-select="vm.onSelect"></f-navmenu>`)($rootScope);
        $rootScope.$digest();

        expect(vm.menuData[2].children[1].children[0].active).to.be.false;
        expect(vm.menuData[2].children[1].children[1].active).to.be.true;
      });
    });
  });

});
