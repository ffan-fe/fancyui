 import template from './OmniTable.html';
import controller from './OmniTable.controller';
import './OmniTable.less';

let OmniTableComponent = {
  restrict: 'E',
  bindings: {
    datasource: '<',
    dataconfig: '<',
    columns: '<',
    loading: '<',
    search: '<',
    rowSelection: '<',
    onChange: '<',
    pagination: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default OmniTableComponent;
