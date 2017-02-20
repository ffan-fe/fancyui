
import Service from '../../../../lib/Service/index.js';
import Button from '../../../../lib/Button/index.js';
import loadingComponent from './loading.component';

export default angular.module('loading', [
  Service.name,
  Button.name
])
  .component('loading', loadingComponent);
