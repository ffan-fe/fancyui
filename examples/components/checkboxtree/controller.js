import Prism from 'prismjs';

class RecruitrangeController {
  constructor(Restangular, $sce) {
    'ngInject'
    this.name = 'recruitrange';
    this.form = {};
    this.form.catagory = [
      {
        "categoryId": 1673,
        "categoryName": "TEST",
        "categoryLevel": 1,
        "sort": 2,
        "isLeaf": 1,
        "version": 3,
        "categoryPicSrc": "T1TH_TBQZT1RCvBVdK",
        "createTime": 1466650558000,
        "updateTime": 1467788030000,
        "route": "goodlist",
        "reqParams": null,
        "restangularized": true,
        "fromServer": true,
        "parentResource": null,
        "restangularCollection": false,
        "checked": true
      },
      {
        "categoryId": 1670,
        "categoryName": "测试系统一级目录y",
        "categoryLevel": 1,
        "sort": 3,
        "isLeaf": 0,
        "version": 3,
        "categoryPicSrc": "T15pKTBjWT1RCvBVdK",
        "createTime": 1466578095000,
        "updateTime": 1466650558000,
        "children": [],
        "route": "goodlist",
        "reqParams": null,
        "restangularized": true,
        "fromServer": true,
        "parentResource": null,
        "restangularCollection": false,
        "checked": true
      }, {
        "categoryId": 1671,
        "categoryName": "测试系统二级类目y",
        "categoryLevel": 2,
        "parent": 1670,
        "sort": 0,
        "isLeaf": 0,
        "version": 2,
        "categoryPicSrc": "T1z8ATBXAT1RCvBVdK",
        "createTime": 1466578172000,
        "updateTime": 1466578205000,
        "children": [],
        "checked": true
      }, {
        "categoryId": 1672,
        "categoryName": "测试系统三级类目y",
        "categoryLevel": 3,
        "parent": 1671,
        "sort": 0,
        "isLeaf": 1,
        "version": 1,
        "categoryPicSrc": "T108ATB4AT1RCvBVdK",
        "createTime": 1466578205000,
        "updateTime": 1466578205000,
        "checked": true
      }];

    console.log('process.env.DEBUG', process.env.DEBUG);

    let demoData = [
      {
        categoryId: 1709,
        categoryName: "我类目",
        categoryLevel: 1,
        sort: 2,
        isLeaf: 1,
        version: 1,
        categoryPicSrc: "T1DCETBKDT1RCvBVdK",
        createTime: 1469587955000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1706,
        categoryName: "酒店点评类目测试",
        categoryLevel: 1,
        sort: 3,
        isLeaf: 1,
        version: 2,
        categoryPicSrc: "T184bTBsKT1RCvBVdK",
        createTime: 1469500078000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1702,
        categoryName: "商户测试",
        categoryLevel: 1,
        sort: 4,
        isLeaf: 1,
        version: 4,
        categoryPicSrc: "T1kHLTBKAT1RCvBVdK",
        createTime: 1468401749000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1698,
        categoryName: "自己类目",
        categoryLevel: 1,
        sort: 5,
        isLeaf: 1,
        version: 4,
        categoryPicSrc: "T1oHbTB4Vv1RCvBVdK",
        createTime: 1468307339000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1673,
        categoryName: "TEST",
        categoryLevel: 1,
        sort: 6,
        isLeaf: 1,
        version: 7,
        categoryPicSrc: "T1TH_TBQZT1RCvBVdK",
        createTime: 1466650558000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1670,
        categoryName: "测试系统一级目录y",
        categoryLevel: 1,
        sort: 7,
        isLeaf: 0,
        version: 7,
        categoryPicSrc: "T15pKTBjWT1RCvBVdK",
        createTime: 1466578095000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1671,
            categoryName: "测试系统二级类目y",
            categoryLevel: 2,
            parent: 1670,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1z8ATBXAT1RCvBVdK",
            createTime: 1466578172000,
            updateTime: 1466578205000,
            children: [
              {
                categoryId: 1672,
                categoryName: "测试系统三级类目y",
                categoryLevel: 3,
                parent: 1671,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T108ATB4AT1RCvBVdK",
                createTime: 1466578205000,
                updateTime: 1466578205000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1662,
        categoryName: "test_aaaaaaaaaa",
        categoryLevel: 1,
        sort: 8,
        isLeaf: 1,
        version: 7,
        categoryPicSrc: "T1g8VTBChT1RCvBVdK",
        createTime: 1466397752000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1659,
        categoryName: "category一级615",
        categoryLevel: 1,
        sort: 9,
        isLeaf: 0,
        version: 9,
        categoryPicSrc: "T1B4VTB4hT1RCvBVdK",
        createTime: 1466041232000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1660,
            categoryName: "category二级615",
            categoryLevel: 2,
            parent: 1659,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T13HVTBXKT1RCvBVdK",
            createTime: 1466041264000,
            updateTime: 1466041288000,
            children: [
              {
                categoryId: 1661,
                categoryName: "category三级615",
                categoryLevel: 3,
                parent: 1660,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1L4dTB_bT1RCvBVdK",
                createTime: 1466041288000,
                updateTime: 1466041288000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1694,
        categoryName: "测试用系统类目_Ros",
        categoryLevel: 1,
        sort: 10,
        isLeaf: 1,
        version: 6,
        categoryPicSrc: "T1KpbTBKLT1RCvBVdK",
        createTime: 1467629078000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1652,
        categoryName: "儿童类",
        categoryLevel: 1,
        sort: 11,
        isLeaf: 1,
        version: 10,
        categoryPicSrc: "T1FpbTBmET1RCvBVdK",
        createTime: 1465896246000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1649,
        categoryName: "love系统类目一级",
        categoryLevel: 1,
        sort: 12,
        isLeaf: 0,
        version: 13,
        categoryPicSrc: "T1J4YTBmhT1RCvBVdK",
        createTime: 1464857572000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1650,
            categoryName: "love系统二级类目",
            categoryLevel: 2,
            parent: 1649,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1OHYTB5bT1RCvBVdK",
            createTime: 1464857708000,
            updateTime: 1464857964000,
            children: [
              {
                categoryId: 1651,
                categoryName: "love3级系统类目",
                categoryLevel: 3,
                parent: 1650,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1I8YTB5AT1RCvBVdK",
                createTime: 1464857964000,
                updateTime: 1464857964000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1636,
        categoryName: "母婴类",
        categoryLevel: 1,
        sort: 13,
        isLeaf: 0,
        version: 15,
        categoryPicSrc: "T1tNWTBvWT1RCvBVdK",
        createTime: 1462329300000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1637,
            categoryName: "尿不湿",
            categoryLevel: 2,
            parent: 1636,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1tzVTBvdT1RCvBVdK",
            createTime: 1462330622000,
            updateTime: 1462330853000,
            children: [
              {
                categoryId: 1638,
                categoryName: "金装",
                categoryLevel: 3,
                parent: 1637,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1SHZTByZT1RCvBVdK",
                createTime: 1462330853000,
                updateTime: 1462330853000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1658,
        categoryName: "餐饮类88",
        categoryLevel: 1,
        sort: 14,
        isLeaf: 1,
        version: 10,
        categoryPicSrc: "T1k8bTBXDT1RCvBVdK",
        createTime: 1465972329000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1708,
        categoryName: "长短",
        categoryLevel: 1,
        sort: 15,
        isLeaf: 1,
        version: 2,
        categoryPicSrc: "T14pVTBQYT1RCvBVdK",
        createTime: 1469523343000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1633,
        categoryName: "烟酒类",
        categoryLevel: 1,
        sort: 16,
        isLeaf: 0,
        version: 19,
        categoryPicSrc: "T1S4xTB4DT1RCvBVdK",
        createTime: 1462326556000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1707,
            categoryName: "母婴123",
            categoryLevel: 2,
            parent: 1633,
            sort: 0,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1jpWTBmxT1RCvBVdK",
            createTime: 1469523171000,
            updateTime: 1469523171000
          },
          {
            categoryId: 1653,
            categoryName: "黑啤（青岛啤酒）",
            categoryLevel: 2,
            parent: 1633,
            sort: 1,
            isLeaf: 1,
            version: 2,
            categoryPicSrc: "T1KHbTB4xT1RCvBVdK",
            createTime: 1465955196000,
            updateTime: 1469523171000
          },
          {
            categoryId: 1634,
            categoryName: "酒水类",
            categoryLevel: 2,
            parent: 1633,
            sort: 2,
            isLeaf: 0,
            version: 8,
            categoryPicSrc: "T1m4JTBKAT1RCvBVdK",
            createTime: 1462327042000,
            updateTime: 1469523171000,
            children: [
              {
                categoryId: 1657,
                categoryName: "极品（青岛啤酒）",
                categoryLevel: 3,
                parent: 1634,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T19pKTBTCT1RCvBVdK",
                createTime: 1465956739000,
                updateTime: 1465956739000
              },
              {
                categoryId: 1656,
                categoryName: "奥古特（青岛啤酒）",
                categoryLevel: 3,
                parent: 1634,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "T1y4KTBvYT1RCvBVdK",
                createTime: 1465956039000,
                updateTime: 1465956739000
              },
              {
                categoryId: 1655,
                categoryName: "纯生（青岛啤酒）",
                categoryLevel: 3,
                parent: 1634,
                sort: 2,
                isLeaf: 1,
                version: 3,
                categoryPicSrc: "T1dpKTBgJT1RCvBVdK",
                createTime: 1465955751000,
                updateTime: 1465956739000
              },
              {
                categoryId: 1654,
                categoryName: "黑啤（青岛啤酒）",
                categoryLevel: 3,
                parent: 1634,
                sort: 3,
                isLeaf: 1,
                version: 5,
                categoryPicSrc: "T178KTBvdT1RCvBVdK",
                createTime: 1465955365000,
                updateTime: 1465956739000
              },
              {
                categoryId: 1635,
                categoryName: "啤酒",
                categoryLevel: 3,
                parent: 1634,
                sort: 4,
                isLeaf: 1,
                version: 5,
                categoryPicSrc: "T1TpxTBXhT1RCvBVdK",
                createTime: 1462327225000,
                updateTime: 1465956739000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1624,
        categoryName: "吃的",
        categoryLevel: 1,
        sort: 17,
        isLeaf: 0,
        version: 18,
        categoryPicSrc: "T1UNWTBKLT1RCvBVdK",
        createTime: 1461227192000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1625,
            categoryName: "外国吃的",
            categoryLevel: 2,
            parent: 1624,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T13HhTBybT1RCvBVdK",
            createTime: 1461227230000,
            updateTime: 1461229893000,
            children: [
              {
                categoryId: 1626,
                categoryName: "欧洲吃的",
                categoryLevel: 3,
                parent: 1625,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1QXLTBmDT1RCvBVdK",
                createTime: 1461229893000,
                updateTime: 1461229893000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1621,
        categoryName: "武器",
        categoryLevel: 1,
        sort: 18,
        isLeaf: 0,
        version: 19,
        categoryPicSrc: "T1oNATBv_T1RCvBVdK",
        createTime: 1461205821000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1622,
            categoryName: "冷兵器",
            categoryLevel: 2,
            parent: 1621,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1hXWTB5AT1RCvBVdK",
            createTime: 1461205865000,
            updateTime: 1461205916000,
            children: [
              {
                categoryId: 1623,
                categoryName: "弓箭",
                categoryLevel: 3,
                parent: 1622,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1.phTBXxT1RCvBVdK",
                createTime: 1461205916000,
                updateTime: 1461205916000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1616,
        categoryName: "testwy类目",
        categoryLevel: 1,
        sort: 19,
        isLeaf: 0,
        version: 21,
        categoryPicSrc: "T1kN_TBmKT1RCvBVdK",
        createTime: 1458892336000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1617,
            categoryName: "testwy二级类目",
            categoryLevel: 2,
            parent: 1616,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1PXWTBy_T1RCvBVdK",
            createTime: 1459237159000,
            updateTime: 1459237159000
          }
        ]
      },
      {
        categoryId: 1589,
        categoryLevel: 1,
        sort: 21,
        isLeaf: 0,
        version: 22,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457510896000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1590,
            categoryName: "餐饮331",
            categoryLevel: 2,
            parent: 1589,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457510905000,
            updateTime: 1457510914000,
            children: [
              {
                categoryId: 1591,
                categoryName: "餐饮332",
                categoryLevel: 3,
                parent: 1590,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457510914000,
                updateTime: 1457510914000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1586,
        categoryLevel: 1,
        sort: 22,
        isLeaf: 0,
        version: 23,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457504983000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1587,
            categoryName: "category2",
            categoryLevel: 2,
            parent: 1586,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457504992000,
            updateTime: 1457505001000,
            children: [
              {
                categoryId: 1588,
                categoryName: "category3",
                categoryLevel: 3,
                parent: 1587,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457505001000,
                updateTime: 1457505001000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1583,
        categoryLevel: 1,
        sort: 23,
        isLeaf: 0,
        version: 24,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457504549000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1584,
            categoryName: "酒水1",
            categoryLevel: 2,
            parent: 1583,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457504558000,
            updateTime: 1457504567000,
            children: [
              {
                categoryId: 1585,
                categoryName: "红酒",
                categoryLevel: 3,
                parent: 1584,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457504567000,
                updateTime: 1457504567000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1580,
        categoryLevel: 1,
        sort: 24,
        isLeaf: 0,
        version: 25,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457504204000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1581,
            categoryName: "女装1",
            categoryLevel: 2,
            parent: 1580,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457504213000,
            updateTime: 1457504222000,
            children: [
              {
                categoryId: 1582,
                categoryName: "西装1",
                categoryLevel: 3,
                parent: 1581,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457504222000,
                updateTime: 1457504222000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1579,
        categoryLevel: 1,
        sort: 25,
        isLeaf: 1,
        version: 25,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457503680000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1578,
        categoryLevel: 1,
        sort: 26,
        isLeaf: 1,
        version: 26,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457503315000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1577,
        categoryLevel: 1,
        sort: 27,
        isLeaf: 1,
        version: 27,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457493216000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1576,
        categoryLevel: 1,
        sort: 28,
        isLeaf: 1,
        version: 28,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457493031000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1575,
        categoryLevel: 1,
        sort: 29,
        isLeaf: 1,
        version: 29,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457492791000,
        updateTime: 1469587954000
      },
      {
        categoryId: 1572,
        categoryName: "数据构造一级类目",
        categoryLevel: 1,
        sort: 30,
        isLeaf: 0,
        version: 31,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457486788000,
        updateTime: 1469587954000,
        children: [
          {
            categoryId: 1573,
            categoryName: "数据构造二级类目",
            categoryLevel: 2,
            parent: 1572,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457487026000,
            updateTime: 1457487226000,
            children: [
              {
                categoryId: 1574,
                categoryName: "数据构造三级类目",
                categoryLevel: 3,
                parent: 1573,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457487226000,
                updateTime: 1457487226000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1558,
        categoryName: "方泽一级类目1",
        categoryLevel: 1,
        sort: 31,
        isLeaf: 0,
        version: 33,
        categoryPicSrc: "T1CXdTB_xT1RCvBVdK",
        createTime: 1452737729000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1559,
            categoryName: "方泽二级类目",
            categoryLevel: 2,
            parent: 1558,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1IzDTBTAT1RCvBVdK",
            createTime: 1452737766000,
            updateTime: 1452737913000,
            children: [
              {
                categoryId: 1560,
                categoryName: "方泽三级类目",
                categoryLevel: 3,
                parent: 1559,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1ptLTBKZv1RCvBVdK",
                createTime: 1452737913000,
                updateTime: 1452737913000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1545,
        categoryName: "爱疯电子产品",
        categoryLevel: 1,
        sort: 32,
        isLeaf: 0,
        version: 34,
        categoryPicSrc: "T1NzYTBmAT1RCvBVdK",
        createTime: 1451887420000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1549,
            categoryName: "爱疯二级",
            categoryLevel: 2,
            parent: 1545,
            sort: 0,
            isLeaf: 1,
            version: 2,
            categoryPicSrc: "T1xFETB5Zv1RCvBVdK",
            createTime: 1451888276000,
            updateTime: 1458009652000
          },
          {
            categoryId: 1546,
            categoryName: "服饰",
            categoryLevel: 2,
            parent: 1545,
            sort: 1,
            isLeaf: 1,
            version: 2,
            categoryPicSrc: "T1myLTBKWv1RCvBVdK",
            createTime: 1451887456000,
            updateTime: 1451888276000
          }
        ]
      },
      {
        categoryId: 1542,
        categoryName: "如新",
        categoryLevel: 1,
        sort: 33,
        isLeaf: 1,
        version: 33,
        categoryPicSrc: "T1vzJTByEv1RCvBVdK",
        createTime: 1451542075000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1526,
        categoryName: "测试1222szy",
        categoryLevel: 1,
        sort: 34,
        isLeaf: 1,
        version: 34,
        categoryPicSrc: "T1KXETBQAT1RCvBVdK",
        createTime: 1450770083000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1504,
        categoryName: "个护化妆",
        categoryLevel: 1,
        sort: 37,
        isLeaf: 0,
        version: 39,
        categoryPicSrc: "T1MNxTBTYT1RCvBVdK",
        createTime: 1448414678000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1699,
            categoryName: "面霜",
            categoryLevel: 2,
            parent: 1504,
            sort: 0,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1W8WTBXDT1RCvBVdK",
            createTime: 1468375510000,
            updateTime: 1468375664000,
            children: [
              {
                categoryId: 1700,
                categoryName: "保湿",
                categoryLevel: 3,
                parent: 1699,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1WHWTBXYT1RCvBVdK",
                createTime: 1468375581000,
                updateTime: 1468375581000
              },
              {
                categoryId: 1701,
                categoryName: "控油",
                categoryLevel: 3,
                parent: 1699,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1PpVTBvVT1RCvBVdK",
                createTime: 1468375664000,
                updateTime: 1468375664000
              }
            ]
          },
          {
            categoryId: 1505,
            categoryName: "面膜",
            categoryLevel: 2,
            parent: 1504,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1UFhTBQVT1RCvBVdK",
            createTime: 1448414915000,
            updateTime: 1468375510000,
            children: [
              {
                categoryId: 1506,
                categoryName: "保湿",
                categoryLevel: 3,
                parent: 1505,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1VXhTB_YT1RCvBVdK",
                createTime: 1448414946000,
                updateTime: 1448414946000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1470,
        categoryName: "运动休闲",
        categoryLevel: 1,
        sort: 38,
        isLeaf: 1,
        version: 38,
        categoryPicSrc: "T1KzZTBKCT1RCvBVdK",
        createTime: 1446102374000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1467,
        categoryName: "Test_1",
        categoryLevel: 1,
        sort: 39,
        isLeaf: 0,
        version: 41,
        categoryPicSrc: "T1NFJTB7hT1RCvBVdK",
        createTime: 1445925368000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1468,
            categoryName: "Test_2",
            categoryLevel: 2,
            parent: 1467,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1TXZTBKdT1RCvBVdK",
            createTime: 1445925475000,
            updateTime: 1445925521000,
            children: [
              {
                categoryId: 1469,
                categoryName: "Test_3",
                categoryLevel: 3,
                parent: 1468,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T17zhTBvAT1RCvBVdK",
                createTime: 1445925521000,
                updateTime: 1445925521000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1459,
        categoryName: "xjy的类目",
        categoryLevel: 1,
        sort: 40,
        isLeaf: 1,
        version: 40,
        categoryPicSrc: "h00ab30f8ca4792b36ad7ce1bbe006f9cec",
        createTime: 1445412705000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1464,
        categoryName: "测试类目_1_1",
        categoryLevel: 1,
        sort: 41,
        isLeaf: 0,
        version: 43,
        categoryPicSrc: "T16FJTBQZT1RCvBVdK",
        createTime: 1445845469000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1465,
            categoryName: "测试类目_2",
            categoryLevel: 2,
            parent: 1464,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KXJTBvDT1RCvBVdK",
            createTime: 1445845577000,
            updateTime: 1445845664000,
            children: [
              {
                categoryId: 1466,
                categoryName: "测试类目_3",
                categoryLevel: 3,
                parent: 1465,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1ONZTBCWT1RCvBVdK",
                createTime: 1445845664000,
                updateTime: 1445845664000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1451,
        categoryName: "优惠券",
        categoryLevel: 1,
        sort: 42,
        isLeaf: 0,
        version: 43,
        categoryPicSrc: "h00ab30f8ca4792b36ad7ce1bbe006f9cec",
        createTime: 1444381520000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1452,
            categoryName: "第三方导入券",
            categoryLevel: 2,
            parent: 1451,
            sort: 0,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00ab30f8ca4792b36ad7ce1bbe006f9cec",
            createTime: 1444381560000,
            updateTime: 1444381560000
          }
        ]
      },
      {
        categoryId: 1437,
        categoryName: "dtest",
        categoryLevel: 1,
        sort: 44,
        isLeaf: 1,
        version: 44,
        categoryPicSrc: "Array",
        createTime: 1437459855000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1424,
        categoryName: "餐一起拿",
        categoryLevel: 1,
        sort: 45,
        isLeaf: 0,
        version: 48,
        categoryPicSrc: "h00a0e77863f869005c5de91087339710d1",
        createTime: 1436754791000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1430,
            categoryName: "餐饮券",
            categoryLevel: 2,
            parent: 1424,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h004426aaa1e98fe74561ffafdfdabf308e",
            createTime: 1437007479000,
            updateTime: 1437007479000
          },
          {
            categoryId: 1438,
            categoryName: "测试类目",
            categoryLevel: 2,
            parent: 1424,
            sort: 2,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "Array",
            createTime: 1437460431000,
            updateTime: 1437460431000
          }
        ]
      },
      {
        categoryId: 1474,
        categoryName: "小吃",
        categoryLevel: 1,
        sort: 46,
        isLeaf: 1,
        version: 38,
        categoryPicSrc: "T1wRLTB4Yv1RCvBVdK",
        createTime: 1446515102000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1527,
        categoryName: "APP改版测试用勿动1级",
        categoryLevel: 1,
        sort: 47,
        isLeaf: 0,
        version: 36,
        categoryPicSrc: "T1jFdTBKYT1RCvBVdK",
        createTime: 1450841493000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1528,
            categoryName: "APP改版测试用勿动2级",
            categoryLevel: 2,
            parent: 1527,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1cyLTBXJv1RCvBVdK",
            createTime: 1450841545000,
            updateTime: 1450841593000,
            children: [
              {
                categoryId: 1529,
                categoryName: "APP改版测试用勿动3级",
                categoryLevel: 3,
                parent: 1528,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1FNhTBb_T1RCvBVdK",
                createTime: 1450841593000,
                updateTime: 1450841593000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1533,
        categoryName: "爱琴海积分项目二期测",
        categoryLevel: 1,
        sort: 48,
        isLeaf: 0,
        version: 35,
        categoryPicSrc: "T1MFZTBjVT1RCvBVdK",
        createTime: 1451011538000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1534,
            categoryName: "爱琴海积分项目二期2",
            categoryLevel: 2,
            parent: 1533,
            sort: 0,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1vzxTBjYT1RCvBVdK",
            createTime: 1451011597000,
            updateTime: 1451012190000,
            children: [
              {
                categoryId: 1535,
                categoryName: "爱琴海积分项目二期3",
                categoryLevel: 3,
                parent: 1534,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1LXZTBsbT1RCvBVdK",
                createTime: 1451012190000,
                updateTime: 1451012190000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1380,
        categoryName: "xiugaizcc接口测试1433142567528",
        categoryLevel: 1,
        sort: 50,
        isLeaf: 1,
        version: 52,
        categoryPicSrc: "12",
        createTime: 1433142491000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1376,
        categoryName: "xiugaizcc接口测试1433138879699",
        categoryLevel: 1,
        sort: 51,
        isLeaf: 1,
        version: 52,
        categoryPicSrc: "12",
        createTime: 1433138803000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1561,
        categoryName: "H2O",
        categoryLevel: 1,
        sort: 52,
        isLeaf: 1,
        version: 32,
        categoryPicSrc: "T1aXZTBQKT1RCvBVdK",
        createTime: 1452828978000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1207,
        categoryName: "Y购物",
        categoryLevel: 1,
        sort: 53,
        isLeaf: 0,
        version: 67,
        categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
        createTime: 1429836595000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1337,
            categoryName: "万达百货",
            categoryLevel: 2,
            parent: 1207,
            sort: 0,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431332037000,
            updateTime: 1431332037000
          },
          {
            categoryId: 1209,
            categoryName: "Y数码",
            categoryLevel: 2,
            parent: 1207,
            sort: 2,
            isLeaf: 0,
            version: 8,
            categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
            createTime: 1429836842000,
            updateTime: 1431332037000,
            children: [
              {
                categoryId: 1235,
                categoryName: "测试用三级类目",
                categoryLevel: 3,
                parent: 1209,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h0009642f7da6c82a94f141609507e2a63a",
                createTime: 1429863828000,
                updateTime: 1429863828000
              },
              {
                categoryId: 1268,
                categoryName: "Y手机",
                categoryLevel: 3,
                parent: 1209,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184329000,
                updateTime: 1430184329000
              },
              {
                categoryId: 1269,
                categoryName: "Y电脑",
                categoryLevel: 3,
                parent: 1209,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184357000,
                updateTime: 1430184357000
              },
              {
                categoryId: 1270,
                categoryName: "Y平板",
                categoryLevel: 3,
                parent: 1209,
                sort: 4,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184386000,
                updateTime: 1430184386000
              },
              {
                categoryId: 1271,
                categoryName: "Y相机",
                categoryLevel: 3,
                parent: 1209,
                sort: 5,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184410000,
                updateTime: 1430184410000
              }
            ]
          },
          {
            categoryId: 1228,
            categoryName: "Y家纺",
            categoryLevel: 2,
            parent: 1207,
            sort: 4,
            isLeaf: 0,
            version: 11,
            categoryPicSrc: "h0009642f7da6c82a94f141609507e2a63a",
            createTime: 1429860910000,
            updateTime: 1431332037000,
            children: [
              {
                categoryId: 1258,
                categoryName: "Y被子",
                categoryLevel: 3,
                parent: 1228,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430183920000,
                updateTime: 1430183920000
              },
              {
                categoryId: 1259,
                categoryName: "Y枕芯",
                categoryLevel: 3,
                parent: 1228,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430183971000,
                updateTime: 1430183971000
              },
              {
                categoryId: 1260,
                categoryName: "Y床垫",
                categoryLevel: 3,
                parent: 1228,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184007000,
                updateTime: 1430184007000
              },
              {
                categoryId: 1261,
                categoryName: "Y毛巾",
                categoryLevel: 3,
                parent: 1228,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184043000,
                updateTime: 1430184043000
              },
              {
                categoryId: 1262,
                categoryName: "Y窗帘",
                categoryLevel: 3,
                parent: 1228,
                sort: 4,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184070000,
                updateTime: 1430184070000
              },
              {
                categoryId: 1263,
                categoryName: "Y床单",
                categoryLevel: 3,
                parent: 1228,
                sort: 5,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184098000,
                updateTime: 1430184098000
              },
              {
                categoryId: 1264,
                categoryName: "Y凉席",
                categoryLevel: 3,
                parent: 1228,
                sort: 6,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1430184148000,
                updateTime: 1430184148000
              }
            ]
          },
          {
            categoryId: 1316,
            categoryName: "Q数码",
            categoryLevel: 2,
            parent: 1207,
            sort: 5,
            isLeaf: 0,
            version: 6,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1430989473000,
            updateTime: 1431332037000,
            children: [
              {
                categoryId: 1319,
                categoryName: "平板",
                categoryLevel: 3,
                parent: 1316,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1430991471000,
                updateTime: 1430991471000
              }
            ]
          },
          {
            categoryId: 1338,
            categoryName: "Y汽车",
            categoryLevel: 2,
            parent: 1207,
            sort: 6,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431340984000,
            updateTime: 1431343217000,
            children: [
              {
                categoryId: 1339,
                categoryName: "Y轿车",
                categoryLevel: 3,
                parent: 1338,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431341218000,
                updateTime: 1431341218000
              },
              {
                categoryId: 1340,
                categoryName: "Y豪车",
                categoryLevel: 3,
                parent: 1338,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431343217000,
                updateTime: 1431343217000
              }
            ]
          },
          {
            categoryId: 1341,
            categoryName: "Y动物",
            categoryLevel: 2,
            parent: 1207,
            sort: 7,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431413698000,
            updateTime: 1431413748000,
            children: [
              {
                categoryId: 1342,
                categoryName: "Y狗",
                categoryLevel: 3,
                parent: 1341,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431413748000,
                updateTime: 1431413748000
              }
            ]
          },
          {
            categoryId: 1343,
            categoryName: "Y多余",
            categoryLevel: 2,
            parent: 1207,
            sort: 8,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
            createTime: 1431414129000,
            updateTime: 1431414174000,
            children: [
              {
                categoryId: 1344,
                categoryName: "Y多余余",
                categoryLevel: 3,
                parent: 1343,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1431414174000,
                updateTime: 1431414174000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1161,
        categoryName: "电影一级测试类目",
        categoryLevel: 1,
        sort: 56,
        isLeaf: 0,
        version: 57,
        categoryPicSrc: "h008180905433f78e3e7d3db8eba7b47021",
        createTime: 1426555566000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1162,
            categoryName: "电影二级测试类目",
            categoryLevel: 2,
            parent: 1161,
            sort: 0,
            isLeaf: 0,
            version: 4,
            categoryPicSrc: "h008180905433f78e3e7d3db8eba7b47021",
            createTime: 1426555615000,
            updateTime: 1453088095000,
            children: [
              {
                categoryId: 1163,
                categoryName: "电影三级测试类目",
                categoryLevel: 3,
                parent: 1162,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h008180905433f78e3e7d3db8eba7b47021",
                createTime: 1426555642000,
                updateTime: 1426555642000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1155,
        categoryName: "优惠券类目1",
        categoryLevel: 1,
        sort: 57,
        isLeaf: 0,
        version: 59,
        categoryPicSrc: "h00def2e2e5ac862960dc676208ac5a1999",
        createTime: 1426228739000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1156,
            categoryName: "ghy_class2优惠券类目",
            categoryLevel: 2,
            parent: 1155,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00def2e2e5ac862960dc676208ac5a1999",
            createTime: 1426228789000,
            updateTime: 1426228842000,
            children: [
              {
                categoryId: 1157,
                categoryName: "ghy_class3优惠券类目",
                categoryLevel: 3,
                parent: 1156,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00def2e2e5ac862960dc676208ac5a1999",
                createTime: 1426228842000,
                updateTime: 1426228842000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1001,
        categoryName: "亲子1001",
        categoryLevel: 1,
        sort: 58,
        isLeaf: 0,
        version: 2075,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1010,
            categoryName: "宝宝营养",
            categoryLevel: 2,
            parent: 1001,
            sort: 1,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1011,
            categoryName: "车床玩具",
            categoryLevel: 2,
            parent: 1001,
            sort: 2,
            isLeaf: 0,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000,
            children: [
              {
                categoryId: 1063,
                categoryName: "辅食",
                categoryLevel: 3,
                parent: 1011,
                sort: 1,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              },
              {
                categoryId: 1064,
                categoryName: "奶粉",
                categoryLevel: 3,
                parent: 1011,
                sort: 2,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              },
              {
                categoryId: 1065,
                categoryName: "营养品",
                categoryLevel: 3,
                parent: 1011,
                sort: 3,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              }
            ]
          },
          {
            categoryId: 1012,
            categoryName: "派对！",
            categoryLevel: 2,
            parent: 1001,
            sort: 3,
            isLeaf: 0,
            version: 2016,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1430904056000,
            children: [
              {
                categoryId: 1066,
                categoryName: "玩具",
                categoryLevel: 3,
                parent: 1012,
                sort: 1,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              },
              {
                categoryId: 1067,
                categoryName: "婴幼儿车",
                categoryLevel: 3,
                parent: 1012,
                sort: 2,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              },
              {
                categoryId: 1068,
                categoryName: "婴幼",
                categoryLevel: 3,
                parent: 1012,
                sort: 3,
                isLeaf: 1,
                version: 2016,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1430287812000
              }
            ]
          },
          {
            categoryId: 1013,
            categoryName: "亲子摄影",
            categoryLevel: 2,
            parent: 1001,
            sort: 4,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1014,
            categoryName: "亲子游乐",
            categoryLevel: 2,
            parent: 1001,
            sort: 5,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1015,
            categoryName: "童装童鞋",
            categoryLevel: 2,
            parent: 1001,
            sort: 6,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1016,
            categoryName: "亲子早教",
            categoryLevel: 2,
            parent: 1001,
            sort: 7,
            isLeaf: 0,
            version: 2016,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1430216565000,
            children: [
              {
                categoryId: 1069,
                categoryName: "童鞋",
                categoryLevel: 3,
                parent: 1016,
                sort: 1,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              },
              {
                categoryId: 1070,
                categoryName: "童装",
                categoryLevel: 3,
                parent: 1016,
                sort: 2,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              }
            ]
          },
          {
            categoryId: 1017,
            categoryName: "孕婴用品",
            categoryLevel: 2,
            parent: 1001,
            sort: 8,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1275,
            categoryName: "测试",
            categoryLevel: 2,
            parent: 1001,
            sort: 9,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
            createTime: 1430287861000,
            updateTime: 1430287861000
          }
        ]
      },
      {
        categoryId: 1003,
        categoryName: "1003餐饮",
        categoryLevel: 1,
        sort: 60,
        isLeaf: 0,
        version: 2080,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1401,
            categoryName: "APP餐饮类目004",
            categoryLevel: 2,
            parent: 1003,
            sort: 2,
            isLeaf: 1,
            version: 2,
            categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
            createTime: 1434332689000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1399,
            categoryName: "APP餐饮类目002",
            categoryLevel: 2,
            parent: 1003,
            sort: 4,
            isLeaf: 0,
            version: 6,
            categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
            createTime: 1434332634000,
            updateTime: 1436758437000,
            children: [
              {
                categoryId: 1405,
                categoryName: "餐饮类目002-002",
                categoryLevel: 3,
                parent: 1399,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
                createTime: 1434332852000,
                updateTime: 1434332852000
              },
              {
                categoryId: 1404,
                categoryName: "餐饮类目002-001",
                categoryLevel: 3,
                parent: 1399,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
                createTime: 1434332826000,
                updateTime: 1434332852000
              }
            ]
          },
          {
            categoryId: 1029,
            categoryName: "东南亚菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 6,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1030,
            categoryName: "海鲜",
            categoryLevel: 2,
            parent: 1003,
            sort: 7,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1031,
            categoryName: "韩国料理",
            categoryLevel: 2,
            parent: 1003,
            sort: 8,
            isLeaf: 1,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1032,
            categoryName: "湖北菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 9,
            isLeaf: 0,
            version: 2020,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1033,
            categoryName: "火锅",
            categoryLevel: 2,
            parent: 1003,
            sort: 10,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1034,
            categoryName: "江浙菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 11,
            isLeaf: 1,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1035,
            categoryName: "咖啡厅",
            categoryLevel: 2,
            parent: 1003,
            sort: 12,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1036,
            categoryName: "面包甜点",
            categoryLevel: 2,
            parent: 1003,
            sort: 13,
            isLeaf: 1,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1038,
            categoryName: "烧烤",
            categoryLevel: 2,
            parent: 1003,
            sort: 15,
            isLeaf: 1,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1040,
            categoryName: "湘菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 17,
            isLeaf: 1,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1041,
            categoryName: "小吃快餐",
            categoryLevel: 2,
            parent: 1003,
            sort: 18,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1042,
            categoryName: "粤菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 19,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1043,
            categoryName: "云贵菜",
            categoryLevel: 2,
            parent: 1003,
            sort: 20,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1044,
            categoryName: "自助餐",
            categoryLevel: 2,
            parent: 1003,
            sort: 21,
            isLeaf: 0,
            version: 2019,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1436758437000
          },
          {
            categoryId: 1398,
            categoryName: "APP测试餐饮类目001",
            categoryLevel: 2,
            parent: 1003,
            sort: 22,
            isLeaf: 0,
            version: 7,
            categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
            createTime: 1434332596000,
            updateTime: 1436758437000,
            children: [
              {
                categoryId: 1403,
                categoryName: "餐饮类目001-002",
                categoryLevel: 3,
                parent: 1398,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
                createTime: 1434332802000,
                updateTime: 1434332802000
              },
              {
                categoryId: 1402,
                categoryName: "餐饮类目001*001",
                categoryLevel: 3,
                parent: 1398,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
                createTime: 1434332741000,
                updateTime: 1434332802000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1004,
        categoryName: "电影",
        categoryLevel: 1,
        sort: 61,
        isLeaf: 0,
        version: 2072,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1045,
            categoryName: "电影院",
            categoryLevel: 2,
            parent: 1004,
            sort: 1,
            isLeaf: 0,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1046,
            categoryName: "电影票",
            categoryLevel: 2,
            parent: 1004,
            sort: 2,
            isLeaf: 0,
            version: 2018,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1429864060000,
            children: [
              {
                categoryId: 1236,
                categoryName: "测试三级类目00020101",
                categoryLevel: 3,
                parent: 1046,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h001a2af2837fb2e396359bfcca7bbb0a04",
                createTime: 1429863845000,
                updateTime: 1429863845000
              },
              {
                categoryId: 1242,
                categoryName: "测试0102313123123",
                categoryLevel: 3,
                parent: 1046,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h001a2af2837fb2e396359bfcca7bbb0a04",
                createTime: 1429864016000,
                updateTime: 1429864016000
              },
              {
                categoryId: 1244,
                categoryName: "123213123",
                categoryLevel: 3,
                parent: 1046,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h001a2af2837fb2e396359bfcca7bbb0a04",
                createTime: 1429864060000,
                updateTime: 1429864060000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1005,
        categoryName: "酒店",
        categoryLevel: 1,
        sort: 62,
        isLeaf: 1,
        version: 2072,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1006,
        categoryName: "旅游",
        categoryLevel: 1,
        sort: 63,
        isLeaf: 0,
        version: 2073,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1007,
        categoryName: "生活服务",
        categoryLevel: 1,
        sort: 65,
        isLeaf: 0,
        version: 2072,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1047,
            categoryName: "冲印店",
            categoryLevel: 2,
            parent: 1007,
            sort: 1,
            isLeaf: 0,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000,
            children: [
              {
                categoryId: 1154,
                categoryName: "万达电影票",
                categoryLevel: 3,
                parent: 1047,
                sort: 1,
                isLeaf: 1,
                version: 2015,
                categoryPicSrc: "100",
                createTime: 1426226227000,
                updateTime: 1426169267000
              }
            ]
          },
          {
            categoryId: 1048,
            categoryName: "干洗店",
            categoryLevel: 2,
            parent: 1007,
            sort: 2,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1049,
            categoryName: "停车场",
            categoryLevel: 2,
            parent: 1007,
            sort: 3,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1050,
            categoryName: "眼镜店",
            categoryLevel: 2,
            parent: 1007,
            sort: 4,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1051,
            categoryName: "药店",
            categoryLevel: 2,
            parent: 1007,
            sort: 5,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1052,
            categoryName: "银行",
            categoryLevel: 2,
            parent: 1007,
            sort: 6,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1053,
            categoryName: "营业厅",
            categoryLevel: 2,
            parent: 1007,
            sort: 7,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          }
        ]
      },
      {
        categoryId: 1008,
        categoryName: "休闲",
        categoryLevel: 1,
        sort: 66,
        isLeaf: 0,
        version: 2072,
        categoryPicSrc: "100",
        createTime: 1426226227000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1054,
            categoryName: "手工DIY",
            categoryLevel: 2,
            parent: 1008,
            sort: 1,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1055,
            categoryName: "文化艺术",
            categoryLevel: 2,
            parent: 1008,
            sort: 2,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1056,
            categoryName: "洗浴",
            categoryLevel: 2,
            parent: 1008,
            sort: 3,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1057,
            categoryName: "运动健身",
            categoryLevel: 2,
            parent: 1008,
            sort: 4,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1058,
            categoryName: "桌球",
            categoryLevel: 2,
            parent: 1008,
            sort: 5,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          },
          {
            categoryId: 1059,
            categoryName: "足疗按摩",
            categoryLevel: 2,
            parent: 1008,
            sort: 6,
            isLeaf: 1,
            version: 2015,
            categoryPicSrc: "100",
            createTime: 1426226227000,
            updateTime: 1426169267000
          }
        ]
      },
      {
        categoryId: 1158,
        categoryName: "母婴",
        categoryLevel: 1,
        sort: 87,
        isLeaf: 0,
        version: 58,
        categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
        createTime: 1426230946000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1159,
            categoryName: "母婴生活用品",
            categoryLevel: 2,
            parent: 1158,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00d700d072ad7b2ccf56fab5ebd340052c",
            createTime: 1426230977000,
            updateTime: 1426231006000,
            children: [
              {
                categoryId: 1160,
                categoryName: "母婴3级类目",
                categoryLevel: 3,
                parent: 1159,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00351174214ac2dfff93151009725f3721",
                createTime: 1426231006000,
                updateTime: 1426231006000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1223,
        categoryName: "JY_自动化_类目2093",
        categoryLevel: 1,
        sort: 90,
        isLeaf: 1,
        version: 55,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429859564000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1224,
        categoryName: "sdfafasdfasdf",
        categoryLevel: 1,
        sort: 91,
        isLeaf: 1,
        version: 55,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429859734000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1168,
        categoryName: "JY_测试_家政",
        categoryLevel: 1,
        sort: 92,
        isLeaf: 0,
        version: 72,
        categoryPicSrc: "h00e12e4e6cefdf5388667e7afe581ef494",
        createTime: 1426821392000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1169,
            categoryName: "保姆",
            categoryLevel: 2,
            parent: 1168,
            sort: 0,
            isLeaf: 0,
            version: 55,
            categoryPicSrc: "h000bd68c78601b3dc2ebd6812f90093d7f",
            createTime: 1426831752000,
            updateTime: 1437439468000,
            children: [
              {
                categoryId: 1211,
                categoryName: "adfasdfasdf",
                categoryLevel: 3,
                parent: 1169,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429838443000,
                updateTime: 1429838443000
              },
              {
                categoryId: 1171,
                categoryName: "高级保姆",
                categoryLevel: 3,
                parent: 1169,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h00daf41ad1f44df92b88304a70da688725",
                createTime: 1426832835000,
                updateTime: 1429838443000
              },
              {
                categoryId: 1212,
                categoryName: "JY_自动化_类目7874",
                categoryLevel: 3,
                parent: 1169,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429839212000,
                updateTime: 1429839212000
              },
              {
                categoryId: 1213,
                categoryName: "JY_自动化_类目2978",
                categoryLevel: 3,
                parent: 1169,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429839611000,
                updateTime: 1429839611000
              },
              {
                categoryId: 1214,
                categoryName: "JY_自动化_类目9832",
                categoryLevel: 3,
                parent: 1169,
                sort: 4,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429839706000,
                updateTime: 1429839706000
              },
              {
                categoryId: 1215,
                categoryName: "JY_自动化_类目9656",
                categoryLevel: 3,
                parent: 1169,
                sort: 5,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429839994000,
                updateTime: 1429839994000
              },
              {
                categoryId: 1216,
                categoryName: "JY_自动化_类目7523",
                categoryLevel: 3,
                parent: 1169,
                sort: 6,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429845706000,
                updateTime: 1429845755000
              },
              {
                categoryId: 1217,
                categoryName: "JY_自动化_类目9344",
                categoryLevel: 3,
                parent: 1169,
                sort: 7,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429845826000,
                updateTime: 1429845826000
              },
              {
                categoryId: 1218,
                categoryName: "JY_自动化_类目3159",
                categoryLevel: 3,
                parent: 1169,
                sort: 8,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429845897000,
                updateTime: 1429845897000
              },
              {
                categoryId: 1219,
                categoryName: "JY_自动化_类目4685",
                categoryLevel: 3,
                parent: 1169,
                sort: 9,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429853687000,
                updateTime: 1429853687000
              },
              {
                categoryId: 1220,
                categoryName: "JY_自动化_类目4864",
                categoryLevel: 3,
                parent: 1169,
                sort: 10,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429854289000,
                updateTime: 1429854289000
              },
              {
                categoryId: 1221,
                categoryName: "JY_自动化_类目6687",
                categoryLevel: 3,
                parent: 1169,
                sort: 11,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429854695000,
                updateTime: 1429854695000
              },
              {
                categoryId: 1222,
                categoryName: "JY_自动化_类目7137",
                categoryLevel: 3,
                parent: 1169,
                sort: 12,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429855720000,
                updateTime: 1429855720000
              },
              {
                categoryId: 1246,
                categoryName: "JY_自动化_类目164",
                categoryLevel: 3,
                parent: 1169,
                sort: 13,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429864399000,
                updateTime: 1429864399000
              },
              {
                categoryId: 1247,
                categoryName: "JY_自动化_类目9787",
                categoryLevel: 3,
                parent: 1169,
                sort: 14,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429864623000,
                updateTime: 1429864623000
              },
              {
                categoryId: 1248,
                categoryName: "JY_自动化_类目6996",
                categoryLevel: 3,
                parent: 1169,
                sort: 15,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429864722000,
                updateTime: 1429864722000
              },
              {
                categoryId: 1249,
                categoryName: "JY自动化类目8308",
                categoryLevel: 3,
                parent: 1169,
                sort: 16,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429864857000,
                updateTime: 1429864857000
              },
              {
                categoryId: 1250,
                categoryName: "JY自动化类目9386",
                categoryLevel: 3,
                parent: 1169,
                sort: 17,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429865549000,
                updateTime: 1429865549000
              },
              {
                categoryId: 1251,
                categoryName: "JY自动化类目7980",
                categoryLevel: 3,
                parent: 1169,
                sort: 18,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429866064000,
                updateTime: 1429866064000
              },
              {
                categoryId: 1252,
                categoryName: "JY自动化类目8368",
                categoryLevel: 3,
                parent: 1169,
                sort: 19,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1429868073000,
                updateTime: 1429868073000
              },
              {
                categoryId: 1276,
                categoryName: "JY自动化类目9546",
                categoryLevel: 3,
                parent: 1169,
                sort: 20,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430374169000,
                updateTime: 1430374169000
              },
              {
                categoryId: 1279,
                categoryName: "JY自动化类目三91949",
                categoryLevel: 3,
                parent: 1169,
                sort: 21,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430375248000,
                updateTime: 1430375248000
              },
              {
                categoryId: 1282,
                categoryName: "JY自动化类目三21864",
                categoryLevel: 3,
                parent: 1169,
                sort: 22,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430376198000,
                updateTime: 1430376198000
              },
              {
                categoryId: 1285,
                categoryName: "JY自动化类目三18796",
                categoryLevel: 3,
                parent: 1169,
                sort: 23,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430376819000,
                updateTime: 1430376819000
              },
              {
                categoryId: 1288,
                categoryName: "JY自动化类目三57643",
                categoryLevel: 3,
                parent: 1169,
                sort: 24,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430377622000,
                updateTime: 1430377622000
              },
              {
                categoryId: 1300,
                categoryName: "JY类目三4710",
                categoryLevel: 3,
                parent: 1169,
                sort: 28,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430378510000,
                updateTime: 1430378510000
              },
              {
                categoryId: 1305,
                categoryName: "JY类目三5195",
                categoryLevel: 3,
                parent: 1169,
                sort: 31,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379306000,
                updateTime: 1430379306000
              },
              {
                categoryId: 1306,
                categoryName: "JY类目三9610",
                categoryLevel: 3,
                parent: 1169,
                sort: 32,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379498000,
                updateTime: 1430379498000
              },
              {
                categoryId: 1307,
                categoryName: "JY类目三6657",
                categoryLevel: 3,
                parent: 1169,
                sort: 33,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379634000,
                updateTime: 1430379634000
              },
              {
                categoryId: 1308,
                categoryName: "JY类目三5246",
                categoryLevel: 3,
                parent: 1169,
                sort: 34,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379711000,
                updateTime: 1430379711000
              },
              {
                categoryId: 1309,
                categoryName: "JY类目三3326",
                categoryLevel: 3,
                parent: 1169,
                sort: 35,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379798000,
                updateTime: 1430379798000
              },
              {
                categoryId: 1310,
                categoryName: "JY类目三5587",
                categoryLevel: 3,
                parent: 1169,
                sort: 36,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
                createTime: 1430379878000,
                updateTime: 1430379878000
              },
              {
                categoryId: 1173,
                categoryName: "低级保姆",
                categoryLevel: 3,
                parent: 1169,
                sort: 53,
                isLeaf: 1,
                version: 59,
                categoryPicSrc: "h00fe319a13b3df9f444835653c40427b61",
                createTime: 1426833086000,
                updateTime: 1437439468000
              }
            ]
          },
          {
            categoryId: 1170,
            categoryName: "保洁",
            categoryLevel: 2,
            parent: 1168,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00e18b9dd5d198424989a6277ad6416c6a",
            createTime: 1426832001000,
            updateTime: 1426832955000,
            children: [
              {
                categoryId: 1172,
                categoryName: "高级保洁",
                categoryLevel: 3,
                parent: 1170,
                sort: 0,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h00051ea927b4336d0b7d281071b2e74370",
                createTime: 1426832955000,
                updateTime: 1426833264000
              }
            ]
          },
          {
            categoryId: 1174,
            categoryName: "家教",
            categoryLevel: 2,
            parent: 1168,
            sort: 2,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00a8d331eaad42c5a464ad90af14a31b57",
            createTime: 1426833220000,
            updateTime: 1429863790000
          },
          {
            categoryId: 1281,
            categoryName: "JY自动化类目二21864",
            categoryLevel: 2,
            parent: 1168,
            sort: 3,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430376173000,
            updateTime: 1430376173000
          },
          {
            categoryId: 1284,
            categoryName: "JY自动化类目二18796",
            categoryLevel: 2,
            parent: 1168,
            sort: 4,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430376794000,
            updateTime: 1430376794000
          },
          {
            categoryId: 1287,
            categoryName: "JY自动化类目二57643",
            categoryLevel: 2,
            parent: 1168,
            sort: 5,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430377597000,
            updateTime: 1430377597000
          },
          {
            categoryId: 1290,
            categoryName: "JY自动化类目二83507",
            categoryLevel: 2,
            parent: 1168,
            sort: 6,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430377817000,
            updateTime: 1430377817000
          },
          {
            categoryId: 1293,
            categoryName: "JY自动化类目二8759",
            categoryLevel: 2,
            parent: 1168,
            sort: 7,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430378120000,
            updateTime: 1430378120000
          },
          {
            categoryId: 1296,
            categoryName: "JY自动化类目二70293",
            categoryLevel: 2,
            parent: 1168,
            sort: 8,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430378263000,
            updateTime: 1430378263000
          },
          {
            categoryId: 1299,
            categoryName: "JY类目二4710",
            categoryLevel: 2,
            parent: 1168,
            sort: 9,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430378485000,
            updateTime: 1430378485000
          },
          {
            categoryId: 1302,
            categoryName: "JY类目二4118",
            categoryLevel: 2,
            parent: 1168,
            sort: 10,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
            createTime: 1430378607000,
            updateTime: 1430378607000
          }
        ]
      },
      {
        categoryId: 1165,
        categoryName: "睡着",
        categoryLevel: 1,
        sort: 93,
        isLeaf: 0,
        version: 62,
        categoryPicSrc: "h00bf1f0f3f80b0339104f6f58b617fec80",
        createTime: 1426666801000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1253,
        categoryName: "测试一级类目0424",
        categoryLevel: 1,
        sort: 94,
        isLeaf: 0,
        version: 55,
        categoryPicSrc: "h008f1c492fbcdbce72bde9cb0acff9744e",
        createTime: 1429889690000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1254,
            categoryName: "测试二级目录0424",
            categoryLevel: 2,
            parent: 1253,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h0011baf5a6a4856c9dc924e8a027e63435",
            createTime: 1429889788000,
            updateTime: 1429890855000,
            children: [
              {
                categoryId: 1256,
                categoryName: "测试三级类目0424",
                categoryLevel: 3,
                parent: 1254,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h0042043d9b0ce3d57d947f5d5a93d8150b",
                createTime: 1429890855000,
                updateTime: 1429890855000
              }
            ]
          },
          {
            categoryId: 1255,
            categoryName: "测试二级类目0424_2",
            categoryLevel: 2,
            parent: 1253,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "h004760cefc7abc466400f77ee12bf2b657",
            createTime: 1429889884000,
            updateTime: 1429890965000,
            children: [
              {
                categoryId: 1257,
                categoryName: "测试三级类目0424_2",
                categoryLevel: 3,
                parent: 1255,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h001b24e2a2cc10a798ce8cb18f2e2937a4",
                createTime: 1429890926000,
                updateTime: 1429890926000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1187,
        categoryName: "Y_百货",
        categoryLevel: 1,
        sort: 95,
        isLeaf: 0,
        version: 61,
        categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
        createTime: 1428979430000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1188,
            categoryName: "食品",
            categoryLevel: 2,
            parent: 1187,
            sort: 1,
            isLeaf: 0,
            version: 4,
            categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
            createTime: 1428979480000,
            updateTime: 1428979627000,
            children: [
              {
                categoryId: 1190,
                categoryName: "肉食",
                categoryLevel: 3,
                parent: 1188,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1428979576000,
                updateTime: 1428979576000
              },
              {
                categoryId: 1191,
                categoryName: "水果",
                categoryLevel: 3,
                parent: 1188,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00e7b9ac02830aacac9493a2d009b13ebe",
                createTime: 1428979627000,
                updateTime: 1428979627000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1192,
        categoryName: "电子商品",
        categoryLevel: 1,
        sort: 96,
        isLeaf: 0,
        version: 61,
        categoryPicSrc: "h007cc5e33caceb89a3eaa8226d665f1e22",
        createTime: 1429166644000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1197,
        categoryName: "3L一级类目测试0420",
        categoryLevel: 1,
        sort: 97,
        isLeaf: 0,
        version: 62,
        categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
        createTime: 1429494311000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1198,
            categoryName: "3L二级类目测试0420",
            categoryLevel: 2,
            parent: 1197,
            sort: 1,
            isLeaf: 0,
            version: 4,
            categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
            createTime: 1429494344000,
            updateTime: 1429603839000,
            children: [
              {
                categoryId: 1200,
                categoryName: "别动",
                categoryLevel: 3,
                parent: 1198,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00541b99a6ef7538a67d390ce46ea49094",
                createTime: 1429603013000,
                updateTime: 1429603013000
              },
              {
                categoryId: 1202,
                categoryName: "测试001",
                categoryLevel: 3,
                parent: 1198,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00541b99a6ef7538a67d390ce46ea49094",
                createTime: 1429603839000,
                updateTime: 1429603839000
              },
              {
                categoryId: 1199,
                categoryName: "3L三级类目测试0420",
                categoryLevel: 3,
                parent: 1198,
                sort: 3,
                isLeaf: 1,
                version: 3,
                categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
                createTime: 1429494376000,
                updateTime: 1429603839000
              }
            ]
          },
          {
            categoryId: 1201,
            categoryName: "别动听见没",
            categoryLevel: 2,
            parent: 1197,
            sort: 2,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00541b99a6ef7538a67d390ce46ea49094",
            createTime: 1429603045000,
            updateTime: 1429603045000
          }
        ]
      },
      {
        categoryId: 1229,
        categoryName: "sadfadfasdfsdfs",
        categoryLevel: 1,
        sort: 98,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429863699000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1230,
        categoryName: "我来新建个一级类目",
        categoryLevel: 1,
        sort: 99,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h0009642f7da6c82a94f141609507e2a63a",
        createTime: 1429863788000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1232,
        categoryName: "测试1111",
        categoryLevel: 1,
        sort: 100,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h001a2af2837fb2e396359bfcca7bbb0a04",
        createTime: 1429863792000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1237,
        categoryName: "12312312313123123",
        categoryLevel: 1,
        sort: 103,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429863889000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1238,
        categoryName: "1231231231231",
        categoryLevel: 1,
        sort: 104,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429863953000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1239,
        categoryName: "dfgh ",
        categoryLevel: 1,
        sort: 105,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h0009642f7da6c82a94f141609507e2a63a",
        createTime: 1429863985000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1241,
        categoryName: "444444",
        categoryLevel: 1,
        sort: 106,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h00541b99a6ef7538a67d390ce46ea49094",
        createTime: 1429864010000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1243,
        categoryName: "3241234rqwrqwer",
        categoryLevel: 1,
        sort: 107,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429864058000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1245,
        categoryName: "sadfasdfasdfas",
        categoryLevel: 1,
        sort: 108,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1429864137000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1277,
        categoryName: "JY自动化类目一87316",
        categoryLevel: 1,
        sort: 109,
        isLeaf: 1,
        version: 54,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430375018000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1278,
        categoryName: "JY自动化类目一91949",
        categoryLevel: 1,
        sort: 110,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430375223000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1280,
        categoryName: "JY自动化类目一21864",
        categoryLevel: 1,
        sort: 111,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430376153000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1283,
        categoryName: "JY自动化类目一18796",
        categoryLevel: 1,
        sort: 112,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430376774000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1286,
        categoryName: "JY自动化类目一57643",
        categoryLevel: 1,
        sort: 113,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430377577000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1289,
        categoryName: "JY自动化类目一83507",
        categoryLevel: 1,
        sort: 114,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430377796000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1292,
        categoryName: "JY自动化类目一8759",
        categoryLevel: 1,
        sort: 115,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430378099000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1295,
        categoryName: "JY自动化类目一70293",
        categoryLevel: 1,
        sort: 116,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430378243000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1298,
        categoryName: "JY类目一4710",
        categoryLevel: 1,
        sort: 117,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430378465000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1301,
        categoryName: "JY类目一4118",
        categoryLevel: 1,
        sort: 118,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h000185ffac14e8924fffcfb6bb009ffe2a",
        createTime: 1430378587000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1321,
        categoryName: "J购物",
        categoryLevel: 1,
        sort: 119,
        isLeaf: 0,
        version: 57,
        categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
        createTime: 1431072066000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1324,
            categoryName: "Ｊ家电 ",
            categoryLevel: 2,
            parent: 1321,
            sort: 0,
            isLeaf: 0,
            version: 5,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431072883000,
            updateTime: 1431306361000,
            children: [
              {
                categoryId: 1333,
                categoryName: "Ｊ电视",
                categoryLevel: 3,
                parent: 1324,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431304506000,
                updateTime: 1431304506000
              },
              {
                categoryId: 1334,
                categoryName: "Ｊ冰箱",
                categoryLevel: 3,
                parent: 1324,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431304568000,
                updateTime: 1431304568000
              },
              {
                categoryId: 1335,
                categoryName: "Ｊ洗衣机",
                categoryLevel: 3,
                parent: 1324,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431304822000,
                updateTime: 1431304822000
              },
              {
                categoryId: 1336,
                categoryName: "Ｊ厨房",
                categoryLevel: 3,
                parent: 1324,
                sort: 4,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431306361000,
                updateTime: 1431306361000
              }
            ]
          },
          {
            categoryId: 1323,
            categoryName: "J家纺",
            categoryLevel: 2,
            parent: 1321,
            sort: 1,
            isLeaf: 0,
            version: 8,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431072523000,
            updateTime: 1431304458000,
            children: [
              {
                categoryId: 1326,
                categoryName: "Ｊ被子",
                categoryLevel: 3,
                parent: 1323,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431072965000,
                updateTime: 1431072965000
              },
              {
                categoryId: 1327,
                categoryName: "Ｊ枕芯",
                categoryLevel: 3,
                parent: 1323,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431073074000,
                updateTime: 1431073074000
              },
              {
                categoryId: 1328,
                categoryName: "Ｊ床垫",
                categoryLevel: 3,
                parent: 1323,
                sort: 3,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431073121000,
                updateTime: 1431073121000
              },
              {
                categoryId: 1329,
                categoryName: "Ｊ毛巾",
                categoryLevel: 3,
                parent: 1323,
                sort: 4,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431073150000,
                updateTime: 1431073150000
              },
              {
                categoryId: 1331,
                categoryName: "Ｊ床单",
                categoryLevel: 3,
                parent: 1323,
                sort: 5,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431073398000,
                updateTime: 1431073398000
              },
              {
                categoryId: 1332,
                categoryName: "Ｊ凉席",
                categoryLevel: 3,
                parent: 1323,
                sort: 6,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
                createTime: 1431304458000,
                updateTime: 1431304458000
              }
            ]
          },
          {
            categoryId: 1322,
            categoryName: "J数码",
            categoryLevel: 2,
            parent: 1321,
            sort: 2,
            isLeaf: 1,
            version: 3,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431072244000,
            updateTime: 1431072883000
          },
          {
            categoryId: 1325,
            categoryName: "Ｊ服装 ",
            categoryLevel: 2,
            parent: 1321,
            sort: 3,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
            createTime: 1431072911000,
            updateTime: 1431072911000
          }
        ]
      },
      {
        categoryId: 1330,
        categoryName: "Ｊ窗帘",
        categoryLevel: 1,
        sort: 120,
        isLeaf: 1,
        version: 53,
        categoryPicSrc: "h00f7ca4af99cd1a6e9c107a38fd54ab749",
        createTime: 1431073363000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1345,
        categoryName: "玩家",
        categoryLevel: 1,
        sort: 121,
        isLeaf: 0,
        version: 54,
        categoryPicSrc: "h0041194ab03a58ebef35d4f2f476d3ca2e",
        createTime: 1431565285000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1347,
        categoryName: "娱乐",
        categoryLevel: 1,
        sort: 122,
        isLeaf: 0,
        version: 56,
        categoryPicSrc: "h00351174214ac2dfff93151009725f3721",
        createTime: 1431589103000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1373,
        categoryName: "秀场",
        categoryLevel: 1,
        sort: 123,
        isLeaf: 0,
        version: 54,
        categoryPicSrc: "h00ab30f8ca4792b36ad7ce1bbe006f9cec",
        createTime: 1432085667000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1374,
            categoryName: "zx测试",
            categoryLevel: 2,
            parent: 1373,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "h00ef2f0ba53edcbac934f34220d33f34d3",
            createTime: 1432085753000,
            updateTime: 1432085753000
          }
        ]
      },
      {
        categoryId: 1384,
        categoryName: "日产",
        categoryLevel: 1,
        sort: 124,
        isLeaf: 0,
        version: 52,
        categoryPicSrc: "h001a2af2837fb2e396359bfcca7bbb0a04",
        createTime: 1433471719000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1385,
            categoryName: "战神",
            categoryLevel: 2,
            parent: 1384,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h006c8b7e65f4ae8591cbf970ef20a7e35b",
            createTime: 1433471778000,
            updateTime: 1433473073000,
            children: [
              {
                categoryId: 1386,
                categoryName: "GTR R35",
                categoryLevel: 3,
                parent: 1385,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "h006c8b7e65f4ae8591cbf970ef20a7e35b",
                createTime: 1433473073000,
                updateTime: 1433730420000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1423,
        categoryName: "海涛一级类目",
        categoryLevel: 1,
        sort: 125,
        isLeaf: 1,
        version: 50,
        categoryPicSrc: "h00a0e77863f869005c5de91087339710d1",
        createTime: 1436754750000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1426,
        categoryName: "hhtestOP",
        categoryLevel: 1,
        sort: 126,
        isLeaf: 1,
        version: 49,
        categoryPicSrc: "h00363d48c2e10155458bd314a0fc5f39fe",
        createTime: 1436755115000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1436,
        categoryName: "test11",
        categoryLevel: 1,
        sort: 127,
        isLeaf: 1,
        version: 49,
        categoryPicSrc: "Array",
        createTime: 1437459708000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1439,
        categoryName: "三打三防",
        categoryLevel: 1,
        sort: 128,
        isLeaf: 1,
        version: 48,
        categoryPicSrc: "Array",
        createTime: 1437460477000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1440,
        categoryName: "省道v发送到",
        categoryLevel: 1,
        sort: 129,
        isLeaf: 1,
        version: 48,
        categoryPicSrc: "Array",
        createTime: 1437460511000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1441,
        categoryName: "QQ",
        categoryLevel: 1,
        sort: 130,
        isLeaf: 0,
        version: 50,
        categoryPicSrc: "h0098a0409138da7c26b15b71f69a153311",
        createTime: 1439367874000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1442,
            categoryName: "商品",
            categoryLevel: 2,
            parent: 1441,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h001188ad572b74c71b15478af48e8c2918",
            createTime: 1439368064000,
            updateTime: 1439377305000,
            children: [
              {
                categoryId: 1444,
                categoryName: "电子类",
                categoryLevel: 3,
                parent: 1442,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h003397314bc4402b1537c3c3d8f0d3655b",
                createTime: 1439377305000,
                updateTime: 1439377305000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1453,
        categoryName: "测试新建类目和品牌的",
        categoryLevel: 1,
        sort: 131,
        isLeaf: 1,
        version: 46,
        categoryPicSrc: "h00b25a29298dbe47c0f1c8656bd57259d6",
        createTime: 1444808298000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1454,
        categoryName: "购物-ll",
        categoryLevel: 1,
        sort: 132,
        isLeaf: 0,
        version: 48,
        categoryPicSrc: "h00d700d072ad7b2ccf56fab5ebd340052c",
        createTime: 1444888076000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1663,
            categoryName: "服装",
            categoryLevel: 2,
            parent: 1454,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1.HKTBvJT1RCvBVdK",
            createTime: 1466489979000,
            updateTime: 1466489979000
          },
          {
            categoryId: 1455,
            categoryName: "购物2级-ll",
            categoryLevel: 2,
            parent: 1454,
            sort: 2,
            isLeaf: 1,
            version: 2,
            categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
            createTime: 1444888123000,
            updateTime: 1466489979000
          }
        ]
      },
      {
        categoryId: 1456,
        categoryName: "1016一级类目",
        categoryLevel: 1,
        sort: 133,
        isLeaf: 0,
        version: 47,
        categoryPicSrc: "h00c44d3d743bda8770cc729a5e13cec54b",
        createTime: 1444981328000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1457,
            categoryName: "1016二级类目",
            categoryLevel: 2,
            parent: 1456,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "h00d700d072ad7b2ccf56fab5ebd340052c",
            createTime: 1444981350000,
            updateTime: 1444981371000,
            children: [
              {
                categoryId: 1458,
                categoryName: "1016三级类目",
                categoryLevel: 3,
                parent: 1457,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "h00351174214ac2dfff93151009725f3721",
                createTime: 1444981371000,
                updateTime: 1444981371000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1460,
        categoryName: "xxytest类目",
        categoryLevel: 1,
        sort: 134,
        isLeaf: 1,
        version: 45,
        categoryPicSrc: "T1cyWTBTbT1RCvBVdK",
        createTime: 1445503406000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1461,
        categoryName: "xxytest2",
        categoryLevel: 1,
        sort: 135,
        isLeaf: 0,
        version: 46,
        categoryPicSrc: "T16FETB_ZT1RCvBVdK",
        createTime: 1445820898000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1462,
            categoryName: "xxytest02",
            categoryLevel: 2,
            parent: 1461,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1NFhTBKdT1RCvBVdK",
            createTime: 1445820944000,
            updateTime: 1445820988000,
            children: [
              {
                categoryId: 1463,
                categoryName: "xxytest002",
                categoryLevel: 3,
                parent: 1462,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1cFZTBCbT1RCvBVdK",
                createTime: 1445820988000,
                updateTime: 1445820988000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1475,
        categoryName: "小小吃",
        categoryLevel: 1,
        sort: 137,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1TRATBydv1RCvBVdK",
        createTime: 1446531270000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1476,
            categoryName: "特色美味",
            categoryLevel: 2,
            parent: 1475,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1lXZTB7hT1RCvBVdK",
            createTime: 1446532879000,
            updateTime: 1446619866000,
            children: [
              {
                categoryId: 1478,
                categoryName: "蛋糕",
                categoryLevel: 3,
                parent: 1476,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1sFJTB_hT1RCvBVdK",
                createTime: 1446619866000,
                updateTime: 1446619866000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1479,
        categoryName: "吃_test_1104",
        categoryLevel: 1,
        sort: 139,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1CyATBCEv1RCvBVdK",
        createTime: 1446621994000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1480,
            categoryName: "快餐",
            categoryLevel: 2,
            parent: 1479,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1bNETB_dT1RCvBVdK",
            createTime: 1446622020000,
            updateTime: 1446622077000,
            children: [
              {
                categoryId: 1481,
                categoryName: "快快餐",
                categoryLevel: 3,
                parent: 1480,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1vzJTBTdT1RCvBVdK",
                createTime: 1446622077000,
                updateTime: 1446622077000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1483,
        categoryName: "化妆品A",
        categoryLevel: 1,
        sort: 141,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1aFJTBjZT1RCvBVdK",
        createTime: 1446626662000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1484,
            categoryName: "爽肤水",
            categoryLevel: 2,
            parent: 1483,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1tzxTBv_T1RCvBVdK",
            createTime: 1446626688000,
            updateTime: 1446626688000
          }
        ]
      },
      {
        categoryId: 1485,
        categoryName: "衣服",
        categoryLevel: 1,
        sort: 142,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1TNdTB4KT1RCvBVdK",
        createTime: 1446802025000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1489,
        categoryName: "服务",
        categoryLevel: 1,
        sort: 144,
        isLeaf: 1,
        version: 41,
        categoryPicSrc: "T11FdTB7bT1RCvBVdK",
        createTime: 1447058978000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1490,
        categoryName: "化妆品B",
        categoryLevel: 1,
        sort: 145,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1dFhTB_hT1RCvBVdK",
        createTime: 1447290187000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1491,
            categoryName: "护肤系列",
            categoryLevel: 2,
            parent: 1490,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1stLTBsYT1RCvBVdK",
            createTime: 1447290256000,
            updateTime: 1447290256000
          }
        ]
      },
      {
        categoryId: 1492,
        categoryName: "餐饮A",
        categoryLevel: 1,
        sort: 146,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1MaWTBgKT1RCvBVdK",
        createTime: 1447308130000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1493,
            categoryName: "川菜系列",
            categoryLevel: 2,
            parent: 1492,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1nyWTBjYT1RCvBVdK",
            createTime: 1447308202000,
            updateTime: 1447308279000,
            children: [
              {
                categoryId: 1494,
                categoryName: "美味鱼",
                categoryLevel: 3,
                parent: 1493,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1GaWTB_ZT1RCvBVdK",
                createTime: 1447308279000,
                updateTime: 1447308279000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1495,
        categoryName: "测试闪购A",
        categoryLevel: 1,
        sort: 147,
        isLeaf: 1,
        version: 41,
        categoryPicSrc: "T1zyLTBCCv1RCvBVdK",
        createTime: 1447309312000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1496,
        categoryName: "文化",
        categoryLevel: 1,
        sort: 148,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1ZNJTB_KT1RCvBVdK",
        createTime: 1447378802000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1507,
        categoryName: "QA线上测试购物类1级",
        categoryLevel: 1,
        sort: 149,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1_RLTByYv1RCvBVdK",
        createTime: 1448415315000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1508,
            categoryName: "QA线上测试购物类2级",
            categoryLevel: 2,
            parent: 1507,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1tzhTB__T1RCvBVdK",
            createTime: 1448415341000,
            updateTime: 1448419216000,
            children: [
              {
                categoryId: 1509,
                categoryName: "QA线上测试购物类3级",
                categoryLevel: 3,
                parent: 1508,
                sort: 1,
                isLeaf: 1,
                version: 2,
                categoryPicSrc: "T1gXhTBgCT1RCvBVdK",
                createTime: 1448415831000,
                updateTime: 1448419253000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1510,
        categoryName: "hhh餐饮",
        categoryLevel: 1,
        sort: 150,
        isLeaf: 1,
        version: 40,
        categoryPicSrc: "T1nNxTBjVT1RCvBVdK",
        createTime: 1450167426000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1511,
        categoryName: "test_类目1_白",
        categoryLevel: 1,
        sort: 151,
        isLeaf: 0,
        version: 43,
        categoryPicSrc: "T1mFhTBsAT1RCvBVdK",
        createTime: 1450257191000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1513,
            categoryName: "test_类目11_白",
            categoryLevel: 2,
            parent: 1511,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T10FxTB_JT1RCvBVdK",
            createTime: 1450257417000,
            updateTime: 1450262076000,
            children: [
              {
                categoryId: 1518,
                categoryName: "test_类目111_白",
                categoryLevel: 3,
                parent: 1513,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1RNdTBgDT1RCvBVdK",
                createTime: 1450262059000,
                updateTime: 1450262059000
              },
              {
                categoryId: 1519,
                categoryName: "test_类目112_白",
                categoryLevel: 3,
                parent: 1513,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1IyLTBXYv1RCvBVdK",
                createTime: 1450262076000,
                updateTime: 1450262076000
              }
            ]
          },
          {
            categoryId: 1514,
            categoryName: "test_类目12_白",
            categoryLevel: 2,
            parent: 1511,
            sort: 2,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1qXhTBsAT1RCvBVdK",
            createTime: 1450257429000,
            updateTime: 1450262098000,
            children: [
              {
                categoryId: 1520,
                categoryName: "test_类目121_白",
                categoryLevel: 3,
                parent: 1514,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1nNJTBbZT1RCvBVdK",
                createTime: 1450262098000,
                updateTime: 1450262098000
              }
            ]
          },
          {
            categoryId: 1515,
            categoryName: "test_类目13_白",
            categoryLevel: 2,
            parent: 1511,
            sort: 3,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1NFETByCv1RCvBVdK",
            createTime: 1450257439000,
            updateTime: 1450257439000
          }
        ]
      },
      {
        categoryId: 1512,
        categoryName: "test_类目2_白",
        categoryLevel: 1,
        sort: 152,
        isLeaf: 0,
        version: 42,
        categoryPicSrc: "T1JzxTBgLT1RCvBVdK",
        createTime: 1450257316000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1516,
            categoryName: "test_类目21_白",
            categoryLevel: 2,
            parent: 1512,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T10yLTBXKv1RCvBVdK",
            createTime: 1450261975000,
            updateTime: 1450261975000
          },
          {
            categoryId: 1517,
            categoryName: "test_类目22_白",
            categoryLevel: 2,
            parent: 1512,
            sort: 2,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1DNxTBjAT1RCvBVdK",
            createTime: 1450261990000,
            updateTime: 1450261990000
          }
        ]
      },
      {
        categoryId: 1536,
        categoryName: "干货",
        categoryLevel: 1,
        sort: 153,
        isLeaf: 0,
        version: 36,
        categoryPicSrc: "T1_NDTB7YT1RCvBVdK",
        createTime: 1451375724000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1537,
            categoryName: "海鲜干货",
            categoryLevel: 2,
            parent: 1536,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1VFZTBbVT1RCvBVdK",
            createTime: 1451375760000,
            updateTime: 1451375786000,
            children: [
              {
                categoryId: 1538,
                categoryName: "海参干货",
                categoryLevel: 3,
                parent: 1537,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T18RLTB5Yv1RCvBVdK",
                createTime: 1451375786000,
                updateTime: 1451375786000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1539,
        categoryName: "特产1",
        categoryLevel: 1,
        sort: 154,
        isLeaf: 0,
        version: 36,
        categoryPicSrc: "T1pXhTBjLT1RCvBVdK",
        createTime: 1451435327000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1540,
            categoryName: "地方特产",
            categoryLevel: 2,
            parent: 1539,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1qyWTB5Lv1RCvBVdK",
            createTime: 1451435418000,
            updateTime: 1451435541000,
            children: [
              {
                categoryId: 1541,
                categoryName: "辽宁特产",
                categoryLevel: 3,
                parent: 1540,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1INYTBCbT1RCvBVdK",
                createTime: 1451435541000,
                updateTime: 1451435541000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1547,
        categoryName: "zpy一级系统类目",
        categoryLevel: 1,
        sort: 155,
        isLeaf: 0,
        version: 34,
        categoryPicSrc: "T1jFJTBX_v1RCvBVdK",
        createTime: 1451887464000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1548,
            categoryName: "zpy二级系统类目",
            categoryLevel: 2,
            parent: 1547,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1CXDTB7hT1RCvBVdK",
            createTime: 1451887520000,
            updateTime: 1451887520000
          }
        ]
      },
      {
        categoryId: 1550,
        categoryName: "我是A",
        categoryLevel: 1,
        sort: 156,
        isLeaf: 1,
        version: 33,
        categoryPicSrc: "T1kXYTBCbT1RCvBVdK",
        createTime: 1452219850000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1551,
        categoryName: "我是D",
        categoryLevel: 1,
        sort: 157,
        isLeaf: 0,
        version: 34,
        categoryPicSrc: "T1nNETByhv1RCvBVdK",
        createTime: 1452219877000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1552,
            categoryName: "我是E",
            categoryLevel: 2,
            parent: 1551,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1qNETBbLT1RCvBVdK",
            createTime: 1452219905000,
            updateTime: 1452219926000,
            children: [
              {
                categoryId: 1553,
                categoryName: "我是F",
                categoryLevel: 3,
                parent: 1552,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1nNdTBgbT1RCvBVdK",
                createTime: 1452219926000,
                updateTime: 1452219926000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1554,
        categoryName: "方泽销售有属性",
        categoryLevel: 1,
        sort: 158,
        isLeaf: 1,
        version: 33,
        categoryPicSrc: "T1xFYTB7JT1RCvBVdK",
        createTime: 1452508148000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1555,
        categoryName: "lks-一级类目-测试01",
        categoryLevel: 1,
        sort: 159,
        isLeaf: 0,
        version: 34,
        categoryPicSrc: "T1daLTBKYv1RCvBVdK",
        createTime: 1452564700000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1556,
            categoryName: "lks-二级类目-测试01",
            categoryLevel: 2,
            parent: 1555,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1dFDTBjdT1RCvBVdK",
            createTime: 1452564784000,
            updateTime: 1452564815000,
            children: [
              {
                categoryId: 1557,
                categoryName: "lks-三级类目-测试01",
                categoryLevel: 3,
                parent: 1556,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1mFhTB4Av1RCvBVdK",
                createTime: 1452564815000,
                updateTime: 1452564815000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1562,
        categoryName: "dll测试类目",
        categoryLevel: 1,
        sort: 160,
        isLeaf: 0,
        version: 32,
        categoryPicSrc: "T1ZFZTBy_v1RCvBVdK",
        createTime: 1453168153000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1564,
            categoryName: "dll测试类目2级",
            categoryLevel: 2,
            parent: 1562,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1YNYTBKDT1RCvBVdK",
            createTime: 1453168188000,
            updateTime: 1453168188000
          }
        ]
      },
      {
        categoryId: 1563,
        categoryName: "A餐饮",
        categoryLevel: 1,
        sort: 161,
        isLeaf: 0,
        version: 32,
        categoryPicSrc: "T1wXhTByEv1RCvBVdK",
        createTime: 1453168185000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1565,
            categoryName: "A1-小吃",
            categoryLevel: 2,
            parent: 1563,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1CFdTBjKT1RCvBVdK",
            createTime: 1453168332000,
            updateTime: 1453168700000,
            children: [
              {
                categoryId: 1566,
                categoryName: "AA1-北京小吃",
                categoryLevel: 3,
                parent: 1565,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1RzDTB_hT1RCvBVdK",
                createTime: 1453168700000,
                updateTime: 1453168700000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1567,
        categoryName: "3L系统一级类目",
        categoryLevel: 1,
        sort: 162,
        isLeaf: 0,
        version: 32,
        categoryPicSrc: "T1KNJTBCAv1RCvBVdK",
        createTime: 1453537172000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1568,
            categoryName: "3L系统二级类目",
            categoryLevel: 2,
            parent: 1567,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T12aWTBCVv1RCvBVdK",
            createTime: 1453537216000,
            updateTime: 1453537243000,
            children: [
              {
                categoryId: 1569,
                categoryName: "3L系统三级类目",
                categoryLevel: 3,
                parent: 1568,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UyWTBCbv1RCvBVdK",
                createTime: 1453537243000,
                updateTime: 1453537243000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1570,
        categoryName: "撒放水电费",
        categoryLevel: 1,
        sort: 163,
        isLeaf: 1,
        version: 31,
        categoryPicSrc: "T1zFDTB_KT1RCvBVdK",
        createTime: 1454066859000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1571,
        categoryName: "这个",
        categoryLevel: 1,
        sort: 164,
        isLeaf: 1,
        version: 31,
        categoryPicSrc: "T1XNJTByVv1RCvBVdK",
        createTime: 1454071543000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1592,
        categoryName: "餐饮55",
        categoryLevel: 1,
        sort: 165,
        isLeaf: 1,
        version: 21,
        categoryPicSrc: "T1hzCTBKCT1RCvBVdK",
        createTime: 1457511380000,
        updateTime: 1469587955000
      },
      {
        categoryId: 1593,
        categoryLevel: 1,
        sort: 166,
        isLeaf: 0,
        version: 22,
        categoryPicSrc: "T1SzCTBKVT1RCvBVdK",
        createTime: 1457511479000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1594,
            categoryName: "餐饮661",
            categoryLevel: 2,
            parent: 1593,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KFDTBb_T1RCvBVdK",
            createTime: 1457511488000,
            updateTime: 1457511497000,
            children: [
              {
                categoryId: 1595,
                categoryName: "餐饮662",
                categoryLevel: 3,
                parent: 1594,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1UNZTBXZv1RCvBVdK",
                createTime: 1457511497000,
                updateTime: 1457511497000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1618,
        categoryName: "接口测试_专用类目1",
        categoryLevel: 1,
        sort: 173,
        isLeaf: 0,
        version: 20,
        categoryPicSrc: "T18zLTBmDT1RCvBVdK",
        createTime: 1460689866000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1619,
            categoryName: "接口测试_专用类目2",
            categoryLevel: 2,
            parent: 1618,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1Z8JTByWT1RCvBVdK",
            createTime: 1460689990000,
            updateTime: 1460690062000,
            children: [
              {
                categoryId: 1620,
                categoryName: "接口测试_专用类目3",
                categoryLevel: 3,
                parent: 1619,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1YNLTBmdT1RCvBVdK",
                createTime: 1460690062000,
                updateTime: 1460690062000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1664,
        categoryName: "lmj测试系统类目一级",
        categoryLevel: 1,
        sort: 174,
        isLeaf: 0,
        version: 10,
        categoryPicSrc: "T1F4VTBCLT1RCvBVdK",
        createTime: 1466497527000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1665,
            categoryName: "lmj测试系统类目二级",
            categoryLevel: 2,
            parent: 1664,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1a4KTBgdT1RCvBVdK",
            createTime: 1466497559000,
            updateTime: 1466497596000,
            children: [
              {
                categoryId: 1666,
                categoryName: "lmj测试系统类目三级",
                categoryLevel: 3,
                parent: 1665,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T14pbTBK_T1RCvBVdK",
                createTime: 1466497596000,
                updateTime: 1466497596000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1667,
        categoryName: "GW三期测试类目一级",
        categoryLevel: 1,
        sort: 175,
        isLeaf: 0,
        version: 10,
        categoryPicSrc: "T1f8DTBQJT1RCvBVdK",
        createTime: 1466564487000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1668,
            categoryName: "GW三期测试类目二级",
            categoryLevel: 2,
            parent: 1667,
            sort: 0,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1MpVTB7bT1RCvBVdK",
            createTime: 1466564572000,
            updateTime: 1466564618000,
            children: [
              {
                categoryId: 1669,
                categoryName: "GW三期测试类目三级",
                categoryLevel: 3,
                parent: 1668,
                sort: 0,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T124VTBKJT1RCvBVdK",
                createTime: 1466564618000,
                updateTime: 1466564618000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1674,
        categoryName: "GW三期服装类",
        categoryLevel: 1,
        sort: 176,
        isLeaf: 0,
        version: 8,
        categoryPicSrc: "T1_4KTByhv1RCvBVdK",
        createTime: 1466997704000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1675,
            categoryName: "GW三期女装类",
            categoryLevel: 2,
            parent: 1674,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1KpVTBCLT1RCvBVdK",
            createTime: 1467014571000,
            updateTime: 1467014622000,
            children: [
              {
                categoryId: 1676,
                categoryName: "GW三期裙装类",
                categoryLevel: 3,
                parent: 1675,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1YHKTBTKT1RCvBVdK",
                createTime: 1467014622000,
                updateTime: 1467014622000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1695,
        categoryName: "服饰",
        categoryLevel: 1,
        sort: 177,
        isLeaf: 0,
        version: 7,
        categoryPicSrc: "T1XpbTBvLT1RCvBVdK",
        createTime: 1467948114000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1696,
            categoryName: "无销售属性",
            categoryLevel: 2,
            parent: 1695,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1ApbTBvDT1RCvBVdK",
            createTime: 1467948152000,
            updateTime: 1467948177000,
            children: [
              {
                categoryId: 1697,
                categoryName: "无销售属性",
                categoryLevel: 3,
                parent: 1696,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1SHWTByxT1RCvBVdK",
                createTime: 1467948178000,
                updateTime: 1467948178000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1677,
        categoryName: "服饰",
        categoryLevel: 1,
        sort: 178,
        isLeaf: 0,
        version: 9,
        categoryPicSrc: "T1f4ATB5xT1RCvBVdK",
        createTime: 1467017585000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1678,
            categoryName: "女士外衣（改）",
            categoryLevel: 2,
            parent: 1677,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1p8_TByEv1RCvBVdK",
            createTime: 1467017752000,
            updateTime: 1468552781000,
            children: [
              {
                categoryId: 1679,
                categoryName: "短外套（改）",
                categoryLevel: 3,
                parent: 1678,
                sort: 1,
                isLeaf: 1,
                version: 4,
                categoryPicSrc: "T1_4bTBghT1RCvBVdK",
                createTime: 1467017810000,
                updateTime: 1468811937000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1680,
        categoryName: "美妆类1",
        categoryLevel: 1,
        sort: 179,
        isLeaf: 0,
        version: 9,
        categoryPicSrc: "T1Z4CTBTdT1RCvBVdK",
        createTime: 1467018264000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1681,
            categoryName: "美妆类2",
            categoryLevel: 2,
            parent: 1680,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1E4_TBbCT1RCvBVdK",
            createTime: 1467018353000,
            updateTime: 1467018419000,
            children: [
              {
                categoryId: 1682,
                categoryName: "美妆类3",
                categoryLevel: 3,
                parent: 1681,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1HpVTBvKT1RCvBVdK",
                createTime: 1467018419000,
                updateTime: 1467018419000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1683,
        categoryName: "热门女装-test",
        categoryLevel: 1,
        sort: 180,
        isLeaf: 0,
        version: 11,
        categoryPicSrc: "T1b4bTB7AT1RCvBVdK",
        createTime: 1467107208000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1684,
            categoryName: "裙装-test",
            categoryLevel: 2,
            parent: 1683,
            sort: 1,
            isLeaf: 0,
            version: 3,
            categoryPicSrc: "T1NpbTBjdT1RCvBVdK",
            createTime: 1467107247000,
            updateTime: 1467107417000,
            children: [
              {
                categoryId: 1687,
                categoryName: "半身裙",
                categoryLevel: 3,
                parent: 1684,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1fpLTByDT1RCvBVdK",
                createTime: 1467107388000,
                updateTime: 1467107388000
              },
              {
                categoryId: 1688,
                categoryName: "短裙",
                categoryLevel: 3,
                parent: 1684,
                sort: 2,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1z4_TBb_T1RCvBVdK",
                createTime: 1467107417000,
                updateTime: 1467107417000
              }
            ]
          },
          {
            categoryId: 1685,
            categoryName: "上装-test",
            categoryLevel: 2,
            parent: 1683,
            sort: 2,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1a8ATBmLT1RCvBVdK",
            createTime: 1467107329000,
            updateTime: 1467107329000
          },
          {
            categoryId: 1686,
            categoryName: "裤装-test",
            categoryLevel: 2,
            parent: 1683,
            sort: 3,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1O8bTB_KT1RCvBVdK",
            createTime: 1467107352000,
            updateTime: 1467107352000
          }
        ]
      },
      {
        categoryId: 1689,
        categoryName: "Vietnam",
        categoryLevel: 1,
        sort: 181,
        isLeaf: 0,
        version: 9,
        categoryPicSrc: "T1Tp_TBbAT1RCvBVdK",
        createTime: 1467271969000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1690,
            categoryName: "Bike",
            categoryLevel: 2,
            parent: 1689,
            sort: 1,
            isLeaf: 1,
            version: 1,
            categoryPicSrc: "T1gpbTB_VT1RCvBVdK",
            createTime: 1467272025000,
            updateTime: 1467272025000
          }
        ]
      },
      {
        categoryId: 1691,
        categoryName: "陈晟测试一级",
        categoryLevel: 1,
        sort: 182,
        isLeaf: 0,
        version: 9,
        categoryPicSrc: "T1UHKTB_hT1RCvBVdK",
        createTime: 1467350519000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1692,
            categoryName: "陈晟测试二级",
            categoryLevel: 2,
            parent: 1691,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1lHATBmYT1RCvBVdK",
            createTime: 1467350577000,
            updateTime: 1467350603000,
            children: [
              {
                categoryId: 1693,
                categoryName: "陈晟测试三级",
                categoryLevel: 3,
                parent: 1692,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1O8bTBjZT1RCvBVdK",
                createTime: 1467350603000,
                updateTime: 1467350603000
              }
            ]
          }
        ]
      },
      {
        categoryId: 1703,
        categoryName: "caicaicai",
        categoryLevel: 1,
        sort: 183,
        isLeaf: 0,
        version: 5,
        categoryPicSrc: "T1.H_TBsZT1RCvBVdK",
        createTime: 1468569315000,
        updateTime: 1469587955000,
        children: [
          {
            categoryId: 1704,
            categoryName: "caicai",
            categoryLevel: 2,
            parent: 1703,
            sort: 1,
            isLeaf: 0,
            version: 2,
            categoryPicSrc: "T1nHbTB_WT1RCvBVdK",
            createTime: 1468569356000,
            updateTime: 1468569389000,
            children: [
              {
                categoryId: 1705,
                categoryName: "cai",
                categoryLevel: 3,
                parent: 1704,
                sort: 1,
                isLeaf: 1,
                version: 1,
                categoryPicSrc: "T1m8LTB5DT1RCvBVdK",
                createTime: 1468569389000,
                updateTime: 1468569389000
              }
            ]
          }
        ]
      }
    ];
    /**
     * list必须包含的字段：
     * parent -父节点的id
     */
    if (process.env.DEBUG) {
      this.listPromise = Promise.resolve(demoData);
    } else {
      this.listPromise = Restangular.allUrl('goodlist', '/goods/coupon_component/selectCategories').getList();
    }

    const exampleCode = `
    <bp-checkboxtree list-promise="vm.loadPromise" ng-model="vm.form.cities" config="vm.config"></bp-checkboxtree>

    //拉去列表数据的promise
    this.loadPromise = $http.get('/Database/coupon_component/selectCity');

    //这个配置用于避免或减少数据转换
    this.config = {
          //指示子节点的字段名
          fieldOfChildren: 'child',
          //指示节点名的字段
          fieldOfName: 'name',
          //指示节点id的字段
          fieldOfId: 'categoryId'
    };

    //约定：所有抛到后端的都放到这个键下
    this.form = {};
    `;
    this.exampleHtml = $sce.trustAsHtml(Prism.highlight(exampleCode, Prism.languages.html));
  }
}

export default RecruitrangeController;
