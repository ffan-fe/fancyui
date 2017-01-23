/**
 * (description)
 *
 * @author yourname
 */
import Base from '../../base';
import initImage from './images/init.png';
import startImage from './images/start.png';

export default class BuildController extends Base{
	constructor($interval, $timeout,$state,$translate) {
		'ngInject';
		super($state,$translate)
		this.initImage = initImage;
		this.startImage = startImage;
	}
}