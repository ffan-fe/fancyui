import hintComponent from './hint.component';
import {Service} from 'fancyui';

export default angular.module('hint', [
  Service.name
])
.component('hint', hintComponent);
