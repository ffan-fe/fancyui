'use strict';

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _switch3 = require('./switch.controller');

var _switch4 = _interopRequireDefault(_switch3);

var _switch5 = require('./switch.component');

var _switch6 = _interopRequireDefault(_switch5);

var _switch7 = require('./switch.html');

var _switch8 = _interopRequireDefault(_switch7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Switch', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_switch2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _switch4.default();
    };
  }));

  describe('Module', function () {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function () {
    // controller specs
    it('has a name property [REMOVE]', function () {
      // erase if removing this.name from the controller
      var controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', function () {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', function () {
      expect(_switch8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _switch6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_switch8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_switch4.default);
    });
  });
});