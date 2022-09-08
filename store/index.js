import Vue from 'vue'
import Vuex from 'vuex'
import {
	modules
} from '@/store/modules/index.js'
import * as types from '@/store/types.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		loading: false,
		requestCancelFn: []
	},
	getters: {},
	mutations: {
		[types.ADD_REQUEST_TOKEN]: (state,fn) => {
			state.requestCancelFn = [...state.requestCancelFn,fn]
		},
		[types.Clear_REQUEST_TOKEN]: (state) => {
			state.requestCancelFn.forEach(cb => {
				cb()
			})
			state.requestCancelFn = []
		},
		[types.SET_GLOBAL_LOADING]:(state,payload) => {
			state.loading = payload
		}
	},
	actions: {

	},
	modules: {
		...modules
	}
})
window.$store = store
export default store
