/**
 * (description)
 *
 * @author yourname
 */

export default class BadgeController {
	constructor() {
		if (this.dot || this.count == 0) {
			this.countValue = '';
		} else {
			if (this.count > this.max) {
				this.countValue = this.max + '+';
			} else {
				this.countValue = this.count;
			}
		}
	}
}