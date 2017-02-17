import radioComponent from './radio.component.js';
import Radiobox from '../../../../lib/Radiobox/index.js';
import RadioboxGroup from '../../../../lib/RadioboxGroup/index.js';

export default angular.module('radio', [
	Radiobox.name,
	RadioboxGroup.name
])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('radio', radioComponent);
