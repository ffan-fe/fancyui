import inputnumberdemoComponent from './inputnumberdemo.component';
import {InputNumber} from 'fancyui';

export default angular.module('inputNumberDemo', [
  InputNumber.name
])

.component('inputNumberDemo', inputnumberdemoComponent);
