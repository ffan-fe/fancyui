import customtableComponent from './customtable.component.js';
import CustomTable from '../../../../lib/customTable/index.js';

export default angular.module('customTable', [
  CustomTable.name
])
.component('customTable', customtableComponent);
