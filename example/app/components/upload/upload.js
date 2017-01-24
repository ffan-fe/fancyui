import Upload from '../../../../lib/upload/';
import Service from '../../../../lib/service/index.js';

import uploadComponent from './upload.component';
export default angular.module('upload', [
  Upload.name,
  Service.name
])
  .component('upload', uploadComponent);
