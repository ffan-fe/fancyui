/**
 * Created by fjywan on 16/6/6.
 */

import directives from './directive/index.js'
import components from './components/index.js'
import template from './template/index.js'
import services from './service/index.js';
import fixURL from './tool/fixurl';

let bpUtils = angular.module('bp.utils',[
  directives.name,
  components.name,
  template.name,
  services.name
]);

export default bpUtils;

export let fixDomain = fixURL;
