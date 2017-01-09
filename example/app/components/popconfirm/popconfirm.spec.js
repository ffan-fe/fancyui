import PopconfirmModule from './popconfirm'
import PopconfirmController from './popconfirm.controller.js';
import PopconfirmComponent from './popconfirm.component.js';
import PopconfirmTemplate from './popconfirm.html';

describe('Popconfirm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PopconfirmModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PopconfirmController();
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
      expect(PopconfirmTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PopconfirmComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PopconfirmTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PopconfirmController);
      });
  });
});
