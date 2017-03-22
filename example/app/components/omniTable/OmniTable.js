import OmniTable from '../../../../lib/OmniTable/index.js';

import OmniTableComponent from './OmniTable.component';
export default angular.module('OmniTable', [
  OmniTable.name
])
.component('omniTable', OmniTableComponent);
