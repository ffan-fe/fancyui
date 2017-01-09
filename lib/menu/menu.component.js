import template from './menu.html';
import controller from './menu.controller';
import './menu.less';

let menuComponent = {
  restrict: 'E',
  bindings: {
    theme: '@',
    mode: '@',
    //selectedKeys: '=',
    defaultSelectedKeys: '<',
    //openKeys: '=',
    defaultOpenKeys: '<',
    //onOpenChange: '&',
    onSelect: '<'
    //onDeselect: '&',
    //onClick: '&',
    //className: '@',
    //inlineIndent: '@'
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default menuComponent;
