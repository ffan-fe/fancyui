import template from './select.html';
import controller from './select.controller';
import './select.less';

let selectComponent = {
  restrict: 'E',
  bindings: {
    isRemote: "<",
    isGroup : "<",
    isDisabled:'<',
    data:'<',
    /**
     * 单向绑定，可以二次设置来清空
     */
    ngModel:'<',
    /**
     * 双向绑定，给isMultiple模式用的数组
     */
    ngModels:'=',
    onItemSelected:'&',
    remoteMethod:'&',
    remoteDebounce:'<',
    isMultiple:'<',
    clearable:'<',
    allowCreate:'<',
    placeHolder:'<',
    emptyDataText:'<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default selectComponent;
