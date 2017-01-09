import ProgressdemoModule from './progressdemo'
import ProgressdemoController from './progressdemo.controller.js';
import ProgressdemoComponent from './progressdemo.component.js';
import ProgressdemoTemplate from './progressdemo.html';

describe('Progressdemo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProgressdemoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProgressdemoController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProgressdemoTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProgressdemoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProgressdemoTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProgressdemoController);
      });
  });
});
