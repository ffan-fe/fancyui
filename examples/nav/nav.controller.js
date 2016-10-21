/** nav component controller */

import TweenMax from 'gsap';

'use strict';

/**
 * @export
 * @class navController
 */
export default class NavController {
  /**
   * create NavController
   * 
   * @constructor NavController
   * @param {RouteState} $state
   */
  constructor($state, $rootScope, $timeout, $anchorScroll, $location) {
    'ngInject';
    this.$state = $state;
    this.$timeout = $timeout;
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;

    $('#toggle_btn').click(() => {
      if ($state.is('skin')) {
        $('#nav').toggleClass('show-skin-menu');
      }
      if ($state.includes('ui')) {
        $('#nav').toggleClass('show-component-menu');
      }
    });
  }
  goAnchor(anchorName) {
    this.$location.hash(`${anchorName}_anchor`)
    this.$anchorScroll();
  }
}