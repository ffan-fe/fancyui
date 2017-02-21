/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/menu
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import MenuModule from './index.js';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  firstLi() {
    return angular.element(this.element.querySelectorAll('ul.f-menu>li'));
  }

  subMenu() {
    return angular.element(this.element.querySelectorAll('ul.f-menu>.f-menu-submenu'));
  }

  fMenuUl() {
    return angular.element(this.element.querySelectorAll('ul.f-menu'));
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Menu', () => {
  let $rootScope, $compile;

  beforeEach(window.module(MenuModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {
      it("当them='dark'时，f-menu应该有class 'f-menu-dark'", () => {
        var element = $compile(`<f-menu default-selected-keys='vm.keys' default-open-keys='vm.openKeys' theme="dark" mode="inline">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $fMenuUl = finder.fMenuUl();

        expect($fMenuUl.hasClass('f-menu-dark')).to.be.true;
      });

      it("当them='light'时，f-menu应该有class 'f-menu-light'", () => {
        var element = $compile(`<f-menu default-selected-keys='vm.keys' default-open-keys='vm.openKeys' theme="light" mode="inline">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $fMenuUl = finder.fMenuUl();

        expect($fMenuUl.hasClass('f-menu-light')).to.be.true;
      });

      it("当mode 为空时，应该为默认值 'vertical'", () => {
        var element = $compile(`<f-menu default-selected-keys='vm.keys' default-open-keys='vm.openKeys' theme="light">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $fMenuUl = finder.fMenuUl();

        expect($fMenuUl.hasClass('f-menu-vertical')).to.be.true;
      });

      it("defaultSelectedKeys 里的menu应该被默认选中", () => {
        var element = $compile(`<f-menu default-selected-keys="['mail']" default-open-keys='vm.openKeys' theme="light">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $firstLi = finder.firstLi();

        expect($firstLi.hasClass('f-menu-item-selected')).to.be.true;
      });

      it("defaultOpenKeys 里的menu应该被默认打开", () => {
        var element = $compile(`<f-menu default-selected-keys="['mail']" default-open-keys="['submenu']" theme="light">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $subMenu = finder.subMenu();

        expect($subMenu.hasClass('f-menu-submenu-open')).to.be.true;
      });

      it("当menu被点击时onSelect应该被调用", () => {
        var spyedArg = {};
        var hasCalled = false;

        function spy(arg) {
          hasCalled = true;
          spyedArg = arg;
        };
        $rootScope.spy = spy;
        var element = $compile(`<f-menu default-selected-keys="['mail']" default-open-keys="['submenu']" theme="light" on-select="spy">
        <menu-item key="mail">
          Navigation One
        </menu-item>
        <sub-menu title='<span>Navigation one - Submenu</span>' key="submenu">
          <menu-item-group title="Item 1">
            <menu-item key="setting:1">Option 1</menu-item>
            <menu-item key="setting:2">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <sub-menu title='<span>Navigation two - Submenu</span>' key="submenu2">
          <menu-item-group title="Item 1">
            <menu-item key="setting:21">Option 1</menu-item>
            <menu-item key="setting:22">Option 2</menu-item>
          </menu-item-group>
        </sub-menu>
        <menu-item key="mail2">
          Navigation Three
        </menu-item>
      </f-menu>`)($rootScope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var $firstLi = finder.firstLi();

        $firstLi.triggerHandler('click');

        expect(hasCalled).to.be.true;
      });
    });
  });

});
