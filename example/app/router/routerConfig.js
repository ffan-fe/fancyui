export default [
	{
		name: 'build',
		moduleName: {
			'en-us': 'Install',
			'zh-cn': '安装'
		},
		url: "/component/install",
		template: '<build></build>',
		lazyload: require("bundle-loader?lazy&name=build!../components/build/build.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'structure',
		moduleName: {
			'en-us': 'Directory',
			'zh-cn': '目录结构'
		},
		url: "/component/structure",
		template: '<structure></structure>',
		lazyload: require("bundle-loader?lazy&name=build!../components/structure/structure.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'button',
		moduleName: {
			'en-us': 'Button',
			'zh-cn': '按钮'
		},
		url: "/component/button",
		template: '<button-demo></button-demo>',
		lazyload: require("bundle-loader?lazy&name=button!../components/button/button.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'tableDemo',
		moduleName: {
			'en-us': 'Table',
			'zh-cn': '表格'
		},
		url: "/component/table",
		template: '<table-demo></table-demo>',
		lazyload: require("bundle-loader?lazy&name=table!../components/table/table.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'steps',
		moduleName: {
			'en-us': 'Steps',
			'zh-cn': '步骤条'
		},
		url: "/component/steps",
		template: '<steps></steps>',
		lazyload: require("bundle-loader?lazy&name=steps!../components/steps/steps.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'tabs',
		url: "/component/tabs",
		moduleName: {
			'en-us': 'Tabs',
			'zh-cn': '标签页'
		},
		template: '<tabs></tabs>',
		lazyload: require("bundle-loader?lazy&name=tabs!../components/tabs/tabs.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'tabsTwo',
		url: "/component/tabstwo",
		template: '<tabs-two></tabs-two>',
		lazyload: require("bundle-loader?lazy&name=tabstwo!../components/tabstwo/tabstwo.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'formDemo',
		moduleName: {
			'en-us': 'Form',
			'zh-cn': '表单'
		},
		url: "/component/form",
		template: '<form-demo></form-demo>',
		lazyload: require("bundle-loader?lazy&name=form!../components/form/form.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'labels',
		moduleName: {
			'en-us': 'Labels',
			'zh-cn': 'xxxx'
		},
		url: "/component/labels",
		template: '<labels></labels>',
		lazyload: require("bundle-loader?lazy&name=labels!../components/labels/labels.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'panel',
		moduleName: {
			'en-us': 'Card',
			'zh-cn': '卡片'
		},
		url: "/component/panel",
		template: '<panel></panel>',
		lazyload: require("bundle-loader?lazy&name=panel!../components/panel/panel.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'icons',
		moduleName: {
			'en-us': 'Icons',
			'zh-cn': '图标'
		},
		url: "/component/icons",
		template: '<icons></icons>',
		lazyload: require("bundle-loader?lazy&name=icons!../components/icons/icons.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'grid',
		moduleName: {
			'en-us': 'Grid',
			'zh-cn': '栅格'
		},
		url: "/component/grid",
		template: '<grid></grid>',
		lazyload: require("bundle-loader?lazy&name=grid!../components/grid/grid.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'contextColors',
		moduleName: {
			'en-us': 'xx',
			'zh-cn': 'xxx'
		},
		url: "/component/contextolors",
		template: '<context-colors></context-colors>',
		lazyload: require("bundle-loader?lazy&name=contextcolors!../components/contextcolors/contextcolors.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'sliderInput',
		moduleName: {
			'en-us': 'Slider Input',
			'zh-cn': '滑动输入条'
		},
		url: "/component/sliderinput",
		template: '<slider-input></slider-input>',
		lazyload: require("bundle-loader?lazy&name=sliderinput!../components/sliderinput/sliderinput.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'generateComponent',
		moduleName: {
			'en-us': 'Quick Start',
			'zh-cn': '快速上手'
		},
		url: "/component/start",
		template: '<generate-component></generate-component>',
		lazyload: require("bundle-loader?lazy&name=generatecomponent!../components/generatecomponent/generatecomponent.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'lineChart',
		url: "/component/linechart",
		moduleName: {
			'en-us': 'Line',
			'zh-cn': '曲线图'
		},
		template: '<line-chart></line-chart>',
		lazyload: require("bundle-loader?lazy&name=chart!../components/linechart/linechart.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'pieChart',
		moduleName: {
			'en-us': 'Pie',
			'zh-cn': '饼图'
		},
		url: "/component/piechart",
		template: '<pie-chart></pie-chart>',
		lazyload: require("bundle-loader?lazy&name=chart!../components/piechart/piechart.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'gaugeChart',
		moduleName: {
			'en-us': 'Gauge',
			'zh-cn': '仪表盘'
		},
		url: "/component/gaugechart",
		template: '<gauge-chart></gauge-chart>',
		lazyload: require("bundle-loader?lazy&name=chart!../components/gaugechart/gaugechart.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'popup',
		moduleName: {
			'en-us': 'Popup',
			'zh-cn': 'xxxx'
		},
		url: "/component/popup",
		template: '<popup></popup>',
		lazyload: require("bundle-loader?lazy&name=popup!../components/popup/popup.js"),
		tracking: {
			key: 'ROUTENAME'
		}
	},
	{
		name: 'popConfirm',
		moduleName: {
			'en-us': 'PopConfirm',
			'zh-cn': '气泡确认框'
		},
		url: "/component/popconfirm",
		template: '<pop-confirm></pop-confirm>',
		lazyload: require("bundle-loader?lazy&name=popConfirm!../components/popconfirm/popconfirm.js"),
		tracking: {
			key: 'popConfirm'
		}
	},
	{
		name: 'changeLog',
		moduleName: {
			'en-us': 'Change Log',
			'zh-cn': '更新日志'
		},
		url: "/component/changelog",
		template: '<change-log></change-log>',
		lazyload: require("bundle-loader?lazy&name=changeLog!../components/changelog/changelog.js"),
		tracking: {
			key: 'changeLog'
		}
	},
	{
		name: 'hint',
		moduleName: {
			'en-us': 'Hint',
			'zh-cn': '短消息通知'
		},
		url: "/component/hint",
		template: '<hint></hint>',
		lazyload: require("bundle-loader?lazy&name=hint!../components/hint/hint.js"),
		tracking: {
			key: 'hint'
		}
	},
	{
		name: 'transfer',
		moduleName: {
			'en-us': 'Transfer',
			'zh-cn': '穿梭框'
		},
		url: "/component/transfer",
		template: '<transfer></transfer>',
		lazyload: require("bundle-loader?lazy&name=transfer!../components/transfer/transfer.js"),
		tracking: {
			key: 'transfer'
		}
	},
	{
		name: 'alert',
		moduleName: {
			'en-us': 'Alert',
			'zh-cn': '提示框'
		},
		url: "/component/alert",
		template: '<alert></alert>',
		lazyload: require("bundle-loader?lazy&name=alert!../components/alert/alert.js"),
		tracking: {
			key: 'alert'
		}
	},
	{
		name: 'checkboxtree',
		moduleName: {
			'en-us': 'Tree',
			'zh-cn': '树'
		},
		url: "/component/checkboxtree",
		template: '<democheckboxtree></componentcheckboxtree>',
		lazyload: require("bundle-loader?lazy&name=checkboxtree!../components/checkboxtree/checkboxtree.js"),
		tracking: {
			key: 'checkboxtree'
		}
	},
	{
		name: 'list',
		moduleName: {
			'en-us': 'List',
			'zh-cn': '列表'
		},
		url: "/component/list",
		template: '<list></list>',
		lazyload: require("bundle-loader?lazy&name=list!../components/list/list.js"),
		tracking: {
			key: 'list'
		}
	},
	{
		name: 'calendar',
		moduleName: {
			'en-us': 'Calendar',
			'zh-cn': '日历'
		},
		url: "/component/calendar",
		template: '<calendar></calendar>',
		lazyload: require("bundle-loader?lazy&name=calendar!../components/calendar/calendar.js"),
		tracking: {
			key: 'calendar'
		}
	},
	{
		name: 'switchDemo',
		moduleName: {
			'en-us': 'Switch',
			'zh-cn': '开关'
		},
		url: "/component/switch",
		template: '<switch-demo></switch-demo>',
		lazyload: require("bundle-loader?lazy&name=switchDemo!../components/switchdemo/switchdemo.js"),
		tracking: {
			key: 'switchdemo'
		}
	},
	{
		name: 'radio',
		moduleName: {
			'en-us': 'Radio',
			'zh-cn': '多选'
		},
		url: "/component/radio",
		template: '<radio></radio>',
		lazyload: require("bundle-loader?lazy&name=radio!../components/radio/radio.js"),
		tracking: {
			key: 'radio'
		}
	},
	{
		name: 'progressDemo',
		moduleName: {
			'en-us': 'Process Bar',
			'zh-cn': '进度条'
		},
		url: "/component/progress",
		template: '<progress-demo></progress-demo>',
		lazyload: require("bundle-loader?lazy&name=progressDemo!../components/progressdemo/progressdemo.js"),
		tracking: {
			key: 'progress'
		}
	},
	{
		name: 'inputNumberDemo',
		moduleName: {
			'en-us': 'Input Number',
			'zh-cn': '数字输入框'
		},
		url: "/component/inputnumber",
		template: '<input-number-demo></input-number-demo>',
		lazyload: require("bundle-loader?lazy&name=inputNumberDemo!../components/inputnumberdemo/inputnumberdemo.js"),
		tracking: {
			key: 'inputNumber'
		}
	},
	{
		name: 'badgeDemo',
		moduleName: {
			'en-us': 'Badge',
			'zh-cn': '徽标'
		},
		url: "/component/badge",
		template: '<badge-demo></badge-demo>',
		lazyload: require("bundle-loader?lazy&name=badgeDemo!../components/badgedemo/badgedemo.js"),
		tracking: {
			key: 'badgeDemo'
		}
	},
	{
		name: 'rateDemo',
		moduleName: {
			'en-us': 'Rate',
			'zh-cn': '评分'
		},
		url: "/component/rate",
		template: '<rate-demo></rate-demo>',
		lazyload: require("bundle-loader?lazy&name=rateDemo!../components/ratedemo/ratedemo.js"),
		tracking: {
			key: 'rateDemo'
		}
	},
	{
		name: 'customTable',
		moduleName: {
			'en-us': 'CustomTable',
			'zh-cn': '自定义表格'
		},
		url: "/component/customtable",
		template: '<custom-table></custom-table>',
		lazyload: require("bundle-loader?lazy&name=customTable!../components/customtable/customtable.js"),
		tracking: {
			key: 'customTable'
		}
	},
	{
		name: 'home',
		url: "/component/home",
		template: '<home></home>',
		lazyload: require("bundle-loader?lazy&name=home!../components/home/home.js"),
		tracking: {
			key: 'home'
		},
		hideMenu: true,
		hideHeader: true
	},
	{
		name: 'nav',
    moduleName: {
      'en-us': 'nav',
      'zh-cn': '导航'
    },
		url: "/component/nav",
		template: '<menu></menu>',
		lazyload: require("bundle-loader?lazy&name=menu!../components/nav/menu.js"),
		tracking: {
			key: 'nav'
		}
	},
	{
		name: 'upload',
    moduleName: {
      'en-us': 'upload',
      'zh-cn': '上传'
    },
		url: "/component/upload",
		template: '<upload></upload>',
		lazyload: require("bundle-loader?lazy&name=upload!../components/upload/upload.js"),
		tracking: {
			key: 'upload'
		}
	},
	{
		name: 'select',
    moduleName: {
      'en-us': 'Select',
      'zh-cn': '选择器'
    },
		url: "/component/select",
		template: '<selectdemo></selectdemo>',
		lazyload: require("bundle?lazy&name=select!../components/select/select.js"),
		tracking: {
			key: 'select'
		}
	},
	{
		name: 'loading',
    moduleName: {
      'en-us': 'Loading',
      'zh-cn': '加载'
    },
		url: "/component/loading",
		template: '<loading></loading>',
		lazyload: require("bundle?lazy&name=loading!../components/loading/loading.js"),
		tracking: {
			key: 'loading'
		}
	},
  {
    name: 'introduction',
    moduleName: {
      'en-us': 'Introduction',
      'zh-cn': '简介'
    },
    url: "/component/introduction",
    template: '<introduction></introduction>',
    lazyload: require("bundle?lazy&name=introduction!../components/introduction/introduction.js"),
    tracking: {
      key: 'introduction'
    }
  },
  {
    name: 'message',
    moduleName: {
      'en-us': 'Message',
      'zh-cn': '全局提示'
    },
    url: "/component/message",
    template: '<message></message>',
    lazyload: require("bundle?lazy&name=message!../components/message/message.js"),
    tracking: {
      key: 'message'
    }
  },
  {
    name: 'menu',
    moduleName: {
      'en-us': 'menu',
      'zh-cn': '菜单'
    },
    url: "/component/menu",
    template: '<navmenu></navmenu>',
    lazyload: require("bundle?lazy&name=menu!../components/menu/navmenu.js"),
    tracking: {
      key: 'menu'
    }
  }
]
