export default class Base {
  constructor($state,$translate) {
    this.$state = $state;
    this.$translate =$translate;
  }
  globalRoute(routeName) {
    return `${routeName}({'lang':'${this.currentLang}'})`;
  }

  $onInit() {
    this.currentLang = this.$translate.use();
  }
} 