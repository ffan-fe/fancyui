/**
 * (description)
 *
 * @author yourname
 */

export default class FfanCustomTableController {
	constructor(NgTableParams) {
		"ngInject";
		this.NgTableParams = NgTableParams;
		this.height = 'auto';
		this.isCollapse = false;
		this.data = this.tableData;
		this.getDataList();
	}

	getDataList() {
		var self = this;
		self.tableParams = new this.NgTableParams({
			page: 1,
			count: 5
		}, {
			counts: [],
			getData: function (params) {
				if (self.pageChange) {      // 回调返回pageNo
					self.pageChange(params.url().page);
				}

				self.loading = true;
				self.addScrollWrap();
				params.total(self.data.totalCount);
				return self.data && self.data.items;
			}
		});
	}

	toggleCollapse(e) {
		this.height = this.height == 0 ? 'auto' : 0;
		this.isCollapse = this.isCollapse ? false : true;
	}

	checkColumn(e, index, column) {
		column.checked = e.currentTarget.checked;
	}

	addScrollWrap() {
		$('#customTable').wrap('<div class="table-scroll-wrap"></div>');
	}
}