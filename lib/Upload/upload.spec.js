/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/upload
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import UploadModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  removeBtn() {
    return angular.element(this.element.querySelectorAll('.glyphicon-remove-circle'));
  }

  controller() {
    return angular.element(this.element).scope().$$childHead;
  }
}

describe('Upload', () => {
  let $rootScope, $compile;

  beforeEach(window.module(UploadModule.name));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试upload', () => {
      it("测试accept，如果上传文件不符合设置，应该return false", () => {
        var scope = $rootScope.$new();
        scope.fileList1 = [];
        scope.accept = {
          size: { min: 10, max: '20MB' },
          width: { min: 1000, max: 10000 },
          height: { min: 100, max: 300 },
          pattern: 'image/*'
        };
        var element = $compile(`<f-upload action="/action.do"
              accept="accept"
              data="{a: 1}"
              file-list="vm.fileList1">
      <span class="btn btn-default">
        <span class="glyphicon glyphicon-upload"></span>
        Upload
      </span>
    </f-upload>`)(scope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var controller = finder.controller();
        var files = [{
          $error: "minWidth",
          $errorParam: 1000,
          $ngfBlobUrl: "blob:http://10.1.82.30:3000/f7f6498f-3092-439d-bbe7-4f2061e28f07",
          $ngfHeight: 312,
          $ngfWidth: 404,
          lastModified: 1483408916000,
          name: "屏幕快照 2017-01-03 10.01.51.png",
          size: 21364,
          type: "image/png",
          webkitRelativePath: ""
        }];
        expect(controller.vm.upload(null, null, files)).to.be.false;
      });

      it("测试beforeUpload，如果beforeUpload return false 应该终止上传", () => {
        var scope = $rootScope.$new();
        scope.fileList1 = [];
        scope.accept = {
          size: { min: 10, max: '20MB' },
          width: { min: 1000, max: 10000 },
          height: { min: 100, max: 300 },
          pattern: 'image/*'
        };
        scope.beforeUpload = function () {
          return false;
        };
        var element = $compile(`<f-upload action="/action.do"
              accept="accept"
              before-upload="beforeUpload"
              file-list="vm.fileList1">
      <span class="btn btn-default">
        <span class="glyphicon glyphicon-upload"></span>
        Upload
      </span>
    </f-upload>`)(scope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var controller = finder.controller();
        var files = [{
          $ngfBlobUrl: "blob:http://10.1.82.30:3000/f7f6498f-3092-439d-bbe7-4f2061e28f07",
          $ngfHeight: 312,
          $ngfWidth: 404,
          lastModified: 1483408916000,

          name: "屏幕快照 2017-01-03 10.01.51.png",
          size: 21364,
          type: "image/png",
          webkitRelativePath: ""
        }];
        expect(controller.vm.upload(null, null, files)).to.be.false;
      });

      it("测试onRemove，点击删除图标应该调用onRemove", () => {
        var scope = $rootScope.$new();
        scope.fileList1 = [];
        scope.accept = {
          size: { min: 10, max: '20MB' },
          width: { min: 1000, max: 10000 },
          height: { min: 100, max: 300 },
          pattern: 'image/*'
        };
        scope.defaultFileList = [{
          url: 'http://www.fancyui.org/img-a04b6a41f26906e5c8732586d2d1261b.png',
          name: 'test.png'
        }];

        var hasCalled = false;

        scope.onRemove = function () {
          hasCalled = true;
        };
        var element = $compile(`<f-upload action="/action.do"
              accept="accept"
              on-remove="onRemove"
              default-file-list="vm.defaultFileList"
              file-list="vm.fileList1">
      <span class="btn btn-default">
        <span class="glyphicon glyphicon-upload"></span>
        Upload
      </span>
    </f-upload>`)(scope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var controller = finder.controller();
        controller.vm.onRemove();

        expect(hasCalled).to.be.true;
      });

      it("测试parseError", () => {
        var scope = $rootScope.$new();
        scope.fileList1 = [];
        scope.accept = {
          size: { min: 10, max: '20MB' },
          width: { min: 1000, max: 10000 },
          height: { min: 100, max: 300 },
          pattern: 'image/*'
        };
        scope.defaultFileList = [{
          url: 'http://www.fancyui.org/img-a04b6a41f26906e5c8732586d2d1261b.png',
          name: 'test.png'
        }];

        var hasCalled = false;

        scope.onRemove = function () {
          hasCalled = true;
        };
        var element = $compile(`<f-upload action="/action.do"
              accept="accept"
              on-remove="onRemove"
              default-file-list="vm.defaultFileList"
              file-list="vm.fileList1">
      <span class="btn btn-default">
        <span class="glyphicon glyphicon-upload"></span>
        Upload
      </span>
    </f-upload>`)(scope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var controller = finder.controller();
        var errorMsg = controller.vm.parseError({
          $error: 'minWidth',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最小宽度为1');

        errorMsg = controller.vm.parseError({
          $error: 'maxWidth',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最大宽度为1');

        errorMsg = controller.vm.parseError({
          $error: 'minHeight',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最小高度为1');

        errorMsg = controller.vm.parseError({
          $error: 'maxHeight',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最大高度为1');

        errorMsg = controller.vm.parseError({
          $error: 'minSize',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最小为1');

        errorMsg = controller.vm.parseError({
          $error: 'maxSize',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件最大为1');

        errorMsg = controller.vm.parseError({
          $error: 'pattern',
          $errorParam: 1
        });

        expect(errorMsg).to.be.equal('文件格式不符 1');
      });

      it("测试自定义uplaod", () => {
        var scope = $rootScope.$new();
        var resoveData;
        scope.fileList1 = [];
        scope.accept = {
          size: { min: 10, max: '20MB' },
          width: { min: 1000, max: 10000 },
          height: { min: 100, max: 300 },
          pattern: 'image/*'
        };
        scope.beforeUpload = function () {
          return false;
        };
        scope.customRequest = function () {
          return Promise.resolve(1);
        };
        scope.onSuccess = function (r) {
          expect(r).to.be.equal(1);
        };
        var element = $compile(`<f-upload action="/action.do"
              accept="accept"
              before-upload="beforeUpload"
              custom-request="customRequest"
              on-success="onSuccess"
              file-list="vm.fileList1">
      <span class="btn btn-default">
        <span class="glyphicon glyphicon-upload"></span>
        Upload
      </span>
    </f-upload>`)(scope);
        $rootScope.$digest();
        var finder = new ElementFinder(element);
        var controller = finder.controller();
        var files = [{
          $ngfBlobUrl: "blob:http://10.1.82.30:3000/f7f6498f-3092-439d-bbe7-4f2061e28f07",
          $ngfHeight: 312,
          $ngfWidth: 404,
          lastModified: 1483408916000,

          name: "屏幕快照 2017-01-03 10.01.51.png",
          size: 21364,
          type: "image/png",
          webkitRelativePath: ""
        }];
      });
    });
  });

});
