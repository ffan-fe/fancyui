import angular from 'angular';

import Button from './src/components/button/';
import Icon from './src/components/icon/';
import Checkbox from './src/components/checkbox';
import Datepicker from './src/components/datepicker'

'use strict';

export default angular.module('Components', [
  Button,
  Icon,
  Checkbox,
  Datepicker
]);

