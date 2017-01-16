import Service from '../../../../lib/service/index.js';

import loadingComponent from './loading.component';
export default angular.module('loading', [
  Service.name
])
.component('loading', loadingComponent);
