import Steps from '../../../../lib/Steps/index.js';

import stepsComponent from './steps.component.js';
export default angular.module('steps', [
  Steps.name
])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('steps', stepsComponent);
