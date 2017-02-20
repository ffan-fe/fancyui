import tabsComponent from './tab.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.tabs', [
  ])
  .component('fTabs', tabsComponent)
  .component('bpTabs',
    deprecated(tabsComponent, 'bp-tabs', 'f-tabs'));

export default app;
