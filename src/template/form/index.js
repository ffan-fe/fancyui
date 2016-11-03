import formComponent from './component.js';
import bpAjax from 'bp-ajax';

let formModule = angular.module('formTpl', [
    bpAjax.name
])

.component('formTpl', formComponent);

export default formModule;
