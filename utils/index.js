import store from '@/store/index.js'
import * as types from '@/store/types.js'
export function clearnRequestFn() {
	store.commit(types.Clear_REQUEST_TOKEN)
}