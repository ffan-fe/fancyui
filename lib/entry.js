/**
 * 给fancyui 包用，目录结构和index.js不一样，因为压缩体积，build到lib之后，components目录移除
 */
import ffanButton from './button/';
import ffanIcon from './icon/';
import ffanCheckbox from './checkbox';
import ffanCheckboxGroup from './checkboxGroup'
import ffanRadiobox from './radiobox';
import ffanRadioboxGroup from './radioboxGroup';
import ffanCitySelector from './citySelector';
import ffanTransfer from './transfer';
import ffanDatetimepicker from './datetimepicker';
import bpServices from './service/index.js';
import checkboxtree from './checkboxtree';
import multiselect from './multiselect';
import bpDirective from './directive';
import template from './template';
import fixURL from './tool/fixurl';
import ffanPopConfirm from './popconfirm';

'use strict';

export {
  ffanButton as Button,
  ffanCheckbox as Checkbox,
  ffanCheckboxGroup as CheckboxGroup,
  ffanRadiobox as Radiobox,
  ffanRadioboxGroup as RadioboxGroup,
  ffanCitySelector as CitySelector,
  ffanTransfer as Transfer,
  ffanDatetimepicker as Datetimepicker,
  ffanPopConfirm as PopConfirm,
  bpServices as Service ,
  checkboxtree,
  multiselect,
  bpDirective,
  template as Template,
  fixURL
}



