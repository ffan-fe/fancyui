import ratedemoComponent from './ratedemo.component.js';
import Rate from '../../../../lib/rate/index.js';

export default angular.module('rateDemo', [
  Rate.name
])
.component('rateDemo', ratedemoComponent);
