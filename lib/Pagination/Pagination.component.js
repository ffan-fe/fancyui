import template from './Pagination.html';
import controller from './Pagination.controller';
import './style/Pagination.less';

let PaginationComponent = {
  restrict: 'E',
  bindings: {
    defaultCurrent: '<',
    total: '=',
    pageSize: '<',
    onChange: '<',
    showSizeChanger: '<',
    pageSizeOptions: '<',
    onShowSizeChange: '&',
    showQuickJumper: '<',
    //size: '@',
    //simple: '<',
    showTotal: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default PaginationComponent;
