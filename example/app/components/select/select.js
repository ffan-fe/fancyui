import Select from '../../../../lib/select/index.js';

import selectComponent from './select.component.js';
export default angular.module('selectdemo', [
  Select.name
])
.component('selectdemo', selectComponent);
