class FormController {
  constructor(bpApi) {
    'ngInject'
    this.bpApi = bpApi;
  }

  refreshOptions(url, keyWord) {
    this.bpApi.get(url, {keyWord: keyWord}).then(function (data) {
      return data;
    });
  }
}

export default FormController;
