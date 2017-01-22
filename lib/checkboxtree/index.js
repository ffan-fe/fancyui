import checkboxtreeComponent from './component.js';
import 'angular-ui-tree';
let checkboxtreeModule = angular.module('checkboxtree', [
  'ui.tree'
])

.component('bpCheckboxtree', checkboxtreeComponent);

export default checkboxtreeModule;
