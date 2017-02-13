import checkboxtreeComponent from './component.js';
import 'angular-ui-tree';
let checkboxtreeModule = angular.module('checkboxtree', [
  'ui.tree'
])

.component('fCheckboxTree', checkboxtreeComponent);

export default checkboxtreeModule;
