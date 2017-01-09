import buttonComponent from './button.component.js';
import Button from '../../../../lib/button/index.js';

export default angular.module('buttonDemo', [
  Button.name
])
.component('buttonDemo', buttonComponent);
