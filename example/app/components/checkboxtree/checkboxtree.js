import checkboxtreeComponent from './checkboxtree.component.js';
import checkboxtree from '../../../../lib/checkboxtree/index.js';

export default angular.module('democheckboxtree', [
  checkboxtree.name
])
.component('democheckboxtree', checkboxtreeComponent);
