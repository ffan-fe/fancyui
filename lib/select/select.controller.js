/**
 * @description select
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/select
 */

class SelectController {
  constructor($element, $document, $scope, $parse, $attrs) {
    'ngInject';
    this.hover = false;
    this.active = false;
    this.isReverse = false;
    this.$element = $element;
    this.$document = $document;
    this.$scope = $scope;
    this.$parse = $parse;
    this.dataArray = [];
    this.debounce = this.remoteDebounce ? this.remoteDebounce : 0;
    this.clickHandlers = [];

    $scope.$on('destory',this.destory);
   
  }


  mouseEnter() {
    if (this.clearable && this.hasSelected()) {
      this.hover = true;
    }
  }

  mouseLeave() {
    if (this.clearable) {
      this.hover = false;
    }
  }

  onInputChange() {
    if (!this.isRemote) {
      return;
    }
    this.remoteMethod({
      '$value': typeof (this.inputValue) === 'undefined' ? '' : this.inputValue
    }).then((data) => {
      this.dataArray = this.buildArray(data);
    })
  }

  buildArray(data) {
    if (this.isGroup) {
      return angular.copy(data);
    }
    else {
      if (data && data.length > 0) {
        return [{
          options: data
        }];
      }
    }
    return [];
  }

  $onInit() {
    if (!this.ngModel) {
      throw 'ngModel must not undefined'
    }
    /**
     * 含组的和不含组的，外部传进来相对的结构。里面处理
     */
    if (!this.isRemote) {
      this.dataArray = this.buildArray(this.data);
    }

    this.inputValue = this.ngModel ? this.ngModel.name : '';
    if(this.isMultiple){
      console.log(this.$element[0].querySelector('.f-input').clientWidth)
    }
  }

  /**
   * 清除所有items的active状态
   */
  clearItemStatus() {
    this.dataArray.map((item) => {
      item.options.map((option) => {
        option.active = false;
      })
      return item;
    })
  }

  /**
   * @description 每一项option选中事件
   * @params
   *   option:{name:'',id:'',label:''}  
   */
  itemSelected(option,e) {
    if (option) {
      option.active = !option.active;
      this.ngModel = option;
    }
    else {
      this.ngModel = {};
    }
    
    if(this.isMultiple){
      this.$element[0].querySelector('.f-input input').placeholder = '';
      console.log(e)
      return ;
    }
        
    this.clearItemStatus();
    this.inputValue = option ? option.name :"";    
    /**
      * 父作用域回调
      */
    this.onItemSelected && this.onItemSelected({
      '$item': option ? option : {}
    });
  }

  reset() {
    this.hover = false;
    this.active = false;
  }

  clearSelected() {
    return this.itemSelected(null);
  }

  hasSelected() {
    return this.ngModel && this.ngModel.name;
  }

  bindDocumentClick(dismissClickHandler) {
    this.clickHandlers.push(dismissClickHandler);
    this.$document.on('click', dismissClickHandler);
  }

  destory() {
    if (!this.clickHandlers || this.clickHandlers.length == 0) {
      return;
    }

    let handler = this.clickHandlers.shift();
    let counter = 0;
    while (handler) {
      counter ++ ;
      if(counter>10){
        throw ("May be some stupid code works wrong... please check select component in fancyui")
      } 
      this.$document.off('click', handler);
      handler = this.clickHandlers.shift();
    }
  }

  click(e) {
    if (this.clearable
      && this.hasSelected()
      && e.target.tagName === 'I') {
      this.active = false;
      this.clearSelected(null);
      this.hover = false;
      return;
    }
    else if (this.disabled) {
      return;
    }

    let self = this;

    /**
     * keep reference for unbinding 
     */
    let dismissClickHandler = (evt) => {
      console.log(JSON.stringify(evt))
      let isGroupTitle = () => {
        return angular.element(evt.target).hasClass('f-select-group_title');
      }

      let isInput = () => {
        return self.$element[0].querySelector('.f-input') == evt.target.parentNode;
      }
      /**
       * mutilple 时，点击一个menu 不关闭
       */
      let isMultipleItemSelected = () => {
        if (!self.isMultiple) {
          return false;
        }
        //return true;
        return angular.element(evt.target.parentNode).hasClass('f-select-dropdown_item')
          || angular.element(evt.target).hasClass('f-select-dropdown_item')
          || angular.element(evt.target).hasClass('f-select-group');
      }

      /**
       * 关闭dropdown 并且清除事件
       */
      let canClosed = () => {
        /**
         * 点击grouptitle，不关闭
         * 在未点击input框，不关闭
         * 在多选的时候点击item，不关闭
         */
        return !isGroupTitle() && (!isInput()) && (!isMultipleItemSelected());
      }

      if (canClosed()) {
        self.reset();
        self.$scope.$digest();
        self.destory();
      }
    }


    if (!this.active) {
      this.bindDocumentClick(dismissClickHandler);
      /**
       * 默认点击，触发change
       */
      this.onInputChange();
    }
    else {
      this.destory();
    }

    this.active = !this.active;
    /**
     * 是否需要翻转icon
     */
    this.isReverse = this.active;
  }

}

export default SelectController;
