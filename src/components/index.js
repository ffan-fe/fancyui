import datepicker from './datepicker/index.js'
import rangepicker from './rangepicker/index.js'
import checkboxtree from './checkboxtree/index.js'
import multiselect from './multiselect/index.js'


let componentModule = angular.module('bp.components', [
  datepicker.name,
  rangepicker.name,
  checkboxtree.name,
  multiselect.name
]);
export default componentModule;
