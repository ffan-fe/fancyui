import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data'

export default class TransferTextController {
  constructor($sce) {
    this.dataSource = data.dataSource;
    this.titles = ['我是左侧'];
    this.placeholders = ['输入个值吧大哥','请输入检索条件吧'];
    this.operations = ['左移','全部移动']
    //console.log('data.',this.dataSource);
  }

  searchValue($value){
    console.log('$value',$value);
  }
}
