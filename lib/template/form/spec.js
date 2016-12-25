import FormModule from './index'
import FormController from './controller.js';
import FormComponent from './component.js';
import FormTemplate from './formtpl.html';

describe('Form', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FormController();
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
      let component = FormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FormController);
      });
  });
});
