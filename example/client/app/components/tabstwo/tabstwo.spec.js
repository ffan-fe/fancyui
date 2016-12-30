import TabstwoModule from './tabstwo'
import TabstwoController from './tabstwo.controller';
import TabstwoComponent from './tabstwo.component';
import TabstwoTemplate from './tabstwo.html';

describe('Tabstwo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TabstwoModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TabstwoController();
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
      expect(TabstwoTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TabstwoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TabstwoTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TabstwoController);
      });
  });
});
