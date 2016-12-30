/**
 * (description)
 *
 * @author yourname
 */

export default class HomeController {
	constructor($interval, $timeout, $state) {
		'ngInject';
		this.$interval = $interval;
		this.$timeout = $timeout;
		this.$state = $state;
		this.typing = null;
		this.typeText = '';
		this.showOverlay = true;
		this.fadeOut = false;
		this.fadeIn = false;
		this.showCursor = true;
		this.keywords = ['网站快速成型工具', '可重复使用的组件', '飞凡组件库'];
		this.i = 0;
		this.j = 0;
		this.filterTyping();
	}

	filterTyping() {
		let self = this;
		let i = this.i;
		let j = this.j;
		let itemStr = this.keywords[j];

		self.j++;
		self.typeText = '';

		if (j == this.keywords.length) {
			self.fadeOut = true;
			self.fadeIn = true;
			self.showCursor = false;
			self.$timeout(function () {
				self.showOverlay = false;
			},500);
			return;
		}

		self.typing = self.$interval(function () {
			self.typeText += itemStr[i];
			i++;
			if (itemStr && i == itemStr.length) {
				self.$interval.cancel(self.typing);
				if (j < self.keywords.length) {
					self.$timeout(function () {
						self.filterTyping();
					},1000)
				}
			}
		}, 50);
	}

	goToStart() {
		this.$state.go('build');
	}
}