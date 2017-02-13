import checkboxtreeComponent from './component.js';
import 'angular-ui-tree';
import deprecated from '../tool/deprecated';

let app = angular.module('checkboxtree', [
    'ui.tree'
  ])
  .component('fCheckboxTree', checkboxtreeComponent)
  .component('bpCheckboxtree',
    deprecated(checkboxtreeComponent, 'bp-checkboxtree', ' f-checkbox-tree'));

export default app;
