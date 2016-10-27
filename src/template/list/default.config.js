/**
 * Created by fjywan on 16/6/20.
 */

let Config = {
  title: '活动列表', //页面标题

  //拉取数据的url
  url: '/marketcms/shakeCityActivity/getActivityList',

  createBtn: {//按钮的权限控制硬编码，并非由配置而来，暂没有想到好的做法
    displayName: '创建活动',
    href: '#/city/add',
    auth: false //注意：只有等于false才会隐藏，undefined或true都会显示,使用 !== false
  },

  //生成查询表单的信息
  queryFields: [
    {
      type: 'text',
      displayName: '活动名称',
      name: 'name'
    },
    {
      type: 'uiselect',
      displayName: '所属城市',
      name: 'cityId',
      url: '/marketcms/shakeBase/getCitys',
      paramField: 'cityName'

    },
    {
      type: 'text',
      displayName: '提交人',
      name: 'createUser'
    },
    {
      type: 'select',
      displayName: '活动状态',
      name: 'status',
      options: [
        {
          text: '全部',
          value: ''
        },
        {
          text: '已保存',
          value: '1'
        },
        {
          text: '待审批',
          value: '2'
        },
        {
          text: '已同意',
          value: '3'
        },
        {
          text: '已驳回',
          value: '4'
        },
        {
          text: '已暂停',
          value: '5'
        },
        {
          text: '已结束',
          value: '6'
        }
      ]
    },
    {
      type: 'daterange',
      displayName: '活动时间',
      name: ['startTime', 'endTime']
    }
  ],
  //在table中展示的字段
  tableFields: [
    {
      displayName: '活动编号',
      name: 'code'
    },
    {
      displayName: '活动名称',
      name: 'name'
    },
    {
      displayName: '开始时间',
      name: 'startTime'
    },
    {
      displayName: '截止时间',
      name: 'endTime'
    },
    {
      displayName: '提交人',
      name: 'createUserName'
    },
    {
      displayName: '所属城市',
      name: 'cityName'
    },
    {
      displayName: '活动位置',
      name: 'plazaName'
    },
    {
      displayName: '优先级',
      name: 'priority'
    },
    {
      displayName: '活动状态',
      name: 'status'
    }
  ],
  //table内的操作按钮
  operations: [
    {
      displayName: '查看',
      itemId: 'id', //贫道链接后面的字段
      href: '#/city/detail/' //接受三种字段：state, href, action. action函数，接收当前条目id
    }
  ]
};


export default Config;
