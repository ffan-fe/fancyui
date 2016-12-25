/**
 * Datepicker component entry
 * @author name
 */
import $ from 'jquery'

import component from './component.js';

'use strict';

export default angular.module('bp.component.Datepicker', [])
  .directive('bpDatepicker', ($rootScope) => {
    'ngInject'
    return new component($rootScope);
  }).run(($rootScope) => {
    'ngInject'
    /*angular.element(window).bind('click', (e => {
      console.log('e', e);
      $rootScope.calendars.forEach(v => {
        console.log($('#' + v.id).find(e.target).length);
        if(!$('#' + v.id).find(e.target).length){
          v.scope.vm.pop = false;
        }
      });
    }));*/
  });
