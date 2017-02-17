import switchComponent from './switch.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.switch', [
  ])
  .component('fSwitch', switchComponent)
  .component('bpSwitch',
    deprecated(switchComponent, 'bp-switch', 'f-switch'));

export default app;