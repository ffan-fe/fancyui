/**
 * <%= codeName %> component entry
 * @author name
 */

import angular from 'angular';
import component from './<%= name %>.component';

'use strict';

export default angular.module('<%= codeName %>', [])
  .component('bp<%= codeName %>', component);