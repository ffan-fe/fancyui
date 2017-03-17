import angular from 'angular';
import mocks from 'angular-mocks';

import ButtonModule from './index'
import ButtonController from './button';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  button() {
    return angular.element(this.element.querySelectorAll('button'));
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Button', () => {
  let $rootScope, controller, $compile;

  beforeEach(window.module(ButtonModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    controller = new ButtonController();
  }));

  describe('测试组件', () => {
    it('测试初始值', () => {

      let elementDefault = $compile('<f-button>test</f-button>')($rootScope);
      $rootScope.$digest();
      let scope = elementDefault.isolateScope().controller;

      /** 初始type为'primary' */
      expect(scope.type).to.be.equal('primary');

      /** 初始htmlType为'button' */
      expect(scope.htmlType).to.be.equal('button');

      /** 初始iconType为''*/
      expect(scope.iconType).to.be.equal('');
    })

    it('测试基础风格', () => {
      var elementDefault = $compile('<f-button type="default">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDefault.html()).to.contain('bp-btn-default');

      var elementPrimary = $compile('<f-button type="primary">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementPrimary.html()).to.contain('bp-btn-primary');

      var elementSuccess = $compile('<f-button type="success">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementSuccess.html()).to.contain('bp-btn-success');

      var elementInfo = $compile('<f-button type="info">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementInfo.html()).to.contain('bp-btn-info');

      var elementWarning = $compile('<f-button type="warning">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementWarning.html()).to.contain('bp-btn-warning');

      var elementDanger = $compile('<f-button type="danger">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDanger.html()).to.contain('bp-btn-danger');

    });

    it('测试htmlType', () => {
      var elementSubmit = $compile('<f-button html-type="submit">submit</f-button>')($rootScope);
      $rootScope.$digest();
      let button = new ElementFinder(elementSubmit).button();

      expect(button.attr('type')).to.be.equal('submit');
    })

    it('测试带Icon', () => {

      var elementIcon = $compile('<f-button type="primary" icon="ok">OK</f-button>')($rootScope);
      $rootScope.$digest();
      expect(elementIcon.html()).to.contain('f-icon');
      expect(elementIcon.html()).to.contain('glyphicon-ok');
    })

    it('测试尺寸', () => {

      var elementXs = $compile('<f-button type="primary" size="xs">size xs button</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementXs.html()).to.contain('btn-xs');

      var elementSm = $compile('<f-button type="primary" size="sm">size sm button</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementSm.html()).to.contain('btn-sm');

      var elementLg = $compile('<f-button type="primary" size="lg">size lg button</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementLg.html()).to.contain('btn-lg');

    })

    it('测试disbaled', () => {
      var elementDefault = $compile('<f-button disabled="true" type="default">test</f-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDefault.html()).to.contain('disabled="disabled"');
    })

    it('测试loading 点击', () => {
      $rootScope.settingLoading = function (button) {
        button.state = { loading: true };
        this.tiggleDisabled = false;
      }

      var elementDefault = $compile('<f-button size="xs" type="default" click="settingLoading(button)">test</f-button>')($rootScope);
      $rootScope.$digest();

      let finder = new ElementFinder(elementDefault);

      let $button = finder.button();
      $button.triggerHandler('click');

      expect(finder.button().hasClass('loading-btn')).to.be.true;
      expect($button[0].getAttribute('disabled')).to.equal('disabled');

    })

    it('测试$onchanges', () => {
      $rootScope.disabled = false;
      let elementDefault = $compile('<f-button disabled="disabled">test</f-button>')($rootScope);
      $rootScope.$digest();
      let button = new ElementFinder(elementDefault).button();

      expect(button.attr('disabled')).to.be.undefined;
      $rootScope.disabled = true;
      $rootScope.$digest();

      expect(button.attr('disabled')).to.be.equal('disabled');
    })

  })

});
