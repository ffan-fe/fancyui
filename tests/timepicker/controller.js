import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class TimepickerTextController {
  constructor($sce) {
    this.titles = ['我是左侧'];
    this.placeholders = ['输入个值吧大哥','请输入检索条件吧'];
    this.operations = ['左移','全部移动']
    //console.log('data.',this.dataSource);
  }

  searchValue($value){
    console.log('$value',$value);
  }
}
