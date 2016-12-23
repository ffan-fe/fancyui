/**
 * (description)
 *
 * @author yourname
 */

export default class RateController {
	constructor() {
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

	showDefaultStars() {
		let index = this.value - 1;
		if (this.value) {
			this.rateChecked(index);
			this.rateHover(index)
		}
	}

	createArr() {
		for (let i = 0; i < this.rateCount; i++) {
			this.rateArr.push({
				on: false,
				hover: false
			});
		}
	}

	rateHover(index) {
		let self = this;
		self.rateArr.forEach((item, i) => {
				if (i <= index) {
					item.hover = true;
					self.setColors(item, index);
				} else {
					item.on = false;
					item.hover = false;
					item.color = self.offColor;
				}
			}
		)
	}

	setColors(item, index) {
		let rangeColor = null;
		let self = this;
		if (self.colors) {      // 区分颜色, 设置颜色区间
			if (index >= self.highFlag - 1) {     // 高分颜色
				rangeColor = self.highColor;
			} else if (index >= self.lowFlag) {   // 中分颜色
				rangeColor = self.midColor;
			} else {							  // 低分颜色
				rangeColor = self.lowColor;
			}
			for (let j = 0; j <= index; j++) {
				item.color = rangeColor;
			}
		} else {   				// 不区分颜色,设置选中的默认颜色
			item.color = self.onColor;
		}
	}

	rateLeave(index) {
		let self = this;
		this.rateArr.forEach((item, i) => {
				if (i <= index) {
					item.hover = false;
					if (!item.on) {
						item.color = self.offColor;
					}
				}
			}
		)
	}

	rateClick(index) {
		let self = this;
		self.rateValue = index + 1;
		self.rateChecked(index);

		if (this.textArray) {     // 显示辅助文字
			this.rateText = this.textArray[index];
		}

		if (this.onChange) {      // 回调返回选中的值
			this.onChange(this.rateValue);
		}
	}

	rateChecked(index) {
		let self = this;
		self.rateArr.forEach((item, i) => {
				if (i <= index) {
					item.on = true;
				} else {
					item.on = false;
					item.hover = false;
					item.color = self.offColor;
				}
			}
		);
	}

	restore() {
		let self = this;
		let index = this.rateValue - 1;
		this.rateArr.forEach((item, i) => {
			if (i < this.rateValue) {
				item.on = true;
				self.setColors(item, index);
			}
		});
	}
}