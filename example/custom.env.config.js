/**
 * 首先这个文件是被忽略的
 * 根据每个人环境不一样做修改, 这样从webpack.dist.config里面解放出来, 不用跟踪了.
 */

module.exports = {
	/**
	 * 要发布的sop项目路径
	 */
	distPath: '../../github/ffan-fe.github.io/',
	/**
	 * 要过滤的api, 解决跨域的, 根据项目的情况改一下
	 */
	apiFilter: ['/Database'],
	/**
	 * 要跨的目标域, 一般是sit, 需要服务端提交到sit之后才行
	 */
	targetDomain: 'http://sop.sit.ffan.com/',
	/**
	 * 登陆的cookie, 这里暂时自己先登陆一下, 把cookie拷贝过来
	 */
	cookie: 'PHPSESSID=sm9vejn7ffh0lqc0hfjklmd312'

};
