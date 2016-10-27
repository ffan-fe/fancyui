import _ from 'lodash'
class GeneratorController {
  constructor($state) {
    'ngInject'
    this.$state = $state;

    //可用于关联验证的类型
    this.associatedValidateType = ['number', 'date'];

    //各类型支持的关联验证
    this.validationSupported = {
      number: ['largeThan'],
      date: ['largeThan']
    };

    //用于保存页面当前生成的一个filed
    this.tempField = {};
    //保存checkbox的选中状况
    this.checkboxs = {};

    //需要保存的数据结构
    this.fields = [];

    this.configToDisplay = {
      fields: this.fields
    };

    this.fieldSetAssociatedValidate = {};

  }

  //form field
  save(isGoToNew) {
    this.fields.push(this.tempField);
    this.tempField = {};
    this.checkboxs = {};
    isGoToNew ? this.$state.go('generator.step1') : this.$state.go('generator.list')
  }

  inArray(item, array, isInt) {
    if (isInt) {
      return array.indexOf(parseInt(item)) != -1;
    } else {
      return array.indexOf(item) != -1;
    }
  }

  isAvailableField() {
    console.log('this.fieldSetAssociatedValidateTemp', this.fieldSetAssociatedValidateTemp);
    if (!this.fieldSetAssociatedValidateTemp) {
      return false
    }
    return this.inArray(JSON.parse(this.fieldSetAssociatedValidateTemp).type, this.associatedValidateType);
  }

  getValidationSupported() {
    if(!this.fieldSetAssociatedValidate){
      return [];
    }
    return this.validationSupported[JSON.parse(this.fieldSetAssociatedValidateTemp).type]
  }


  getAvailableField() {
    if(!this.fieldSetAssociatedValidateTemp){
      return [];
    }

    let id = this.fieldSetAssociatedValidate.type + this.fieldSetAssociatedValidate.index + this.fields.length;

    if(this.getAvailableField.__id
      && this.getAvailableField.__id == id
      && this.getAvailableField.__last){
      return this.getAvailableField.__last;
    }

    let fieldsCopy = angular.copy(this.fields);
    fieldsCopy.splice(this.fieldSetAssociatedValidate.index, 1);

    let filteredFields = _.filter(fieldsCopy, field => {
      return field.type == this.fieldSetAssociatedValidate.type;
    });

    this.getAvailableField.__id = id;
    this.getAvailableField.__last = filteredFields;

    return filteredFields;
  }

  toJson(string) {
    this.fieldSetAssociatedValidate = JSON.parse(string);
    this.fieldSetAssociatedValidate.category = 'largeThan';
    this.fieldSetAssociatedValidate.which = this.getAvailableField()[0]
  }

  addValidateRule() {
    let validation = this.fieldSetAssociatedValidate;
    console.log('this.fields', this.fields);
    console.log('validation', validation);
    if (!this.fields[validation.index].validateRules) {
      this.fields[validation.index].validateRules = {}
    }
    if (!this.fields[validation.index].errorMsgs) {
      this.fields[validation.index].errorMsgs = {}
    }
    this.fields[validation.index].validateRules[validation.category] = {
      type: validation.type,
      which: validation.which
    };
    if (validation.error) {
      this.fields[validation.index].errorMsgs[validation.category + 'Than'] = validation.error;
    }
  }
}

export default GeneratorController;
