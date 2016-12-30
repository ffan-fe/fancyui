/**
 * (description)
 *
 * @author yourname
 */

export default class PiechartController {
	constructor($state) {
		"ngInject";
		this.$state = $state;
		this.initPieChart();
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
}