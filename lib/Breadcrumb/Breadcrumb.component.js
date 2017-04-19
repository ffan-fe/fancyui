import template from './Breadcrumb.html';
import controller from './Breadcrumb.controller';
import './Breadcrumb.less';

let BreadcrumbComponent = {
  restrict: 'E',
  bindings: {
    datasource: '<',
    onClick: '<',
    separator: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default BreadcrumbComponent;
