'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _common = require('./common.state');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Button states enumeration
 */

'use strict';

exports.default = _angular2.default.extend({
  /**
   * 加载中状态
   * @type {String}
   */
  LOADING: 'loading'

}, _common2.default);