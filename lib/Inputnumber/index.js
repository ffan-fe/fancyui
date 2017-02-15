import inputnumberComponent from './inputnumber.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.inputNumber', [
  ])
  .component('fInputNumber', inputnumberComponent)
  .component('inputNumber',
    deprecated(inputnumberComponent, 'input-number', 'f-input-number'));

export default app;