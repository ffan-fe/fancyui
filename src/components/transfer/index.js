/**
 * Transfer component entry
 * @author name
 */

import component from './transfer.component';
import Button from '../button/';

'use strict';

export default angular.module('bp.transfer', [
  Button.name
])
  .component('bpTransfer', component);
