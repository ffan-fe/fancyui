import checkboxtreeComponent from './checkboxtree.component.js';
import 'angular-ui-tree';
import checkboxtree from '../../../../lib/checkboxtree/index.js';

export default angular.module('democheckboxtree', [
  'ui.tree',
  checkboxtree.name
])
.component('democheckboxtree', checkboxtreeComponent);
