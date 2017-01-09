/**
 * (description)
 *
 * @author yourname
 */

// include pie chart
require('echarts/lib/chart/pie');
// include gauge chart
require('echarts/lib/chart/gauge');
// include line chart
require('echarts/lib/chart/line');

// include tooltip component
require('echarts/lib/component/tooltip');
// include title component
require('echarts/lib/component/title');
// include legend component
require('echarts/lib/component/legend');

export default class ChartController {
	constructor() {
		"ngInject";
		this.initPieChart();
		this.initGaugeChart();
		this.initLineChart();
	}

	initGaugeChart() {
		this.gaugeConfig = {
			theme: 'default',
			dataLoaded: true
		};

		this.gaugeOption = {
			series: [{
				name: "外层",
				z: 3,
				type: "gauge",
				startAngle: 180, //总的360，设置180就是半圆
				endAngle: 0,
				center: ["50%", "77%"], //整体的位置设置
				radius: 80,
				axisLine: {
					lineStyle: {
						width: 3, //柱子的宽度
						color: [[1, "#1fbba6"], [1, "#dbdbdb"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				pointer: {
					width: 0, //指针的宽度
					length: "80%", //指针长度，按照半圆半径的百分比
					color: "#2d99e2"
				},
				title: {
					show: false
				},
				detail: {
					show: false
				},
				data: [{ //显示数据
					value: 100,
					name: "100%"
				}]
			},
			{
				name: "内层",
				type: "gauge",
				startAngle: 180, //总的360，设置180就是半圆
				endAngle: 0,
				center: ["50%", "77%"], //整体的位置设置
				radius: 75,
				axisLine: {
					lineStyle: {
						width: 30, //柱子的宽度
						color: [[0.305, "#1fbba6"], [1, "#dbdbdb"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				},
				pointer: {
					width: 0, //指针的宽度
					length: "80%", //指针长度，按照半圆半径的百分比
					color: "#2d99e2"
				},
				title: {
					show: true,
					offsetCenter: [0, '-10px'], //标题位置设置
					textStyle: { //标题样式设置
						color: "#1fbba6",
						fontSize: 18,
						fontFamily: "Arial",
						fontWeight: "normal"
					}
				},
				detail: {
					show: false
				},
				data: [{ //显示数据
					value: 30.50,
					name: "30.50%"
				}]
			}]
		};
	}

	initPieChart() {
		let self = this;
		self.pieConfig = {
			theme: 'default',
			dataLoaded: true
		};

		self.pieOption = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '65%',
				top: '25%',
				data: ['正常', '断开', '等待'],
				formatter: function (name) {
					var oa = self.pieOption.series[0].data;
					for (var i = 0; i < self.pieOption.series[0].data.length; i++) {
						if (name == oa[i].name) {
							return name + ':' + oa[i].value + '个';
						}
					}
				}
			},
			color: ['#bdea75', '#fe5454', '#faba3c'],
			series: [{
				name: '比例分析',
				type: 'pie',
				radius: '55%',
				center: ['35%', '50%'],
				data: [{
					value: '2',
					name: '正常'
				}, {
					value: '2',
					name: '断开'
				}, {
					value: '2',
					name: '等待'
				}],
				itemStyle: {
					normal: {
						label: {
							show: false,
							formatter: '{b} : {c} ({d}%)'
						}
					},
					labelLine: {
						show: true
					}
				}
			}]
		};
	}

	initLineChart() {
		let self =  this;
		this.lineConfig = {
			theme: 'default',
			dataLoaded: true
		};

		this.lineOption = {
			title: {
				text: '内存使用情况',
				subtext: 'pod memory usage',
				textAlign: 'left',
				x: "0",
				textStyle: {
					color: '#666',
					fontSize: '14'
				},
				subtextStyle: {
					color: '#d6d6d6',
					fontSize: '12',
					display: 'inline'
				}
			},
			grid: {
				borderWidth: 0,
				borderColor: '#f2f2f2'
			},
			legend: {
				orient: 'horizontal',
				top: '0',
				right: '0',
				align: 'left',
				data: ['op-lodgings-sync', 'elasticsearch-logging']
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55', '14:00', '14:05', '14:10', '14:15', '14:20'],
				splitLine: {
					show: true,
					interval: 'auto'
				}
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} GiB'
				}
			},
			color: ['#64b1e4', '#fa9073'],
			series: [
				{
					name: 'op-lodgings-sync',
					type: 'line',
					smooth: false,
					data: [1.1, 4.5, 3.4, 1.7, 3.8, 2.1, 4.5, 4.7, 5.1, 3.8, 5.5, 6.2]
				},
				{
					name: 'elasticsearch-logging',
					type: 'line',
					smooth: false,
					data: [2.6, 3.7, 5.1, 8.2, 3.2, 6.1, 3.9, 4.5, 3.4, 1.7, 3.8, 2.1]
				}
			]
		};
	}
}