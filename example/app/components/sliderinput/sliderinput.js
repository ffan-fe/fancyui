import sliderinputComponent from './sliderinput.component.js';
import RangeInput from '../../../../lib/Rangeinput/index.js';

export default angular.module('sliderInput', [
		RangeInput.name
])
.component('sliderInput', sliderinputComponent);
