import transferComponent from './transfer.component.js';
import Transfer from '../../../../lib/transfer/index.js';

export default angular.module('transfer', [
  Transfer.name
])
.component('transfer', transferComponent);
