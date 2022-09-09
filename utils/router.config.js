
const list = ['navigateTo','redirectTo','reLaunch','switchTab'] 
import {clearnRequestFn} from 'utils/index.js'
export default function initRouter() {
	list.forEach(key => {
		uni.addInterceptor(key,{
			invoke(e) {
				clearnRequestFn() // 清空取消函数
				return true
			  },
			  fail(err) {
			    console.log('interceptor-fail',err)
			  }
		})
	})
}