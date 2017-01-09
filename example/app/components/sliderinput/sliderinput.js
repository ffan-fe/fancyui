import sliderinputComponent from './sliderinput.component.js';
import RangeInput from '../../../../lib/rangeinput/index.js';

export default angular.module('sliderInput', [
		RangeInput.name
])
.component('sliderInput', sliderinputComponent);
