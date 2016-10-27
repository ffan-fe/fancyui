import generatorComponent from './component.js';
import template1 from './steptpls/step1.html';
import template2 from './steptpls/step2.html';
import template3 from './steptpls/step3.html';
import templateAddBtn from './steptpls/addbtn.html';
import templateAddStatus from './steptpls/addstatus.html';
import list from './steptpls/list.html';
import controller from './controller.js';


let generatorModule = angular.module('generator', [
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('generator', {// this will be the wrapper for our wizard
        url: '/generator',
        template: '<generator></generator>'
      })
      .state('generator.step1', {
        url: '/step1',
        template: template1,
        controller: controller
      })
      .state('generator.step2', {
        url: '/step2',
        template: template2,
        controller: controller
      })
      .state('generator.step3', {
        url: '/step3',
        template: template3,
        controller: controller
      })
      .state('generator.list', {
        url: '/list',
        template: list,
        controller: controller
      })
      .state('generator.addbtn', {
        url: '/addbtn',
        template: templateAddBtn,
        controller: controller
      })
      .state('generator.addstatus', {
        url: '/addstatus',
        template: templateAddStatus,
        controller: controller
      })
  })
  .component('generator', generatorComponent);

export default generatorModule;
