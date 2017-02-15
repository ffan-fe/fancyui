import stepsComponent from './steps.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.steps', [
  ])
  .component('fSteps', stepsComponent)
  .component('bpSteps',
    deprecated(stepsComponent, 'bp-steps', 'f-steps'));

export default app;