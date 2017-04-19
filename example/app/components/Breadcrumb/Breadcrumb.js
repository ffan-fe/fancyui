import Breadcrumb from '../../../../lib/Breadcrumb/index.js';

import BreadcrumbComponent from './Breadcrumb.component';
export default angular.module('Breadcrumb', [
  Breadcrumb.name
])
.component('breadcrumb', BreadcrumbComponent);
