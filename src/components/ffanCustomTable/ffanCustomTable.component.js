import template from './ffanCustomTable.html';
import controller from './ffanCustomTable.controller';
import './ffanCustomTable.less';

export default {
	restrict: 'E',
	bindings: {
		'isCustomTable': '=',
		'customColumn': '=',
		'tableData': '=',
		'operations': '=',
		'pageChange': '='
	},
	template,
	controller,
	controllerAs: 'vm'
};
