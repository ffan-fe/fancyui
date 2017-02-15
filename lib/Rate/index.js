import rateComponent from './rate.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.rate', [
  ])
  .component('fRate', rateComponent)
  .component('bpRate',
    deprecated(rateComponent, 'bp-rate', 'f-rate'));

export default app;