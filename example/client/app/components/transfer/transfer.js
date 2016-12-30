import transferComponent from './transfer.component';
import { Transfer } from 'fancyui';

export default angular.module('transfer', [
  Transfer.name
])
.component('transfer', transferComponent);
