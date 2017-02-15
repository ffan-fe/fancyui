/**
 * Popconfirm component entry
 * @author name
 */

import angular from 'angular';
import service from './popconfirm';
'use strict';

export default angular.module('Popconfirm', [])
  .service('Popconfirm', service);
