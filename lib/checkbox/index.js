'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _checkbox = require('./checkbox.component');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ngdoc overview
 * @name checkbox
 * @description
 * 
 * # Checkbox component module
 * 
 * module name is **Checkbox**
 * 
 * 这里包含
 *  - bpCheckbox
 *  - bpCheckboxGroup
 * 
 * <pre>
 * import {Checkbox} from 'anaheim';
 * angular.module('myApp', [Checkbox.name]);
 * </pre>
 * 
 * <pre>
 * import {CheckboxGroup} from 'anaheim';
 * angular.module('myApp', [CheckboxGroup.name]);
 * </pre>
 * 
 * <pre>
 * import {Checkbox, CheckboxGroup} from 'anaheim';
 * </pre>
 */

'use strict';

exports.default = _angular2.default.module('Checkbox', []).component('bpCheckbox', _checkbox2.default);