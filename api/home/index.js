import request from '@/utils/request.js'
export function getBundleList() {
	return request.get('home/swiperdata')
}
export function getNavList() {
	return request.get('home/catitems')
}

export function getShopFloor() {
	return request.get('home/floordata')
}


// export default {getBundleList}
