import axios from "axios";
import store from '@/store/index.js'
import * as types from '@/store/types.js'
axios.defaults.adapter = function(config) { 
    return new Promise((resolve, reject) => {
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };
                settle(resolve, reject, response);
            }
        })
    })
}
class HttpRequest {
	constructor() {
		this.baseURL = process.env.NODE_ENV == 'development' ? 'https://api-hmugo-web.itheima.net/api/public/v1/' : '/'
		this.timeout = 5000
		this.queue = {}
	}

	request(options) {
		const instance = axios.create()
		this.setInterceptor(instance, options.url)
		let config = {
			...options,
			baseURL: this.baseURL,
			timeout: this.timeout
		}
		return instance(config)
	}

	setInterceptor(instance, url) {

		instance.interceptors.request.use(config => {
			if (Object.keys(this.queue).length == 0) {
				store.commit(types.SET_GLOBAL_LOADING, true) // 开启loading
			}
			this.queue[url] = true
			const CancelToken = axios.CancelToken
			config.cancelToken = new CancelToken((c) => {
				store.commit(types.ADD_REQUEST_TOKEN, c) // 将请求函数 推入全局
			})

			// ... 设置请求头
			return config // 最后将请求返回出去
		})

		instance.interceptors.response.use(result => {
			delete this.queue[url]
			if (Object.keys(this.queue).length == 0) {
				store.commit(types.SET_GLOBAL_LOADING, false) // 关闭loading
			}
			result = result.data
			let code = result.meta.status
			
			if(code == 200) {
				return Promise.resolve(result)
			}else {
				switch (code){
					case 401:
						return Promise.reject('权限过期，请重新登录')
						break;
					default:
						break;
				}
			}
		}, error => {
			delete this.queue[url]
			if (Object.keys(this.queue).length == 0) {
				store.commit(types.SET_GLOBAL_LOADING, false) // 关闭loading
			}
			uni.showToast({
				title:error.message
			})
			return Promise.reject(error)
		})



	}

	get(url, params = {}) {
		return this.request({
			method: 'GET',
			url,
			params
		})
	}

	post(url, data = {}, params = {}) {
		return this.request({
			method: 'POST',
			url,
			data,
			params
		})
	}
}
export default new HttpRequest()
