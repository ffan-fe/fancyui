import radioComponent from './radio.component.js';
import Radiobox from '../../../../lib/radiobox/index.js';
import RadioboxGroup from '../../../../lib/radioboxGroup/index.js';

export default angular.module('radio', [
	Radiobox.name,
	RadioboxGroup.name
])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('radio', radioComponent);
