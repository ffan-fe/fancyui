import popconfirmComponent from './popconfirm.component.js';
import PopConfirm from '../../../../lib/popconfirm/index.js';
import Service from '../../../../lib/service/index.js';

export default angular.module('popConfirm', [
  PopConfirm.name,
  Service.name
])
/**
 * 轻在routerConfig.js里定义路由
 */
  .component('popConfirm', popconfirmComponent);
