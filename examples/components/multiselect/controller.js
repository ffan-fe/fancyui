import Prism from 'prismjs';

class MultiselectTestController {
  constructor($sce) {
    'ngInject'
    this.name = 'multiselectTest';
    const exampleCode = `
      <multi-select config="vm.config" ng-model="vm.multiSelectModel"></multi-select>

      vm.config =  {
               //拉取数据的url
               url: '/Database/coupon_component/storeQueryList',

               //标识每个选项的字段，用于选中选项的查询操作
               uniqueField: 'storeId',

               //默认返回uniqueField值的数组
               //returnModel: 'all',

               //生成查询表单的信息w
               queryFields: [
                 {
                   type: 'text',
                   displayName: '门店名称',
                   name: 'storeName'
                 },
                 {
                   type: 'text',
                   displayName: '商户名称',
                   name: 'merchantName'
                 },
                 {
                   type: 'text',
                   displayName: '品牌名称',
                   name: 'brandNames'
                 },
                 {
                   type: 'text',
                   displayName: '商圈名称',
                   name: 'plazaName'
                 }
               ],
               //在table中展示的字段
               tableFields: [
                 {
                   displayName: '门店名称',
                   name: 'storeName'
                 },
                 {
                   displayName: '所属商户',
                   name: 'merchantName'
                 },
                 {
                   displayName: '经营品牌',
                   name: 'brandNames'
                 },
                 {
                   displayName: '所属商圈',
                   name: 'plazaName'
                 }
               ],

               //ng-table的配置项
               tableConfig: {
                 limit: 10, //每页多少个
                 pageName: 'page', //后端接受的页码字段名
                 excel: false //是否需要导出excel
               },

               //table内的操作按钮
              operations: [
                {
                  displayName: '查看',
                  itemId: 'id', //贫道链接后面的字段
                  href: '#/city/detail/' //接受三种字段：state, href, action. action函数，接收当前条目id
                },
                {
                  displayName: '删除',
                  itemId: 'id', //标识每一列数据唯一性的字段名，它的值会作为第一个参数传给action
                  action: function (itemId, tableParams) {
                    tableParams.parameters({page: 1}).reload();
                  }
                }
              ],

               //获得multiselect controller的引用来初始化this,这个函数会在读取配置后自动执行
                //     initContrl: that => {
                 //      this.listTableParams = that.tableParams;
                 //    }
             };

    `;
    this.exampleHtml = $sce.trustAsHtml(Prism.highlight(exampleCode, Prism.languages.html));
    this.standardDataStructure = `{
      totalCount: 20088,
      items: [
        {
          brandNames: "我愿意",
          storeId: 2036302,
          storeName: "I DO",
          merchantName: "福建若可投资有限公司（仓山万达珠宝店）",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        ...
      ]
    }`;
  }
}

export default MultiselectTestController;
