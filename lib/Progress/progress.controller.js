/**
 * (description)
 *
 * @author yourname
 */

export default class ProgressController {
	constructor($document, $sce) {
		'ngInject';
		this.$sce = $sce;
		this.$document = $document;
		const defaultStokeWidth = this.type ==='line' ? 8 : 5; 
		this.innerStrokeWidth = this.strokeWidth ?  this.strokeWidth:defaultStokeWidth;
		this.calculatePath();
	}

	calculatePath() {
		if (this.type != 'circle') {
			return;
		}
		
		const radius = (50 - this.innerStrokeWidth / 2);
		const len = Math.PI * 2 * radius;
		this.defaultColor = '#e5e9f2';
		switch (this.status) {
			case 'success':
				this.strokeColor = '#13ce66';
				break;
			case 'exception':
				this.strokeColor = '#ff4949';
				break;
			default:
				this.strokeColor = '#20a0ff';
				break;
		}
		this.pathString = `M 50,50 m 0,-${radius} a ${radius},${radius} 0 1 1 0, ${2 * radius} a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
		this.pathStyle =
			`stroke-dasharray: ${len}px ${len}px;
			 stroke-dashoffset: ${((100 - this.percent) / 100 * len)}px;
			 transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'`;

		this.template = this.$sce.trustAsHtml(
		    `<path d="${this.pathString}"
			      stroke="${this.defaultColor}"
			      stroke-width="${this.innerStrokeWidth}"
			      fill="none">
			</path>
			<path d="${this.pathString}"
				  stroke-linecap="round"
				  stroke="${this.strokeColor}"
				  stroke-width="${this.innerStrokeWidth}"
				  fill="none"
				  style="${this.pathStyle}">
			</path>`);
	}
}