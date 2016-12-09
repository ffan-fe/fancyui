'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

require('./style.less');

var _uihelper = require('../tool/uihelper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Datepicker component define
                                                                                                                                                           */

var datepickerDirective = function datepickerDirective($rootScope) {
  _classCallCheck(this, datepickerDirective);

  this.template = _template2.default;
  this.restrict = "E";

  this.controller = _controller2.default;
  this.controllerAs = "vm";
  this.bindToController = true;

  this.scope = {
    model: '=',
    datepickerOptions: '='
  };

  this.link = function (scope, element, attrs) {

    /*let closeEvent = UIHelper.listen(window, 'click', (e) => {
      if (!element[0].contains(e.target) && scope.vm.pop) {
        scope.vm.pop = false;
      }
    });
     scope.$on('$destroy', () => closeEvent.remove());*/
  };
};

exports.default = datepickerDirective;