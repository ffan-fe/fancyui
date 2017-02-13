/**
 * Rangepicker component entry
 * @author name
 */

import component from './component.js';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('Rangepicker', [
  ])
  .component('fRangepicker', component)
  .component('bpRangepicker',
    deprecated(component, 'bp-rangepicker', 'f-rangepicker'));

export default app;
