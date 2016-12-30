import buttonComponent from './button.component';
import {Button} from 'fancyui';

export default angular.module('buttonDemo', [
  Button.name
])
.component('buttonDemo', buttonComponent);
