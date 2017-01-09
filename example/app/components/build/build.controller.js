/**
 * (description)
 *
 * @author yourname
 */

import initImage from './images/init.png';
import startImage from './images/start.png';

export default class BuildController {
	constructor($interval, $timeout) {
		'ngInject';
		this.initImage = initImage;
		this.startImage = startImage;
	}
}