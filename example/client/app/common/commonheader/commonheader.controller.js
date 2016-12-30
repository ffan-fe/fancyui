import logoImg from './images/fancyui.png';

'use strict';

export default class commonHeaderController {
	constructor($scope, $document, $state, $translate) {
		"ngInject";
		this.$scope = $scope;
		this.$document = $document;
		this.logoImg = logoImg;
		this.$state = $state;
		this.$translate = $translate;
		
	}

	changeLanguage(key) {
		this.$state.go('.', { 'lang': key }, { notify: true });
		this.$translate.use(key);
		this.lang = key;
	}

	$onInit() {
		/**
		 * 当前site的语言
		 */
		this.lang = this.$state.params.lang;
		this.$translate.use(this.lang);
		/**
		 * 粗糙判断，后续可以扩展成 从routeConfig里取配置来判断
		 */
		this.isComponentPage = this.$state.current.url.indexOf('component');
	}
}
