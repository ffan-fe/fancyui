import buttonComponent from './button.component.js';
import Button from '../../../../lib/Button/index.js';

export default angular.module('buttonDemo', [
  Button.name
])
.component('buttonDemo', buttonComponent);
