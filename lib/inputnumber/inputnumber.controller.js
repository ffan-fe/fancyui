"use strict";

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

var InputnumberController = function () {
	function InputnumberController() {
		_classCallCheck(this, InputnumberController);

		this.minusDisable = this.disabled ? true : false;
		this.plusDisable = this.disabled ? true : false;
		this.minValue = this.min || 0;
		this.checkStatus();
	}

	_createClass(InputnumberController, [{
		key: "inputPlus",
		value: function inputPlus() {
			if (this.value >= this.max || this.disabled) {
				return;
			}
			if (!this.step) {
				this.value++;
			} else {
				this.value += this.step;
			}
			this.checkStatus();
			if (this.onChange) {
				this.onChange(this.value);
			}
		}
	}, {
		key: "inputMinus",
		value: function inputMinus() {
			if (this.value <= this.minValue || this.disabled) {
				return;
			}
			if (!this.step) {
				this.value--;
			} else {
				this.value -= this.step;
			}
			this.checkStatus();
			if (this.onChange) {
				this.onChange(this.value);
			}
		}
	}, {
		key: "inputChange",
		value: function inputChange() {
			this.checkStatus();
			if (this.onChange) {
				this.onChange(this.value);
			}
		}
	}, {
		key: "inputBlur",
		value: function inputBlur() {
			var isBlur = true;
			this.checkStatus(isBlur);
		}
	}, {
		key: "checkStatus",
		value: function checkStatus(isBlur) {
			if (this.value <= this.minValue) {
				this.minusDisable = true;
				if (isBlur) {
					this.value = this.minValue;
				}
			} else if (this.value >= this.max) {
				this.plusDisable = true;
				if (isBlur) {
					this.value = this.max;
				}
			} else {
				this.minusDisable = false;
				this.plusDisable = false;
			}
		}
	}]);

	return InputnumberController;
}();

exports.default = InputnumberController;