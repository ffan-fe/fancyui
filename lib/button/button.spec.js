import angular from 'angular';
import mocks from 'angular-mocks';

import ButtonModule from './index'
import ButtonController from './button';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  button(){
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

    it('测试基础风格', () => {
      var elementDefault = $compile('<bp-button type="default">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDefault.html()).to.contain('bp-btn-default');

      var elementPrimary = $compile('<bp-button type="primary">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementPrimary.html()).to.contain('bp-btn-primary');

      var elementSuccess = $compile('<bp-button type="success">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementSuccess.html()).to.contain('bp-btn-success');

      var elementInfo = $compile('<bp-button type="info">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementInfo.html()).to.contain('bp-btn-info');

      var elementWarning = $compile('<bp-button type="warning">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementWarning.html()).to.contain('bp-btn-warning');

      var elementDanger = $compile('<bp-button type="danger">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDanger.html()).to.contain('bp-btn-danger');

    });

    it('测试带Icon', () => {

      var elementIcon = $compile('<bp-button type="primary" icon="ok">OK</bp-button>')($rootScope);
      $rootScope.$digest();
      expect(elementIcon.html()).to.contain('bp-icon');
      expect(elementIcon.html()).to.contain('glyphicon-ok');
    })

    it('测试尺寸', () => {

      var elementXs = $compile('<bp-button type="primary" size="xs">size xs button</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementXs.html()).to.contain('btn-xs');

      var elementSm = $compile('<bp-button type="primary" size="sm">size sm button</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementSm.html()).to.contain('btn-sm');

      var elementLg = $compile('<bp-button type="primary" size="lg">size lg button</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementLg.html()).to.contain('btn-lg');

    })

    it('测试disbaled', () => {
      var elementDefault = $compile('<bp-button disabled="true" type="default">test</bp-button>')($rootScope);
      $rootScope.$digest()
      expect(elementDefault.html()).to.contain('disabled="disabled"');
    })

    
    it('测试loading 点击', () => {
      $rootScope.settingLoading = function (button) {
        button.state = {loading: true};
        this.tiggleDisabled = false;
      }

      var elementDefault = $compile('<bp-button size="xs" type="default" click="settingLoading(button)">test</bp-button>')($rootScope);
      $rootScope.$digest();

      let finder = new ElementFinder(elementDefault);

      let $button = finder.button();
      $button.triggerHandler('click');

      expect(finder.button().hasClass('loading-btn')).to.be.true;
      expect($button[0].getAttribute('disabled')).to.equal('disabled');
      
    })

  })

});
