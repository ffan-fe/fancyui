/**
 * Radio component entry
 * @author name
 */

import angular from 'angular';
import component from './radiobox.component';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('Radiobox', [
  ])
  .component('fRadiobox', component)
  .component('bpRadiobox',
    deprecated(component, 'bp-radiobox', 'f-radiobox'));

export default app;