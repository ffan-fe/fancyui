import transferComponent from './transfer.component.js';
import Transfer from '../../../../lib/Transfer/index.js';

export default angular.module('transfer', [
  Transfer.name
])
.component('transfer', transferComponent);
