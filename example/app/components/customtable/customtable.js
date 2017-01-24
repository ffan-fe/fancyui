import customtableComponent from './customtable.component.js';
import CustomTable from '../../../../lib/customTable/index.js';
import Service from '../../../../lib/service/index.js';

export default angular.module('customTable', [
  CustomTable.name,
  Service.name
])
.component('customTable', customtableComponent);
