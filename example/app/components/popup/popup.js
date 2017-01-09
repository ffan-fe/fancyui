import angular from 'angular';
import popupComponent from './popup.component.js';
import popup from './popup.controller.js';

let popDialogModule = angular.module('popDialog', [])
	.controller('PopupController', popup)
	.component('popup', popupComponent);

export default popDialogModule;

