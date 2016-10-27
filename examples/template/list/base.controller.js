/**
 * Created by fjywan on 16/3/15.
 */
import moment from 'moment';

class BaseController {
  constructor($location, $state, Api, urls) {
    let self = this;
    this.Api = Api;
    this.$state = $state;
    this.$location = $location;
    if (urls) {
      this.urls = urls;
    } else {
      this.urls = {
        detailUrl: 'shakeCityActivity/getActivityDetail',
        saveUrl: 'shakeCityActivity/save',
        commitUrl: 'shakeCityActivity/commit',
        agreeUrl: 'shakeCityActivity/agree',
        rejectUrl: 'shakeCityActivity/reject',
        offsaleUrl: 'shakeCityActivity/offsale',
        stopUrl: 'shakeCityActivity/stop',
        getLinkTypeUrl: 'shakeBase/getLinkType'
      };
    }
  }

  fetchAuth(cb) {
    this.Api.get('shakeCityActivity/getBtnAuth', '', 0).then(response => {
      console.log('base response', response);
      this.auths = response;
      cb ? cb.call(this, response, 'btn') : '';
    });
    this.Api.get('shakeBase/authRangeInfo', '', 0).then(response => {
      console.log('base response', response);
      this.cityAuth = response;
      cb ? cb.call(this, response.city, 'city') : '';
    });
  }

  /**
   * 拉回权限信息后更新config
   * @param auth
   * @param whichAuth ['btn', 'city']
   */
  updateConfig(auth, whichAuth) {
    if (whichAuth == 'btn') {
      this.config.createBtn.auth = auth.createBtn
    }
    if (whichAuth == 'city') {
      if (auth.readonly) {
        this.config.queryFields[1].type = 'display';
        this.config.queryFields[1].displayVal = auth.name;
        this.config.queryFields[1].initVal = auth.id;
      }
    }
    this.config = angular.copy(this.config);
  }

  stop(id, state) {
    let self = this;
    if (confirm("确认停止该活动吗？") == true) {
      this.Api.post(this.urls.stopUrl, {
        id: id
      }).then(function (data) {
        alert('停止/成功');
        self.goToList(state);
      })
    } else {
      return false;
    }
  }

  reject(id, state) {
    let self = this;
    this.Api.post(this.urls.rejectUrl, {
      id: id
    }).then(function (data) {
      alert('驳回成功');
      self.goToList(state);
    })
  }
}

export default BaseController;
