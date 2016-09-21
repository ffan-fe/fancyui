export default {

  /**
   * 默认
   */
  html1: `
        <bp-datetimepicker model="vm.model"></bp-datetimepicker>
       `,

  js1: `
        this.model = '2015-02-03 12:02:00';
      `,


  /**
   * 范围时间窗
   */
  html2: `
        <bp-datetimepicker
          type="range"
          start-model="vm.startModel"
          end-model="vm.endModel">
        </bp-datetimepicker>
        `,

  js2: `
        this.startModel = '';
        this.endModel = '';
      `,

  /**
   * 只能选择月
   */
  html3: ` 
        <bp-datetimepicker
            type="range"
            model-type="YYYY-MM"
            start-model="vm.startModel"
            end-model="vm.endModel"
            min-view="month"
            start-view="month">
        </bp-datetimepicker>
        `,

  js3: `
        this.startModel = '';
        this.endModel = '';
      `,

  /**
   * 有时间范围限制
   */
  html4: `
          <bp-datetimepicker 
            type="range"
            start-model="vm.startModel"
            end-model="vm.endModel"
            min="2016-09-09 09:09:00"
            max="2016-09-21 09:09:00"
          ></bp-datetimepicker>
        `,
  js4: `
        this.startModel = '';
        this.endModel = '';
      `,

  /**
   * 自定义一些配置
   * startModel 指定值  / 前者时间不可点击    后者分钟为每10分钟一个间隔
   */
  html5: `
          <bp-datetimepicker 
            type="range"
            start-model="vm.startModel"
            end-model="vm.endModel"
            start-disabled="false"
            minute-step="10"
            separator="至"
          ></bp-datetimepicker>
        `,
  js5: `
        this.startModel = '2013-08-08 12:20:00';
        this.endModel = '';
      `
}


