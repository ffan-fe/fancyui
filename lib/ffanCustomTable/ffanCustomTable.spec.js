'use strict';

var _ffanCustomTable = require('./ffanCustomTable');

var _ffanCustomTable2 = _interopRequireDefault(_ffanCustomTable);

var _ffanCustomTable3 = require('./ffanCustomTable.controller');

var _ffanCustomTable4 = _interopRequireDefault(_ffanCustomTable3);

var _ffanCustomTable5 = require('./ffanCustomTable.component');

var _ffanCustomTable6 = _interopRequireDefault(_ffanCustomTable5);

var _ffanCustomTable7 = require('./ffanCustomTable.html');

var _ffanCustomTable8 = _interopRequireDefault(_ffanCustomTable7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FfanCustomTable', function () {
  var $rootScope = void 0,
      makeController = void 0;

  beforeEach(window.module(_ffanCustomTable2.default.name));
  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function makeController() {
      return new _ffanCustomTable4.default();
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
      expect(_ffanCustomTable8.default).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', function () {
    // component/directive specs
    var component = _ffanCustomTable6.default;

    it('includes the intended template', function () {
      expect(component.template).to.equal(_ffanCustomTable8.default);
    });

    it('uses `controllerAs` syntax', function () {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', function () {
      expect(component.controller).to.equal(_ffanCustomTable4.default);
    });
  });
});