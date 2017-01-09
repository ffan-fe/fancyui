import inputnumberdemoComponent from './inputnumberdemo.component.js';
import InputNumber from '../../../../lib/inputnumber/index.js';

export default angular.module('inputNumberDemo', [
  InputNumber.name
])

.component('inputNumberDemo', inputnumberdemoComponent);
