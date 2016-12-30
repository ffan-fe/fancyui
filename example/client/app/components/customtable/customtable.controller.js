/**
 * (description)
 *
 * @author yourname
 */

import data from './data';

export default class CustomtableController {
	constructor($state) {
		"ngInject";
		this.$state = $state;
		this.customColumn = [
			{
				key: 'storeId',
				name: '门店编号',
				checked: true
			},
			{
				key: 'storeName',
				name: '门店名称',
				checked: true
			},
			{
				key: 'isPhysicalStoreName',
				name: '门店分类',
				checked: true
			},
			{
				key: 'businessType',
				name: '门店类型',
				checked: true
			},
			{
				key: 'storePhone',
				name: '门店电话',
				checked: true
			},
			{
				key: 'plazaName',
				name: '所属广场',
				checked: false
			},
			{
				key: 'merchantName',
				name: '所属商户',
				checked: false
			}
		];
		this.operations = [
			{
				name: '查看',
				action: (row) => {
					console.log(row);
					alert('点击了查看按钮, 门店id为:' + row.storeId);
				}
			},
			{
				name: '修改',
				action: (row) => {
					console.log(row);
					alert('点击了修改按钮, 门店id为:' + row.storeId);
				}
			}
		];
		this.data = data;
	}

	pageChange(pageNo) {
		console.log(pageNo)
	}
}