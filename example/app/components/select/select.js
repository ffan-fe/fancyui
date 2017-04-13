import Select from '../../../../lib/Select/index.js';

import Button from '../../../../lib/Button/index.js'
import selectComponent from './select.component.js';
export default angular.module('selectdemo', [
  Button.name,
  Select.name
])
.component('selectdemo', selectComponent);
