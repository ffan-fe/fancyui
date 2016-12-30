import badgedemoComponent from './badgedemo.component';
import {Badge} from 'fancyui';
export default angular.module('badgeDemo', [
  Badge.name
])
.component('badgeDemo', badgedemoComponent);
