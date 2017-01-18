import Upload from '../../../../lib/upload/';

import uploadComponent from './upload.component';
export default angular.module('upload', [
  Upload.name,
])
.component('upload', uploadComponent);
