import StepsModule from './steps'
import StepsController from './steps.controller.js';
import StepsComponent from './steps.component.js';
import StepsTemplate from './steps.html';

describe('Steps', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StepsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StepsController();
    };
  }));
  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });
});
