/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Sat Mar 04 2017 22:22:48 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

class PaginationController {
  constructor() {
    if (!this.total) {
      throw new Error('PaginationController: total attribute must be provided');
    }

    if (!this.onChange || typeof this.onChange != 'function') {
      throw new Error('PaginationController: onChange attribute must be provided and executable');
    }
    if (!this.pageSize) {
      this.pageSize = 10;
    }

    if (!this.defaultCurrent) {
      this.defaultCurrent = 1
    }

    this.onPageClick = (e) => {
      let className = e.target.className;

      if (className) {
        //向前的处理函数
        if (className.includes('f-pagination-prev')) {
          console.log('pre');
          if (this.defaultCurrent == 1) {
            return
          }
          if (this.defaultCurrent > 1) {
            this.defaultCurrent -= 1;
          }
        }

        //向后的处理函数
        if (className.includes('f-pagination-next')) {
          console.log('next');
          if (this.defaultCurrent == this.modelPageRange.length) {
            return
          }
          if (this.defaultCurrent < this.modelPageRange.length) {
            this.defaultCurrent += 1;
          }
        }

        //向前5页的处理函数
        if (className.includes('f-pagination-jump-prev')) {
          console.log('pre');
          if (this.defaultCurrent > 5) {
            this.defaultCurrent -= 5;
          } else {
            this.defaultCurrent = 1;
          }
        }

        //向后5页的处理函数
        if (className.includes('f-pagination-jump-next')) {
          console.log('next');
          if (this.defaultCurrent < this.modelPageRange.length - 5) {
            this.defaultCurrent += 5;
          } else {
            this.defaultCurrent = this.modelPageRange.length;
          }
        }

        //点击页面数值的处理函数
        if (className.includes('f-pagination-item')) {
          console.log(parseInt(e.target.dataset.page));
          if (this.defaultCurrent == parseInt(e.target.dataset.page)) {
            return
          } else {
            this.defaultCurrent = parseInt(e.target.dataset.page);
          }
        }

        this.calculateViewPageRange(this.defaultCurrent, this.modelPageRange);
        this.onChange(this.defaultCurrent);
      }
    };

    this.data = [
      {id: '10', name: '10'},
      {id: '20', name: '20'},
      {id: '30', name: '30'},
      {id: '40', name: '40'},
      {id: '50', name: '50'}
    ];

    this.onSelect = item => {
      console.log('item', item);
      this.pageSize = parseInt(item.id);
      this.calculateModelPageRange();
      this.calculateViewPageRange(this.defaultCurrent = 1, this.modelPageRange);

      this.onShowSizeChange ? this.onShowSizeChange(parseInt(item)) : ''
    };
    this.city = '10';

    this.totalText = '';
    if (this.showTotal) {
      this.totalText = this.showTotal();
    }
  }

  onGoTo(page) {
    let parsedPage = parseInt(page);
    if (!parsedPage || parsedPage == this.defaultCurrent ) {
      return
    }

    if (parsedPage > this.modelPageRange.length) {
      parsedPage = this.modelPageRange.length;
    }
    if (parsedPage < 1) {
      parsedPage = 1;
    }

    this.defaultCurrent = parsedPage;
    this.calculateViewPageRange(this.defaultCurrent, this.modelPageRange);
    this.onChange(this.defaultCurrent);
  }

  $onInit() {
    this.calculateModelPageRange();
    this.calculateViewPageRange(this.defaultCurrent, this.modelPageRange);
  }

  calculateModelPageRange() {
    let repeatTime = Math.ceil(this.total / this.pageSize);
    return this.modelPageRange = [...Array(repeatTime).keys()].map(x => ++x);
  }

  calculateViewPageRange(curActivePage, modelPageRange) {
    let len = modelPageRange.length;
    if (len < 9) {
      return this.viewPageRange = modelPageRange;
    }

    if (curActivePage < 4) {
      return this.viewPageRange = [1, 2, 3, 4, 5, 'next5', len];
    }

    if (curActivePage > len - 4) {
      return this.viewPageRange = [1, 'pre5', len - 5, len - 4, len - 3, len - 2, len - 1, len];
    }

    return this.viewPageRange = [1, 'pre5', curActivePage - 2, curActivePage - 1, curActivePage, curActivePage + 1, curActivePage + 2, 'next5', len];
  }
}

export default PaginationController;
