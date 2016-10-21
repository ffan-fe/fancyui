// import Button from '../../src/components/button';
import template from './template.html';
import controller from './controller';
import Button from '../../src/components/button/index.js';



export default angular.module('buttonShow', [
  Button.name
])
  .component('buttonShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
