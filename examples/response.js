/**
 * Created by fjywan on 16/5/19.
 */
import moment from 'moment';

let responseHandleFunc = function (response) {
  // do something on success
  if (/\/activity\/rule/.test(response.config.url)) {

  }

  if (/\/budgetSection\/getlist/.test(response.config.url)) {

  }

  if (/\/marketcms\/shakeCityActivity\/getActivityList/.test(response.config.url)) {
    console.log('marketcms\/shakeCityActivity\/getActivityList response', response);

    response.status = 200;
    response.statusText = 'ok';
    response.data = {
      status: 200,
      message: "操作成功",
      data: {
        list: [
          {
            id: "2036",
            code: "Y20160729036",
            name: "sdf",
            cityId: "130200",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-29 11:50:00",
            endTime: "2016-07-30 15:50:00",
            dayLimit: "4",
            activityLimit: "4",
            textRewardNoCounter: "0",
            priority: "2",
            status: "已保存",
            online: "0",
            createUser: "22723",
            createUserName: "liuchang71",
            createTime: "1469756146",
            updateUser: "22723",
            updateUserName: "liuchang71",
            updateTime: "1469756907",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "唐山市",
            plazaName: "唐山市"
          },
          {
            id: "2035",
            code: "Y20160729035",
            name: "ggg",
            cityId: "131100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-29 11:50:00",
            endTime: "2016-07-30 07:30:00",
            dayLimit: "3",
            activityLimit: "4",
            textRewardNoCounter: "0",
            priority: "2",
            status: "待审批",
            online: "0",
            createUser: "22723",
            createUserName: "liuchang71",
            createTime: "1469755902",
            updateUser: "22723",
            updateUserName: "liuchang71",
            updateTime: "1469757438",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "衡水市",
            plazaName: "衡水市"
          },
          {
            id: "2030",
            code: "Y20160728030",
            name: "test edit",
            cityId: "120200",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-29 11:15:00",
            endTime: "2016-07-30 05:25:00",
            dayLimit: "2",
            activityLimit: "2",
            textRewardNoCounter: "0",
            priority: "2",
            status: "已结束",
            online: "0",
            createUser: "22723",
            createUserName: "liuchang71",
            createTime: "1469690178",
            updateUser: "22723",
            updateUserName: "liuchang71",
            updateTime: "1469696580",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "天津县",
            plazaName: "天津县"
          },
          {
            id: "2028",
            code: "Y20160728028",
            name: "城市活动1469687159",
            cityId: "110100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 14:25:59",
            endTime: "2016-07-28 14:40:59",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "3",
            status: "已结束",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469687117",
            updateUser: "112",
            updateUserName: "zjs",
            updateTime: "1469687384",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2027",
            code: "Y20160728027",
            name: "城市活动1469686505",
            cityId: "110100",
            plazaId: "1000996",
            type: "2",
            poi: "",
            startTime: "2016-07-28 14:15:05",
            endTime: "2016-07-28 14:30:05",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "2",
            status: "已结束",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469686463",
            updateUser: "14431",
            updateUserName: "孙晓旭",
            updateTime: "1469686515",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2025",
            code: "Y20160728025",
            name: "城市活动1469680366",
            cityId: "110100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 12:32:46",
            endTime: "2016-07-28 12:47:46",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "3",
            status: "已结束",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469680325",
            updateUser: "112",
            updateUserName: "zjs",
            updateTime: "1469680592",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2024",
            code: "Y20160728024",
            name: "城市活动1469679836",
            cityId: "110100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 12:23:56",
            endTime: "2016-07-28 12:38:56",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "0",
            status: "已结束",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469679795",
            updateUser: "112",
            updateUserName: "zjs",
            updateTime: "1469680269",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2022",
            code: "Y20160728022",
            name: "城市活动1469677113",
            cityId: "110100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 11:38:33",
            endTime: "2016-07-28 11:53:33",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "0",
            status: "已结束",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469677071",
            updateUser: "112",
            updateUserName: "zjs",
            updateTime: "1469677392",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2021",
            code: "Y20160728021",
            name: "城市活动1469676656",
            cityId: "110100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 11:30:56",
            endTime: "2016-07-28 11:45:56",
            dayLimit: "20",
            activityLimit: "20",
            textRewardNoCounter: "0",
            priority: "0",
            status: "已保存",
            online: "0",
            createUser: "112",
            createUserName: "zjs",
            createTime: "1469676615",
            updateUser: "112",
            updateUserName: "zjs",
            updateTime: "1469676615",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "北京市",
            plazaName: "北京市"
          },
          {
            id: "2020",
            code: "Y20160728020",
            name: "tre",
            cityId: "120100",
            plazaId: "0",
            type: "2",
            poi: "",
            startTime: "2016-07-28 15:35:00",
            endTime: "2016-07-30 10:50:00",
            dayLimit: "6",
            activityLimit: "12",
            textRewardNoCounter: "0",
            priority: "8",
            status: "待审批",
            online: "0",
            createUser: "22723",
            createUserName: "liuchang71",
            createTime: "1469676314",
            updateUser: "22723",
            updateUserName: "liuchang71",
            updateTime: "1469700242",
            collectTitle: "",
            collectUserDayLimit: "-1",
            collectUserActivityLimit: "-1",
            cityName: "天津市",
            plazaName: "天津市"
          }
        ],
        totalCount: 351
      }
    };
  }
  if (/\/Database\/coupon_component\/storeQueryList/.test(response.config.url)) {
    console.log('Database\/coupon_component\/storeQueryList response', response);
    response.status = 200;
    response.statusText = 'ok';
    response.data = {
      totalCount: 20177,
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
        {
          brandNames: "斗牛士",
          storeId: 2036483,
          storeName: "斗牛士",
          merchantName: "福州玮诚餐饮有限公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "黛若",
          storeId: 2036695,
          storeName: "DAZZLE",
          merchantName: "福州肯俊服饰有限公司仓山分公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "雅子泡芙",
          storeId: 2036745,
          storeName: "雅子泡芙",
          merchantName: "福州南景餐饮管理有限公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "鑫客家",
          storeId: 2036779,
          storeName: "鑫客家",
          merchantName: "鑫客家餐饮（福州）有限责任公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "播",
          storeId: 2036830,
          storeName: "播",
          merchantName: "郭瑞艳(350126197111133422)播-仓山",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "大丰收鱼庄",
          storeId: 2036876,
          storeName: "大丰收鱼庄",
          merchantName: "福州大丰收餐饮服务有限公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "太平鸟女装",
          storeId: 2036895,
          storeName: "太平鸟女装",
          merchantName: "宁波太平鸟时尚服饰股份有限公司福州仓山万达分公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "法国鳄鱼",
          storeId: 2036929,
          storeName: "LACOSTE",
          merchantName: "林天民",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        },
        {
          brandNames: "西遇",
          storeId: 2036949,
          storeName: "西遇",
          merchantName: "深圳市西域鞋业有限公司",
          plazaName: "福州仓山万达广场",
          storeNo: null,
          businessTypeName: null
        }
      ]
    };
  }

  return response;
};

export default responseHandleFunc;
