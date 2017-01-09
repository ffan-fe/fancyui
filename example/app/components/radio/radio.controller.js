/**
 * (description)
 *
 * @author yourname
 */

export default class RadioController {
	constructor() {
		'ngInject';
		this.option = "A";
		this.option1 = 'A';
		this.specialInfo = [1, 2, 3, 4, 5];
		this.model = "Option A";
		this.groupDataList = [
			{label: 'Option A', value: 'Option A'},
			{label: 'Option B', value: 'Option B'},
			{label: 'Option C', value: 'Option C', complex: [1, 2, 3, 4, 5]},
			{label: 'Option D', value: "Option D"},
			{label: 'Option E', value: "Option E", disabled: true},
			{label: 'Option F', value: "Option F"}
		];
	}
}