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
      count: 10  //每页几条
    }, {
      counts: [],
      getData: params => {
        let paramData = angular.extend({
          p: params.url().page
        }, this.form);
        this.loading = true;
        return $http({
          url: this.config.url,
          method: "GET",
          params: paramData
        }).then(response => {
          params.total(response.data.data.totalCount); //帮你分几页
          this.loading = false;
          return response.data && response.data.data.list;
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
    console.log(param);
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
