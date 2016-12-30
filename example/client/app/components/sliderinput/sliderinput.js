import sliderinputComponent from './sliderinput.component';
import {RangeInput} from 'fancyui';

export default angular.module('sliderInput', [
		RangeInput.name
])
.component('sliderInput', sliderinputComponent);
