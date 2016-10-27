import CheckboxtreeModule from './index'
import CheckboxtreeController from './controller.js';
import CheckboxtreeComponent from './component.js';
import CheckboxtreeTemplate from './template.html';

describe('Checkboxtree', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CheckboxtreeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CheckboxtreeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', () => {
      // component/directive specs
      let component = CheckboxtreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CheckboxtreeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CheckboxtreeController);
      });
  });
});
