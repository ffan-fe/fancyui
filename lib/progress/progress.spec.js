'use strict';

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _progress3 = require('./progress.controller');

var _progress4 = _interopRequireDefault(_progress3);

var _progress5 = require('./progress.component');

var _progress6 = _interopRequireDefault(_progress5);

var _progress7 = require('./progress.html');

var _progress8 = _interopRequireDefault(_progress7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Progress', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_progress2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _progress4.default();
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
      expect(_progress8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _progress6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_progress8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_progress4.default);
    });
  });
});