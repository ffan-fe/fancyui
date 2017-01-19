/**
 * (description)
 *
 * @author yourname
 */

export default class TableController {
	constructor(NgTableParams, $state) {
		"ngInject";
		this.$state = $state;
		this.NgTableParams = NgTableParams;
		this.data = {
      "total": 85,
      "datas": [
        {
          "name": 'fix_web',
          "viewName": "tool-wd",
          "lastStatus": "SUCCESS",
          "lastNO": "#10",
          "lastFailNO": "#4"
				},
				{
					"name": 'fix_web',
					"viewName": "tool-wd",
					"lastStatus": "SUCCESS",
					"lastNO": "#10",
					"lastFailNO": "#4"
				}
			]
    };
		this.init();
	}

	init() {
		this.getDataList();
	}

	getDataList() {
		var self = this;
		var self = this;
    self.tableParams = new this.NgTableParams({
      page: 1,
      count: 5
    }, {
				counts: [],
				getData: function (params) {
					params.total(self.data.total);
					return self.data.datas;
				}
			});
	}
}