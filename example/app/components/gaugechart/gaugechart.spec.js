import GaugechartModule from './gaugechart'
import GaugechartController from './gaugechart.controller.js';
import GaugechartComponent from './gaugechart.component.js';
import GaugechartTemplate from './gaugechart.html';

describe('Gaugechart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GaugechartModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GaugechartController();
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
      expect(GaugechartTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GaugechartComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GaugechartTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GaugechartController);
      });
  });
});
