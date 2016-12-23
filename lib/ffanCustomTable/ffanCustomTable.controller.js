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

var FfanCustomTableController = function () {
	function FfanCustomTableController(NgTableParams) {
		"ngInject";

		_classCallCheck(this, FfanCustomTableController);

		this.NgTableParams = NgTableParams;
		this.height = 'auto';
		this.isCollapse = false;
		this.data = this.tableData;
		this.getDataList();
	}

	_createClass(FfanCustomTableController, [{
		key: 'getDataList',
		value: function getDataList() {
			var self = this;
			self.tableParams = new this.NgTableParams({
				page: 1,
				count: 5
			}, {
				counts: [],
				getData: function getData(params) {
					if (self.pageChange) {
						// 回调返回pageNo
						self.pageChange(params.url().page);
					}

					self.loading = true;
					self.addScrollWrap();
					params.total(self.data.totalCount);
					return self.data && self.data.items;
				}
			});
		}
	}, {
		key: 'toggleCollapse',
		value: function toggleCollapse(e) {
			this.height = this.height == 0 ? 'auto' : 0;
			this.isCollapse = this.isCollapse ? false : true;
		}
	}, {
		key: 'checkColumn',
		value: function checkColumn(e, index, column) {
			column.checked = e.currentTarget.checked;
		}
	}, {
		key: 'addScrollWrap',
		value: function addScrollWrap() {
			$('#customTable').wrap('<div class="table-scroll-wrap"></div>');
		}
	}]);

	return FfanCustomTableController;
}();

exports.default = FfanCustomTableController;