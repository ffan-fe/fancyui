import radioComponent from './radio.component';
import {Radiobox} from 'fancyui';
import {RadioboxGroup} from 'fancyui';

export default angular.module('radio', [
	Radiobox.name,
	RadioboxGroup.name
])
/**
 * 轻在routerConfig.js里定义路由
 */
.component('radio', radioComponent);
