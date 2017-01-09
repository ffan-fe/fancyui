import <%= upCaseName %> from '../../../../lib/<%= upCaseName %>/index.js';

import <%= name %>Component from './<%= name %>.component';
export default angular.module('<%= name %>', [
  <%= upCaseName %>.name
])
.component('<%= name %>', <%= name %>Component);
