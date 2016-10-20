import Prism from 'prismjs';

export default class HintController {
  constructor($scope, HintService, $sce) {
    'ngInject'
    $scope.hintContent = "测试操作结果a";

    $scope.myHint = function () {
      HintService.hint({title: "我操作成功了", content: "结果是：" + $scope.hintContent})
    };

    const exampleCode = `
    HintService.hint({title: "我操作成功了", content: "结果是：" + $scope.hintContent})
    `;
    this.exampleHtml = $sce.trustAsHtml(Prism.highlight(exampleCode, Prism.languages.html));
  }
}

