export default class Base {
  
  constructor($state,$translate){
    this.$state = $state;
    if(this.$state.params.lang){
      $translate.use(this.$state.params.lang.toLowerCase());
    }  
  }

}