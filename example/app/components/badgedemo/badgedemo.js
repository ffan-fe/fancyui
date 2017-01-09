import badgedemoComponent from './badgedemo.component.js';
import Badge from '../../../../lib/badge/index.js';
export default angular.module('badgeDemo', [
  Badge.name
])
.component('badgeDemo', badgedemoComponent);
