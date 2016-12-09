'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listComponent = {
  restrict: 'E',
  bindings: {
    config: '='
  },
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm'
};

exports.default = listComponent;