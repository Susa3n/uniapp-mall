import request from '@/utils/request.js'
export function getBundleList() {
	return request.get('home/swiperdata')
}

// export default {getBundleList}
