export default class HintController {
  constructor(HintService,$state) {
    'ngInject';
    this.$state = $state;
    this.HintService = HintService;
  }

  myHint() {
    this.HintService.hint({
      title: "我操作成功了",
      content: "结果是：" + (this.hintContent ? this.hintContent:'请输入要提示的内容')
    });
  }
}