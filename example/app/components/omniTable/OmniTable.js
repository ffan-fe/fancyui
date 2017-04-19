import OmniTable from '../../../../lib/OmniTable/index.js';
import Switch from '../../../../lib/Switch/index.js';


import OmniTableComponent from './OmniTable.component';
export default angular.module('OmniTable', [
  OmniTable.name,
  Switch.name
])
.component('omniTable', OmniTableComponent);
