/**
 * Datepicker component entry
 * @author name
 */
import ngFileUpload from 'ng-file-upload';

import component from './component.js';

'use strict';

export default angular.module('bp.component.Datepicker', [
  ngFileUpload
])
  .component('bpDatepicker', component);
