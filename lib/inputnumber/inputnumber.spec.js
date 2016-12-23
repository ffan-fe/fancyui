'use strict';

var _inputnumber = require('./inputnumber');

var _inputnumber2 = _interopRequireDefault(_inputnumber);

var _inputnumber3 = require('./inputnumber.controller');

var _inputnumber4 = _interopRequireDefault(_inputnumber3);

var _inputnumber5 = require('./inputnumber.component');

var _inputnumber6 = _interopRequireDefault(_inputnumber5);

var _inputnumber7 = require('./inputnumber.html');

var _inputnumber8 = _interopRequireDefault(_inputnumber7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Inputnumber', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_inputnumber2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _inputnumber4.default();
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
      expect(_inputnumber8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _inputnumber6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_inputnumber8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_inputnumber4.default);
    });
  });
});