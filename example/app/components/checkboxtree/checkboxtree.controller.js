
export default class CheckboxtreeController {
  constructor($q,$state,$timeout) {
    'ngInject'
    this.$state= $state;
    this.$q = $q;
    $timeout(() => {
      this.datasource = [{
        name: '第一个节点',
        categoryId: 1001,
        child: [{
          name: '第一个节点的子节点',
          categoryId: 1001001,
          parent: 1001,
        },
          {
            name: '第一个节点的子节点2',
            parent: 1001,
            categoryId: 1001002
          }]
      },
        {
          name: '第二个节点(没有子节点)',
          categoryId: 1002
        }];
    }, 100);
    //这个配置用于避免或减少数据转换
    this.config = {
      //指示子节点的字段名
      fieldOfChildren: 'child',
      //指示节点名的字段
      fieldOfName: 'name',
      //指示节点id的字段
      fieldOfId: 'categoryId'
    };

    this.form = {};

    /**发送给服务端的数据，以及数据回填操作 */
    this.form.category = [
      {
        name: '第二个节点(没有子节点)',
        categoryId: 1002
      }];

  }

  mockService() {
    let self = this;
    return {
      mock(data) {
        let deferred = self.$q.defer();
        deferred.resolve(data);
        return deferred.promise;
      }
    }
  }
}
