import badgeComponent from './badge.component';
import deprecated from '../tool/deprecated';

let app = angular.module('bp.badge', [])
  .component('fBadge', badgeComponent)
  .component('bpBadge',
    deprecated(badgeComponent, 'bp-badge', 'f-badge'));

export default app;
