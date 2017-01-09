import switchdemoComponent from './switchdemo.component.js';
import Switch from '../../../../lib/switch/index.js';

export default angular.module('switchDemo', [
  Switch.name
])
.component('switchDemo', switchdemoComponent);
