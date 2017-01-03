import {Select} from 'fancyui';

import selectComponent from './select.component';
export default angular.module('selectdemo', [
  Select.name
])
.component('selectdemo', selectComponent);
