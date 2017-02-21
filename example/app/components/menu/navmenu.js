import Navmenu from '../../../../lib/menu/index.js';

import navmenuComponent from './navmenu.component';
export default angular.module('navmenu', [
  Navmenu.name
])
.component('navmenu', navmenuComponent);
