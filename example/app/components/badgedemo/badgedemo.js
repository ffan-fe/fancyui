import badgedemoComponent from './badgedemo.component.js';
import Badge from '../../../../lib/Badge/index.js';
export default angular.module('badgeDemo', [
  Badge.name
])
.component('badgeDemo', badgedemoComponent);
