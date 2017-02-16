import Upload from '../../../../lib/Upload/';
import Service from '../../../../lib/Service/index.js';

import uploadComponent from './upload.component';
export default angular.module('upload', [
  Upload.name,
  Service.name
])
  .component('upload', uploadComponent);
