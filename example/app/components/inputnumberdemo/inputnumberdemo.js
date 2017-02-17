import inputnumberdemoComponent from './inputnumberdemo.component.js';
import InputNumber from '../../../../lib/Inputnumber/index.js';

export default angular.module('inputNumberDemo', [
  InputNumber.name
])

.component('inputNumberDemo', inputnumberdemoComponent);
