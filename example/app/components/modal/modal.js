import Service from '../../../../lib/Service';

import modalComponent from './modal.component';
export default angular.module('example-modal', [
  Service.name
])
.component('exampleModal', modalComponent);
