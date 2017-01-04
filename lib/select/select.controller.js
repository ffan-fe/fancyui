/**
 * @description select
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/select
 */

class SelectController {
  constructor($element, $document,$scope) {
    'ngInject';
    this.hover = false;
    this.active = false;
    this.$element = $element;
    this.$document = $document;
    this.$scope = $scope;
    this.dataArray = [];
  }

  $onInit(){
    /**
     * 含组的和不含组的，外部传进来相对的结构。里面处理
     */
    if(!this.isRemote){
      if(this.isGroup){
        this.dataArray = angular.copy(this.data);
      }
      else{
        
      }
    }
  }

  /**
   * 清除所有items的active状态
   */
  clearItemStatus(){
    if(this.isGroup){
      this.dataArray.map((item)=>{
        item.options.map((option)=>{
          option.active = false;
        })
        return item;
      })
    }
  }

  /**
   * @description 每一项option选中事件
   * @params
   *   option:{name:'',id:'',label:''}  
   */
  itemSelected(option){
    this.clearItemStatus();
    option.active = true;
    this.ngModel = option;
  }

  reset() {
    this.hover = false;
    this.active = false;
  }

  destroy() {
    this.$document.off('click', dismissClickHandler);
  }

  click() {
    if(this.disabled){
      return ;
    }

    let self = this;
    let destroy = () => {
      self.$document.off('click', dismissClickHandler);
    }

    /**
     * keep reference for unbinding 
     */
    let dismissClickHandler = (evt) => {

      let canReset = ()=>{
        return self.$element[0].querySelector('.f-input') !== evt.target.parentNode;
      } 

      if( canReset() ){
        self.reset();
        self.$scope.$digest();
        destroy();
      }
    }

    this.$document.on('click', dismissClickHandler);
    this.active = !this.active;
  }

}

export default SelectController;
