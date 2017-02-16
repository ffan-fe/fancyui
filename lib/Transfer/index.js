/**
 * Transfer component entry
 * @author name
 */

import component from './transfer.component';
import Button from '../Button/';
import deprecated from '../tool/deprecated';

'use strict';

let app = angular.module('bp.transfer', [
    Button.name
  ])
  .component('fTransfer', component)
  .component('bpTransfer',
    deprecated(component, 'bp-transfer', 'f-transfer'));

export default app;
