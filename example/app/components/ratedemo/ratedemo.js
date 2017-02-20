import ratedemoComponent from './ratedemo.component.js';
import Rate from '../../../../lib/Rate/index.js';

export default angular.module('rateDemo', [
  Rate.name
])
.component('rateDemo', ratedemoComponent);
