export default {

codeHtmlPart1: `<bp-datetimepicker model="vm.config.model"></bp-datetimepicker>`,
codeJSPart1: 
`this.config = {
  model: ""
};`,
codeHtmlPart2: 
`<bp-datetimepicker
  model="vm.newConfig.model"
  placeholders="vm.newConfig.placeholders"
  all-disabled="vm.newConfig.allDisabled"
></bp-datetimepicker>`,
codeJSPart2:
`this.newConfig = {
  model: "",
  placeholders: ['单个时间框'],
  allDisabled: true
};`,
codeHtmlPart3: 
`<div class="row">
  <div class="col-xs-6">
    <div class="form-group">
      <label>纵向时间框排列</label>
      <bp-datetimepicker
        type="vm.config.type"
        start-model="vm.config.startModel"
        end-model="vm.config.endModel"
      ></bp-datetimepicker>
    </div>
  </div>
</div>`,
codeJSPart3:
`this.config = {
  type: "range",
  startModel: "",
  endModel: ""
};`,
codeHtmlPart4:
`<form class="form-horizontal" novalidate>
  <div class="form-group">
    <label class="col-sm-2 control-label">横向时间框排列</label>
    <div class="col-sm-5">
      <bp-datetimepicker
        type="vm.config.type"
        start-model="vm.config.startModel"
        end-model="vm.config.endModel"
      ></bp-datetimepicker>
    </div>
  </div>
</form>`,
codeJSPart4:
`this.config = {
  type: "range",
  startModel: "",
  endModel: ""
};`,
codeHtmlPart5:
`<form class="form-horizontal" novalidate>
  <div class="form-group">
    <div class="col-sm-8">
      <bp-datetimepicker
        type="vm.config.type"
        start-model="vm.config.startModel"
        end-model="vm.config.endModel"
        min="vm.config.min"
        max="vm.config.max"
        placeholders="vm.config.placeholders"
      ></bp-datetimepicker>
    </div>
  </div>
</form>`,
codeJSPart5:
`this.config = {
  type: "range",
  startModel: "",
  endModel: "",
  min: "2016-7-23 14:29:39", // Date()、时间戳、moment()、"today"
  max: "today",              // Date()、时间戳、moment()、"today"
  placeholders: ['启动时间', '结束时间']
};`,
codeHtmlPart6:
`<form class="form-horizontal" novalidate>
  <div class="form-group">
    <div class="col-sm-8">
      <bp-datetimepicker
        type="vm.newConfig.type"
        start-model="vm.newConfig.startModel"
        end-model="vm.newConfig.endModel"
        all-disabled="vm.newConfig.allDisabled"
      ></bp-datetimepicker>
    </div>
  </div>
</form>`,
codeJSPart6:
`this.newConfig = {
  type: "range",
  startModel: moment().format('YYYY-MM-DD HH:mm:ss'),
  endModel: "",
  allDisabled: true
};`,
codeHtmlPart7:
`<form class="form-horizontal" novalidate>
  <div class="form-group">
    <div class="col-sm-8">
      <bp-datetimepicker
        type="vm.startDisabledConfig.type"
        start-model="vm.startDisabledConfig.startModel"
        end-model="vm.startDisabledConfig.endModel"
        start-disabled="vm.startDisabledConfig.startDisabled"
        placeholders="vm.startDisabledConfig.placeholders"
        start-view="vm.startDisabledConfig.startView"
        min-view="vm.startDisabledConfig.minView"
        model-type="vm.startDisabledConfig.modelType"
      ></bp-datetimepicker>
    </div>
  </div>
</form>`,
codeJSPart7:
`this.startDisabledConfig = {
  type: "range",
  startModel: moment().format('YYYY-MM-DD'),
  endModel: "",
  placeholders: ['', '禁用开始时间框'],
  startDisabled: true,
  startView: "month",
  minView: "day",
  modelType: "YYYY-MM-DD"
};`,
codeHtmlPart8:
`<form class="form-horizontal" novalidate>
  <div class="form-group">
    <div class="col-sm-8">
      <bp-datetimepicker
        type="vm.endDisabledConfig.type"
        start-model="vm.endDisabledConfig.startModel"
        end-model="vm.endDisabledConfig.endModel"
        end-disabled="vm.endDisabledConfig.endDisabled"
        placeholders="vm.endDisabledConfig.placeholders"
        start-view="vm.endDisabledConfig.startView"
        min-view="vm.endDisabledConfig.minView"
      ></bp-datetimepicker>
    </div>
  </div>
</form>`,
codeJSPart8:
`this.endDisabledConfig = {
  type: "range",
  startModel: "",
  endModel: moment().format('YYYY-MM-DD HH:mm:ss'),
  placeholders: ['禁用结束时间框'],
  endDisabled: true,
  startView: "month",
  minView: "hour",
};`,
}