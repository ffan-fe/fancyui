'use strict';

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _badge3 = require('./badge.controller');

var _badge4 = _interopRequireDefault(_badge3);

var _badge5 = require('./badge.component');

var _badge6 = _interopRequireDefault(_badge5);

var _badge7 = require('./badge.html');

var _badge8 = _interopRequireDefault(_badge7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Badge', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_badge2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _badge4.default();
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
      expect(_badge8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _badge6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_badge8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_badge4.default);
    });
  });
});