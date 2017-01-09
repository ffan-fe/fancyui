import logoImg from './images/cloud-logo.png';
import routeConfig from '../../router/routerConfig';

'use strict';

export default class commonMenuController {
	constructor($scope, $state, $translate) {
		"ngInject";
		this.$scope = $scope;
		this.$state = $state;
		this.$translate = $translate;

	}

	collapse(e) {
		//$(e.target).siblings('.sub-menu').toggle();
	}

	globalRoute(routeName) {
		return `${routeName}({'lang':'${this.currentLang}'})`;
	}


	renderModuleName(routeName) {
		for (var i = 0, len = routeConfig.length; i < len; i++) {
			if (routeConfig[i].name === routeName) {
				return routeConfig[i].moduleName[this.currentLang];
			}
		}
		return '';
	}

	$onInit() {
		this.logoImg = logoImg;
		this.currentLang = this.$translate.use();
	}
}
