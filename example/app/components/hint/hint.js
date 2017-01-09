import hintComponent from './hint.component.js';
import Service from '../../../../lib/service/index.js';

export default angular.module('hint', [
  Service.name
])
.component('hint', hintComponent);
