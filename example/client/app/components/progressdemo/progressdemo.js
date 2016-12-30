import progressdemoComponent from './progressdemo.component';
import {Progress} from 'fancyui';
export default angular.module('progressDemo', [
  Progress.name
])
.component('progressDemo', progressdemoComponent);
