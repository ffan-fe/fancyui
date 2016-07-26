import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data'

export default class TransferTextController {
  constructor($sce) {
    this.dataSource = data.dataSource;
    //console.log('data.',this.dataSource);
  }

  searchValue($value){
    console.log('$value',$value);
  }
}
