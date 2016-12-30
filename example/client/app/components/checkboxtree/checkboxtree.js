import checkboxtreeComponent from './checkboxtree.component';
import 'angular-ui-tree';
import {checkboxtree} from 'fancyui';

export default angular.module('democheckboxtree', [
  'ui.tree',
  checkboxtree.name
])
.component('democheckboxtree', checkboxtreeComponent);
