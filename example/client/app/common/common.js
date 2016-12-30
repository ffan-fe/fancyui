/**
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';
import './commonheader/commonheader';
import './commonmenu/commonmenu';

import loadingBar from './loadingbar/loadingbar';

let commonModule = angular.module('app.common', [
	'commonmenu',
	'commonheader',
	loadingBar.name
]);

export default commonModule;
