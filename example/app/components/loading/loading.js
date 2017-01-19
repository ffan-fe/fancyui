
import Service from '../../../../lib/service/index.js';
import Button from '../../../../lib/button/index.js';
import loadingComponent from './loading.component';

export default angular.module('loading', [
  Service.name,
  Button.name
])
  .component('loading', loadingComponent);
