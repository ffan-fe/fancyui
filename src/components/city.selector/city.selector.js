import template from './template.html';
import controller from './city.selector.controller';
import './city.selector.less';

'use strict';

export default class CitySelector {
  constructor($uibModal, $q) {
    'ngInject';
    this.$uibModal = $uibModal;
    this.$q = $q;
    this.modalInstance = null;
  }
  open(config = {}) {
    const deferred = this.$q.defer();
    this.modalInstance = this.$uibModal.open({
      template,
      controller,
      controllerAs: 'vm',
      resolve: {
        isReadOnly: () => {
          return config.isReadOnly || false;
        },
        checkedList: () => {
          return config.checkedList || [];
        }
      }
    });
    this.modalInstance.result.then(
      cityIDList => {
        console.log('cityIDList', cityIDList);
        deferred.resolve(cityIDList);
      },
      () => {
        deferred.reject();
      }
    );

    return deferred.promise;
  }
}