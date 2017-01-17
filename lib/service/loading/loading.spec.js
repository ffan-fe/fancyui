import angular from 'angular';
import mocks from 'angular-mocks';

import LoadingController from './loading';

describe('LoadingService', () => {
  let $rootScope, $compile, controller, document;

  beforeEach(inject((_$rootScope_, _$compile_, $document) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    controller = new LoadingController($document, _$rootScope_, _$compile_);
    document = $document;
    document.find('body').append('<div id="loadingTarget">loading target</div>');
  }));

  afterEach(inject((_$rootScope_, _$compile_, $document) => {
    angular.element($document[0].querySelector('#loadingTarget')).remove();
  }))

  describe('测试Controller', () => {
    it('应该有[loading,close]方法', () => {
      expect(controller.loading).to.not.be.undefined;
      expect(controller.loading).to.not.be.undefined;
    });

    it('extractTarget 应该支持dom, string, angularElement', () => {
      let stringTarget = controller.extractTarget('#loadingTarget');
      let domTarget = controller.extractTarget(document[0].querySelector('#loadingTarget'));
      let angularElementTarget = controller.extractTarget(angular.element(domTarget));

      expect(stringTarget).to.equal(domTarget);
      expect(stringTarget).to.equal(angularElementTarget);
      expect(stringTarget.getAttribute('id')).to.equal('loadingTarget');
    })

    it('loading 方法会在target上遮盖一层，并且显示相应效果', () => {
      var param = {
        target: '#loadingTarget',
        text: 'XXOO...'
      }
      let loading = controller.loading(param);
      loading.childScope.$digest();

      let showText = angular.element(document[0].querySelector(param.target + ' .ffan-default-text')).text();
      expect(showText.trim()).to.be.equal(param.text);
      loading.close();
      expect(document[0].querySelector(param.target + ' .ffan-default-text')).to.be.null;
    })
  })
});