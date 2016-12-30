import ratedemoComponent from './ratedemo.component';
import {Rate} from 'fancyui';

export default angular.module('rateDemo', [
  Rate.name
])
.component('rateDemo', ratedemoComponent);
