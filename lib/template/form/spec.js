'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

var _formtpl = require('./formtpl.html');

var _formtpl2 = _interopRequireDefault(_formtpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Form', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_index2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _controller2.default();
    };
  }));

  describe('Module', function () {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function () {
    // controller specs
  });

  describe('Template', function () {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', function () {
    // component/directive specs
    var component = _component2.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_formtpl2.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_controller2.default);
    });
  });
});