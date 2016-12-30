/**
 * (description)
 *
 * @author yourname
 */
import img from './images/logo-icon.png';

'use strict';

export default class PanelController {
	constructor($state) {
		"ngInject";
		this.$state = $state;
		this.img = img;
	}
}