/**
 * app component
 * @author name emailAddress
 */

'use strict';

import template from './app.html';
import controller from './app.controller';

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

export default appComponent;
