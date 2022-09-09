
<script>
	import {mapState} from 'vuex'
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		},
		watch: {
			loading(newValue) {
				if(newValue) {
					uni.showLoading({
						title: '加载中'
					});
				}else{
					uni.hideLoading();
				}
			}
		},
		computed: {
			...mapState(['loading'])
		}
	}
</script>

<style>
	@import url('./static/fonts/iconfont.css');
	/*每个页面公共css */
</style>
