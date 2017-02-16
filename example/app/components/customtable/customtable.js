import customtableComponent from './customtable.component.js';
import CustomTable from '../../../../lib/CustomTable/index.js';
import Service from '../../../../lib/Service/index.js';

export default angular.module('customTable', [
  CustomTable.name,
  Service.name
])
.component('customTable', customtableComponent);
