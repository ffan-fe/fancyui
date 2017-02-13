#标签页 form

## Intro

FancyUI form component

## Usage

```
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
    
```

```
<form-tpl form-config="vm.formConfig" model="vm.form"></form-tpl>
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/form

http://www.fancyui.org/Anaheim/#/form
