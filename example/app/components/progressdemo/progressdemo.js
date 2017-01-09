import progressdemoComponent from './progressdemo.component.js';
import Progress from '../../../../lib/progress/index.js';
export default angular.module('progressDemo', [
  Progress.name
])
.component('progressDemo', progressdemoComponent);
