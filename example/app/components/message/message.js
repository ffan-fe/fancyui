import Service from '../../../../lib/Service/index.js';

import messageComponent from './message.component';
export default angular.module('message', [
  Service.name
])
.component('message', messageComponent);
