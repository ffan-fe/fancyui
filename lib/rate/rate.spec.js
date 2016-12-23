'use strict';

var _rate = require('./rate');

var _rate2 = _interopRequireDefault(_rate);

var _rate3 = require('./rate.controller');

var _rate4 = _interopRequireDefault(_rate3);

var _rate5 = require('./rate.component');

var _rate6 = _interopRequireDefault(_rate5);

var _rate7 = require('./rate.html');

var _rate8 = _interopRequireDefault(_rate7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Rate', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_rate2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _rate4.default();
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
      expect(_rate8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _rate6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_rate8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_rate4.default);
    });
  });
});