/**
 * (description)
 *
 * @author yourname
 */
export default class LinechartController {
	constructor($state) {
		"ngInject";
		this.$state = $state;
		this.initLineChart();
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