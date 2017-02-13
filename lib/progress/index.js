import progressComponent from './progress.component';
import deprecated from '../tool/deprecated';

let app = angular.module('progress', [
  ])
  .component('fProgress', progressComponent)
  .component('bpProgress',
    deprecated(progressComponent, 'bp-progress', 'f-progress'));

export default app;
