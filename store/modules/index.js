
const files = require.context('.',true,/\.js$/)

let modules = {}

files.keys().forEach(key => {
	if(key == './index.js') return 
	let [,name,type] = key.match(/\.\/([a-z]+)\/([a-z]+)\.js/)
	if(!modules[name]) {
		modules[name] = {
			namespaced: true
		}
	}
	modules[name][type] = files(key).default
})

export {modules}