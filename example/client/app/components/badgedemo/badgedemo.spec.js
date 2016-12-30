import BadgedemoModule from './badgedemo'
import BadgedemoController from './badgedemo.controller';
import BadgedemoComponent from './badgedemo.component';
import BadgedemoTemplate from './badgedemo.html';

describe('Badgedemo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BadgedemoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BadgedemoController();
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
      expect(BadgedemoTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BadgedemoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BadgedemoTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BadgedemoController);
      });
  });
});
