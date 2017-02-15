import angular from 'angular';
import mocks from 'angular-mocks';

let context = require.context('./lib', true, /\.spec\.js/);

context.keys().forEach(context);
console.log(context.keys().forEach(function(a){
  console.log(a)
}))