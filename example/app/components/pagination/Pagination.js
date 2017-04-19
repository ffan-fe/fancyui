import Pagination from '../../../../lib/Pagination/index.js';

import PaginationComponent from './Pagination.component';
export default angular.module('Pagination', [
  Pagination.name
])
.component('pagination', PaginationComponent);
