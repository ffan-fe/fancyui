/**
 * Icon component entry
 * @author name
 */

import component from './icon.component';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('Icon', [
  ])
  .component('fIcon', component)
  .component('bpIcon',
    deprecated(component, 'bp-icon', 'f-icon'));

export default app;
