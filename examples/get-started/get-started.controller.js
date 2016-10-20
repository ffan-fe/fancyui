import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class GetStartedController {
  constructor($sce) {
    'ngInject';
    this.$sce = $sce;
  }

  $onInit(){
    /**
     * npm 安装
     */
    this.part1Html = this.$sce.trustAsHtml(Prism.highlight( 'npm install fancyui --save', Prism.languages.javascript));

    /**
     * 引用
     */
    let usermodule =`
    import fancyui from 'fancyui';
      angular.module('app', [
        fancyui.name
      ])
      .component('app', AppComponent);
    `;
    this.part5Html = this.$sce.trustAsHtml(Prism.highlight( usermodule, Prism.languages.javascript));

    /**
     * 部分引用
     */
    let use2module =`
    import {Button,CheckBox} from 'fancyui';
      angular.module('app', [
        Button.name,
        CheckBox.name
      ])
      .component('app', AppComponent);
    `;
    this.part6Html = this.$sce.trustAsHtml(Prism.highlight( use2module, Prism.languages.javascript));
    /**
     * npm error
     */
    let npmError = `
      npm ERR! Darwin 15.6.0
      npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "Anaheim" "--save"
      npm ERR! node v5.10.1
      npm ERR! npm  v3.8.3
      npm ERR! code E404
      
      npm ERR! 404 Registry returned 404 for GET on https://registry.npmjs.org/Anaheim
      npm ERR! 404 
      npm ERR! 404  'Anaheim' is not in the npm registry.
      npm ERR! 404 Your package name is not valid, because 
      npm ERR! 404  1. name can no longer contain capital letters
      npm ERR! 404 
      npm ERR! 404 Note that you can also install from a
      npm ERR! 404 tarball, folder, http url, or git url.
      
      npm ERR! Please include the following file with any support request:
      npm ERR!     /Users/chuxin/workspace/wanda/ffan-fe.github.io.source/npm-debug.log
      `;
    this.part2Html = this.$sce.trustAsHtml(Prism.highlight( npmError, Prism.languages.javascript));

    /**
     * 切换源
     */
    let changeNpm = `npm config set registry="http://10.213.42.227:11222/"`;
    this.part3Html = this.$sce.trustAsHtml(Prism.highlight( changeNpm, Prism.languages.javascript));
    /**
     * 验证是否切换
     */
    let checkedChange = `npm config get registry`;
    this.part4Html = this.$sce.trustAsHtml(Prism.highlight( checkedChange, Prism.languages.html));
    
  }

}