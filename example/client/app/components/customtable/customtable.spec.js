import CustomtableModule from './customtable'
import CustomtableController from './customtable.controller';
import CustomtableComponent from './customtable.component';
import CustomtableTemplate from './customtable.html';

describe('Customtable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CustomtableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CustomtableController();
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
      expect(CustomtableTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CustomtableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CustomtableTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CustomtableController);
      });
  });
});
