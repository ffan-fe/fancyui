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

var SwitchController = function () {
	function SwitchController() {
		_classCallCheck(this, SwitchController);

		this.name = 'switch';
		this.isChecked = this.defaultChecked;
	}

	_createClass(SwitchController, [{
		key: 'switchCheck',
		value: function switchCheck() {
			if (this.disabled) {
				return;
			}
			this.isChecked = this.isChecked ? false : true;
			this.onChange(this.isChecked);
		}
	}]);

	return SwitchController;
}();

exports.default = SwitchController;