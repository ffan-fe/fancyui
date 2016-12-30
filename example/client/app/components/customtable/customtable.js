import customtableComponent from './customtable.component';
import {CustomTable} from 'fancyui';

export default angular.module('customTable', [
  CustomTable.name
])
.component('customTable', customtableComponent);
