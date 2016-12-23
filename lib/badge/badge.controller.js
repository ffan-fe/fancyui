'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * (description)
 *
 * @author yourname
 */

var BadgeController = function BadgeController() {
	_classCallCheck(this, BadgeController);

	if (this.dot || this.count == 0) {
		this.countValue = '';
	} else {
		if (this.count > this.max) {
			this.countValue = this.max + '+';
		} else {
			this.countValue = this.count;
		}
	}
};

exports.default = BadgeController;