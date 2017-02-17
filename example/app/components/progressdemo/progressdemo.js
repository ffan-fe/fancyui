import progressdemoComponent from './progressdemo.component.js';
import Progress from '../../../../lib/Progress/index.js';
export default angular.module('progressDemo', [
  Progress.name
])
.component('progressDemo', progressdemoComponent);
