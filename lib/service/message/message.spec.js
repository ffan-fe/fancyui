/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/message
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import MessageService from './message.js';

describe('Message', () => {
  let $rootScope, $compile, document, Message;
  beforeEach(inject((_$rootScope_, _$compile_, $document) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
    Message = new MessageService($document, _$rootScope_, _$compile_);
    document = $document;

  }));


  describe('测试API', () => {
    it('应该有[success,info,error,warning,loading]方法', () => {
      expect(Message.success).to.not.be.undefined;
      expect(Message.info).to.not.be.undefined;
      expect(Message.error).to.not.be.undefined;
      expect(Message.warning).to.not.be.undefined;
      expect(Message.loading).to.not.be.undefined;
    });
    it('测试 messageFactory', () => {
      Message.loading('test', 8000);
      Message.childScope.$digest();
      console.log('Message.container', Message.container.find('.f-message-custom-content span'));
      let msgText = Message.container.find('span').text();
      expect(msgText.trim()).to.be.equal('test');
    });
  });

});
