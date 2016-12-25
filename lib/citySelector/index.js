import angular from 'angular';
import service from './city.selector';
import uibs from 'angular-ui-bootstrap';
import checkbox from '../checkbox';

'use strict';

export default angular.module('citySelector', [uibs, checkbox.name])
  .service('citySelector', service);