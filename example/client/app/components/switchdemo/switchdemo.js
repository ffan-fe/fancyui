import switchdemoComponent from './switchdemo.component';
import {Switch} from 'fancyui';

export default angular.module('switchDemo', [
  Switch.name
])
.component('switchDemo', switchdemoComponent);
