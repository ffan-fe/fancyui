import Prism from 'prismjs';

import DefaultConfig from './config.js'

class AddController {
  constructor($scope, $state, NgTableParams, Restangular, bpApi, $sce) {
    'ngInject'
    this.datepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x'
    };
    this.$scope = $scope;
    this.$state = $state;
    this.Restangular = Restangular;
    this.NgTableParams = NgTableParams;
    this.DefaultConfig = DefaultConfig;
    this.btns = [
      {
        name: '保存下一步'
      }
    ];
    //约定：form是持久化到服务器的数据
    this.form = {};

    //如果有FormConfig传进来，则使用，否则使用默认的
    this.formConfig = DefaultConfig.formConfig;

    this.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1,
      'show-weeks': false
    };
    //上传图片
    this.uploadFile = function(file, errFile){

      $scope.file = file;
      $scope.errFile = errFile;
      if (!!file) {
        file.upload = Upload.upload({
          url: '/pointgift/gift/uploadFile',
          data: {image: file}
        });
        file.upload.then(function(response){
          console.log('response',response);
          var responseData = response.data && response.data.data;
          //console.log('responseData',responseData);
          $scope.vm.addInfo.pic = responseData.imgname;
          $scope.vm.preview = responseData.imgurl;
        }, function(response){
          console && console.log('img Error');
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        })
      }
    };

    const exampleCode = `
  <form-tpl form-config="vm.formConfig" model="vm.form"></form-tpl>

  form-config传入生成表单的配置，model指定表单的ng-model都绑到哪个键下

   vm.formConfig = {

     //生成表单的信息，包含验证及对应错误提示的设置
     fields: [
      {
        type: 'text',
        displayName: '活动名称',
        name: 'testText',
        validateRules: {
          required: true,
          minlength: 0,
          maxlength: 50
        }
      },
      {
        type: 'text',
        displayName: '活动标签',
        name: 'tag',
        validateRules: {
          required: false,
          minlength: 0,
          maxlength: 50
        }
      },
      {
        type: 'radio',
        displayName: '营销工具',
        name: 'testRadio',
        validateRules: {
          required: false
        },
        options: [
          {
            text: '闪购',
            value: 'option1'
          },
          {
            text: '领券',
            value: 'option2'
          }
        ]
      },
      {
        type: 'richtext',
        displayName: '活动说明',
        name: 'testrichtext',
        validateRules: {
          required: true,
          minlength: 1,
          maxlenght: 1000
        }
      },
      {
        type: 'richtext',
        displayName: '活动规则',
        name: 'activityrule',
        validateRules: {
          required: true,
          minlength: 1,
          maxlenght: 1000
        }
      },
      {
        type: 'richtext',
        displayName: '活动说明',
        name: 'testrichtext',
        validateRules: {
          required: true,
          minlength: 1,
          maxlenght: 10
        }
      },
      {
        type: 'checkbox',
        displayName: '是否公开招募',
        name: 'testcheckbox',
        validateRules: {
          required: false
        }
      },
      {
        type: 'image',
        displayName: '测试image',
        name: 'image',
        validateRules: {
          required: false
        }
      },
      {
        type: 'text',
        displayName: '自定义text',
        name: 'testText',
        isAsFilter: true,
        isInTable: true,
        validateRules: {
          required: true,
          minlength: 2,
          maxlength: 10
        }
      },
      {
        type: 'radio',
        displayName: '自定义checkbox',
        name: 'checkbox',
        validateRules: {

        }
      },
      {
        type: 'textarea',
        displayName: '测试textarea',
        name: 'testTextArea',
        validateRules: {
          required: true,
          minlength: 2,
          maxlength: 10
        },
        errorMsgs: {
          minlength: '最小长度为2',
          maxlength: '最大长度为10'
        }
      },
      {
        type: 'number',
        displayName: '测试number1',
        name: 'testNumber1',
        isAsFilter: true,
        isInTable: true,
        validateRules: {
          required: true,
          min: 1,
          max: 10
        },
        errorMsgs: {
          min: '最小值不能低于1',
          max: '最大值不能超过10'
        }
      },
      {
        type: 'number',
        displayName: '测试number2',
        name: 'testNumber2',
        isAsFilter: true,
        isInTable: true,
        validateRules: {
          required: true,
          min: 1,
          max: 10,
          largeThan: {
            type: 'number',
            which: 'testNumber1',
          }
        },
        errorMsgs: {
          min: '最小值不能低于1',
          max: '最大值不能超过10',
          large: 'number2要大于number1'
        },
        selector: '#error'
      },
      {
        type: 'select',
        displayName: '测试select',
        name: 'testSelect',
        validateRules: {
          required: true
        },
        options: [
          {
            text: '测试select option',
            value: 'option'
          }
        ]
      },
      {
        type: 'uiselect',
        displayName: '测试uiselect',
        name: 'testUiSelect',
        validateRules: {
          //required: true
        },
        url: 'get/uiselect'
      },
      {
        type: 'Typeahead',
        displayName: '测试Typeahead',
        name: 'testTypeahead',
        validateRules: {
          required: true
        },
        url: 'get/Typeahead/'
      }
    ]
   }
    `;
    this.exampleHtml = $sce.trustAsHtml(Prism.highlight(exampleCode, Prism.languages.html));
  }

  hasType(field) {
    return field.type;
  }

  refreshOptions(url, keyWord) {
    this.bpApi.get(url, {keyWord: keyWord}).then(function (data) {
      return data;
    });
  }

  submitForm(url) {
    this.Restangular.all('projects').post(this.form).then(function(project) {
      $location.path('/list');
    });
  }

  inArray(item, array, isInt) {
    if (isInt) {
      return array.indexOf(parseInt(item)) != -1;
    } else {
      return array.indexOf(item) != -1;
    }
  }



  reset() {
    if (this.ProjectConfig.reset) {
      this.ProjectConfig.reset(this);
    } else {
      this.DefaultConfig.reset(this);
    }
  }

  search() {
    if (this.ProjectConfig.search) {
      this.ProjectConfig.search(this);
    } else {
      this.DefaultConfig.search(this);
    }
  }
}

export default AddController;
