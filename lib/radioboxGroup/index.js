/**
 * Radio component entry
 * @author name
 */

import angular from 'angular';
import component from './radiobox.group.component';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('RadioboxGroup', [
  ])
  .component('fRadioboxGroup', component)
  .component('bpRadioboxGroup',
    deprecated(component, 'bp-radiobox-group', 'f-radiobox-group'));

export default app;
