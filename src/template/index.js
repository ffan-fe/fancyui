import formTpl from './form/index.js';
import listTpl from './list/index.js'

let templateModule = angular.module('template', [
  formTpl.name,
  listTpl.name
]);

export default templateModule;
