import stepsComponent from './steps.component';
import deprecated from '../tool/deprecated';
import Directive from '../Directive'

let app = angular.module('bp.steps', [
  Directive.name
  ])
  .component('fSteps', stepsComponent)
  .component('bpSteps',
    deprecated(stepsComponent, 'bp-steps', 'f-steps'));

export default app;
