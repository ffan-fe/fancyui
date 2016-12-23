'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * (description)
 *
 * @author yourname
 */

var RateController = function () {
	function RateController() {
		_classCallCheck(this, RateController);

		this.rateArr = [];
		this.onColor = '#f7ba2a';
		this.offColor = '#c6d1de';

		this.rateCount = this.count || 5;
		this.rateValue = this.value || 0;
		this.rateColors = this.colors || [];
		this.lowFlag = this.lowThreshold || 2;
		this.highFlag = this.highThreshold || 4;

		this.lowColor = this.rateColors[0];
		this.midColor = this.rateColors[1];
		this.highColor = this.rateColors[2];

		this.createArr();
		this.showDefaultStars();
	}

	_createClass(RateController, [{
		key: 'showDefaultStars',
		value: function showDefaultStars() {
			var index = this.value - 1;
			if (this.value) {
				this.rateChecked(index);
				this.rateHover(index);
			}
		}
	}, {
		key: 'createArr',
		value: function createArr() {
			for (var i = 0; i < this.rateCount; i++) {
				this.rateArr.push({
					on: false,
					hover: false
				});
			}
		}
	}, {
		key: 'rateHover',
		value: function rateHover(index) {
			var self = this;
			self.rateArr.forEach(function (item, i) {
				if (i <= index) {
					item.hover = true;
					self.setColors(item, index);
				} else {
					item.on = false;
					item.hover = false;
					item.color = self.offColor;
				}
			});
		}
	}, {
		key: 'setColors',
		value: function setColors(item, index) {
			var rangeColor = null;
			var self = this;
			if (self.colors) {
				// 区分颜色, 设置颜色区间
				if (index >= self.highFlag - 1) {
					// 高分颜色
					rangeColor = self.highColor;
				} else if (index >= self.lowFlag) {
					// 中分颜色
					rangeColor = self.midColor;
				} else {
					// 低分颜色
					rangeColor = self.lowColor;
				}
				for (var j = 0; j <= index; j++) {
					item.color = rangeColor;
				}
			} else {
				// 不区分颜色,设置选中的默认颜色
				item.color = self.onColor;
			}
		}
	}, {
		key: 'rateLeave',
		value: function rateLeave(index) {
			var self = this;
			this.rateArr.forEach(function (item, i) {
				if (i <= index) {
					item.hover = false;
					if (!item.on) {
						item.color = self.offColor;
					}
				}
			});
		}
	}, {
		key: 'rateClick',
		value: function rateClick(index) {
			var self = this;
			self.rateValue = index + 1;
			self.rateChecked(index);

			if (this.textArray) {
				// 显示辅助文字
				this.rateText = this.textArray[index];
			}

			if (this.onChange) {
				// 回调返回选中的值
				this.onChange(this.rateValue);
			}
		}
	}, {
		key: 'rateChecked',
		value: function rateChecked(index) {
			var self = this;
			self.rateArr.forEach(function (item, i) {
				if (i <= index) {
					item.on = true;
				} else {
					item.on = false;
					item.hover = false;
					item.color = self.offColor;
				}
			});
		}
	}, {
		key: 'restore',
		value: function restore() {
			var _this = this;

			var self = this;
			var index = this.rateValue - 1;
			this.rateArr.forEach(function (item, i) {
				if (i < _this.rateValue) {
					item.on = true;
					self.setColors(item, index);
				}
			});
		}
	}]);

	return RateController;
}();

exports.default = RateController;