import {<%= upCaseName %>} from 'fancyui';

import <%= name %>Component from './<%= name %>.component';
export default angular.module('<%= name %>', [
  <%= upCaseName %>.name
])
.component('<%= name %>', <%= name %>Component);
