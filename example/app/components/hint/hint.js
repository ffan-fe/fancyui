import hintComponent from './hint.component.js';
import Service from '../../../../lib/Service/index.js';

export default angular.module('hint', [
  Service.name
])
.component('hint', hintComponent);
