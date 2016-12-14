import config from './default.config.js'

class ListController {
  constructor(NgTableParams, $http) {
    'ngInject'
    this.name = 'list';
    this.$http = $http;
    this.config = Object.assign({}, config, this.config);
    this.datepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'YYYY-MM-DD HH:mm:ss'
    };

    this.tableParams = new NgTableParams({
      count: this.config.tableConfig.limit || 10  //每页几条
    }, {
      counts: [],
      getData: params => {
        let paramData = angular.extend({
          [this.config.tableConfig.pageName]: params.url().page,
          limit: this.config.tableConfig.limit
        }, this.form);
        this.loading = true;
        return $http({
          url: this.config.url,
          method: "GET",
          params: paramData
        }).then(response => {
          params.total(response.data.data.totalCount); //帮你分几页
          this.loading = false;
          this.config.tableConfig.listName = this.config.tableConfig.listName || 'list';

          return response.data && response.data.data[this.config.tableConfig.listName];
        })
      }
    })
  }

  hasType (field) {
    return field.type;
  };

  refreshOptions (url, paramField, name, keyWord) {
    let param = {
      [paramField]: keyWord
    };
    this.$http({
      url: url,
      method: "GET",
      params: param
    }).then(data => {
      this[name + 'List'] = data && data.data && data.data.data;
      return data && data.data && data.data.data;
    });
  }

  search() {
    this.tableParams.parameters({page : 1}).reload();
  }
}

export default ListController;
