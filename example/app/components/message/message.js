import Service from '../../../../lib/service/index.js';

import messageComponent from './message.component';
export default angular.module('message', [
  Service.name
])
.component('message', messageComponent);
