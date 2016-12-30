
export default class GaugechartController {
	constructor($state) {
		"ngInject";
		this.$state = $state;
		this.initGaugeChart();
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
}