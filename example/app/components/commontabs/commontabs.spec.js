import CommontabsModule from './commontabs'
import CommontabsController from './commontabs.controller.js';
import CommontabsComponent from './commontabs.component.js';
import CommontabsTemplate from './commontabs.html';

describe('Commontabs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CommontabsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CommontabsController();
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
      expect(CommontabsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CommontabsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CommontabsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CommontabsController);
      });
  });
});
