import MultiselectModule from './index'
import MultiselectController from './controller.js';
import MultiselectComponent from './component.js';
import MultiselectTemplate from './template.html';

describe('Multiselect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MultiselectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MultiselectController();
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
      let component = MultiselectComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MultiselectTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MultiselectController);
      });
  });
});
