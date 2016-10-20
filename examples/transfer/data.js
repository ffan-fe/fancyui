export  default {
  dataSource:[
    {
      key: 'NNN',
      value: "沈阳分门店测试1（商圈dx测试店）"
    },
    {
      key: 9103705,
      value: "TESTing（TEST店）"
    },
    {
      key: 9103384,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）"
    },
    {
      key: 9103381,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店棒啊帮帮哒00100101010）"
    },
    {
      key: 9103347,
      value: "测试专用叶（勿动）（沈阳奥体店）"
    },
    {
      key: 9103346,
      storeName: "	测试专用勿动111111111111",
      value: "	测试专用勿动（沈阳北一路店）333333333333333333"
    },
    {
      key: 9103345,
      value: "测试专用勿动（沈阳太原街店）11111111111111111"
    },
    {
      key: 9103344,
      value: "测试专用叶（勿动）（沈阳奥体店1155555555）"
    }
  ],

  targetData:[
    {
      key: 'NNN',
      value: "沈阳分门店测试1（商圈dx测试店）"
    },
    {
      key: 9103705,
      value: "TESTing（TEST店）"
    },
    {
      key: 9103384,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）"
    }],

  dataSourceTmp : `this.dataSource = [
    {
      key: 'NNN',
      value: "沈阳分门店测试1（商圈dx测试店）"
    },
    {
      key: 9103705,
      value: "TESTing（TEST店）"
    },
    {
      key: 9103384,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）"
    },
    {
      key: 9103381,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店棒啊帮帮哒00100101010）"
    },
    {
      key: 9103347,
      value: "测试专用叶（勿动）（沈阳奥体店）"
    },
    {
      key: 9103346,
      storeName: "	测试专用勿动111111111111",
      value: "	测试专用勿动（沈阳北一路店）333333333333333333"
    },
    {
      key: 9103345,
      value: "测试专用勿动（沈阳太原街店）11111111111111111"
    },
    {
      key: 9103344,
      value: "测试专用叶（勿动）（沈阳奥体店1155555555）"
    }
  ]`,

  codePart1:`<bp-transfer source-data="vm.dataSource"></bp-transfer> `,
  codePart2:`
    <bp-transfer 
    source-data="vm.dataSource"
    titles="vm.titles"
    placeholders="vm.placeholders"
    operations="vm.operations"
    showLeft-search="vm.showLeftSearch"
    showRight-search="vm.showRightSearch"
    add-btn="vm.addBtn"
    add-all-btn="vm.addAllBtn"
    del-btn="vm.delBtn"
    del-all-btn="vm.delAllBtn"
    ></bp-transfer>`,

  codePart3:`
    <bp-transfer 
    source-data="vm.dataSource"
    titles="vm.titles"
    placeholders="vm.placeholders"
    operations="vm.operations"
    showLeft-search="vm.showLeftSearch"
    showRight-search="vm.showRightSearch"
    add-btn="vm.addBtn"
    add-all-btn="vm.addAllBtn"
    del-btn="vm.delBtn"
    del-all-btn="vm.delAllBtn"
    server-search="vm.search($value)"
    ></bp-transfer>`,

  serverSearch: `
    /**
    *业务方的函数 
    *params $value 组件返回给你输入值
    */
    search($value){
      
    }`,

  dataSourceTmp1 : `
    /**
     *配置
     */
    this.titles = ['门店列表', '已选择门店'];
    this.placeholders = ['输入门店进行检索', '对已经出来的结果进行检索'];
    this.operations = ['增加', '增加全部', '删除', '全部删除'];
    this.showLeftSearch = true;
    this.showRightSearch = false;
    this.addBtn = true;
    this.addAllBtn = true;
    this.delBtn = true;
    this.delAllBtn = false;
    
    this.dataSource = [
    {
      key: 'NNN',
      value: "沈阳分门店测试1（商圈dx测试店）"
    },
    {
      key: 9103705,
      value: "TESTing（TEST店）"
    },
    {
      key: 9103384,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店）"
    },
    {
      key: 9103381,
      value: "性能测试商圈01_勿动（性能测试商圈01_勿动店棒啊帮帮哒00100101010）"
    },
    {
      key: 9103347,
      value: "测试专用叶（勿动）（沈阳奥体店）"
    },
    {
      key: 9103346,
      storeName: "	测试专用勿动111111111111",
      value: "	测试专用勿动（沈阳北一路店）333333333333333333"
    },
    {
      key: 9103345,
      value: "测试专用勿动（沈阳太原街店）11111111111111111"
    },
    {
      key: 9103344,
      value: "测试专用叶（勿动）（沈阳奥体店1155555555）"
    }
  ]`
};
