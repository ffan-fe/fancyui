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

var ProgressController = function () {
	function ProgressController($document, $sce) {
		'ngInject';

		_classCallCheck(this, ProgressController);

		this.$sce = $sce;
		this.$document = $document;
		this.calculatePath();
	}

	_createClass(ProgressController, [{
		key: 'calculatePath',
		value: function calculatePath() {
			if (this.type != 'circle') {
				return;
			}
			var radius = 50 - this.strokeWidth / 2;
			var len = Math.PI * 2 * radius;
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
			this.pathString = 'M 50,50 m 0,-' + radius + ' a ' + radius + ',' + radius + ' 0 1 1 0, ' + 2 * radius + ' a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
			this.pathStyle = 'stroke-dasharray: ' + len + 'px ' + len + 'px;\n\t\t\t stroke-dashoffset: ' + (100 - this.percent) / 100 * len + 'px;\n\t\t\t transition: \'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease\'';

			this.template = this.$sce.trustAsHtml('<path d="' + this.pathString + '"\n\t\t\t      stroke="' + this.defaultColor + '"\n\t\t\t      stroke-width="' + this.strokeWidth + '"\n\t\t\t      fill="none">\n\t\t\t</path>\n\t\t\t<path d="' + this.pathString + '"\n\t\t\t\t  stroke-linecap="round"\n\t\t\t\t  stroke="' + this.strokeColor + '"\n\t\t\t\t  stroke-width="' + this.strokeWidth + '"\n\t\t\t\t  fill="none"\n\t\t\t\t  style="' + this.pathStyle + '">\n\t\t\t</path>');
		}
	}]);

	return ProgressController;
}();

exports.default = ProgressController;