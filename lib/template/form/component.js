'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formtpl = require('./formtpl.html');

var _formtpl2 = _interopRequireDefault(_formtpl);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formComponent = {
  restrict: 'E',
  bindings: {
    formConfig: '=',
    model: '='
  },
  template: _formtpl2.default,
  controller: _controller2.default,
  controllerAs: 'vm'
};

exports.default = formComponent;