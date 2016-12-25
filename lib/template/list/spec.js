import ListModule from './index'
import ListController from './controller.js';
import ListComponent from './component.js';
import ListTemplate from './template.html';

describe('List', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ListController();
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
      let component = ListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListController);
      });
  });
});
