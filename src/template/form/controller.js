class FormController {
  constructor(bpAjaxService) {
    'ngInject'
    this.bpApi = bpAjaxService;
  }

  refreshOptions(url, keyWord) {
    this.bpApi.get(url, {keyWord: keyWord}).then(function (data) {
      return data;
    });
  }
}

export default FormController;
